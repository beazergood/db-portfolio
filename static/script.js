/* ===========================================================================
   chat-hero — controller (ES module)
   Pre-curated answers, custom-element rendering, View Transitions for theme.
   State is largely declarative: CSS :has() drives the hero / seen-prompt /
   completion states from the presence of <chat-entry> elements.
   =========================================================================== */

import answers from './answers.json' with { type: 'json' };
import './chat-entry.js';

const TOTAL_QUESTIONS = Object.keys(answers).length;

// ------------------------------------------------------------------------- //
// Element refs                                                               //
// ------------------------------------------------------------------------- //

const $body     = document.body;
const $thread   = document.getElementById('thread');
const $form     = document.getElementById('input-row');
const $field    = document.getElementById('ask');
const $nudge    = document.getElementById('input-nudge');
const $themeBtn = document.querySelector('.theme-toggle');

// Visitor's path through the chat — preserves order, deduped
const path = [];

// ------------------------------------------------------------------------- //
// Hydrate                                                                    //
// ------------------------------------------------------------------------- //

$body.classList.add('is-enhanced');

// ------------------------------------------------------------------------- //
// Motion preference                                                          //
// ------------------------------------------------------------------------- //

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

// ------------------------------------------------------------------------- //
// Ask a question                                                             //
// ------------------------------------------------------------------------- //

function ask(key) {
  if (!answers[key]) return;

  // Already in the path → scroll to the existing entry, brief highlight
  if (path.includes(key)) {
    const existing = $thread.querySelector(`chat-entry[q="${key}"]`);
    if (existing) {
      existing.scrollIntoView({ behavior: 'smooth', block: 'start' });
      existing.classList.remove('is-pulse');
      void existing.offsetWidth;
      existing.classList.add('is-pulse');
      setTimeout(() => existing.classList.remove('is-pulse'), 1000);
    }
    return;
  }

  path.push(key);

  const meta = answers[key];
  const fresh = meta.followups.filter((k) => !path.includes(k));

  const entry = document.createElement('chat-entry');
  entry.setAttribute('q', key);
  if (fresh.length > 0) entry.setAttribute('followups', fresh.join(','));
  entry.classList.add('is-fresh');
  $thread.appendChild(entry);
  setTimeout(() => entry.classList.remove('is-fresh'), 600);

  if (history.replaceState) {
    history.replaceState(null, '', '#' + path.join(','));
  }

  requestAnimationFrame(() => {
    entry.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// ------------------------------------------------------------------------- //
// Match typed input to a curated answer                                      //
// ------------------------------------------------------------------------- //

function matchInput(text) {
  const norm = text.toLowerCase().replace(/[^a-z\s]/g, ' ').trim();
  if (!norm) return null;

  const words = norm.split(/\s+/);

  let best = null;
  let bestScore = 0;
  for (const key of Object.keys(answers)) {
    const tags = answers[key].tags;
    let score = 0;
    for (const w of words) {
      if (tags.indexOf(w) !== -1) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = key;
    }
  }
  return bestScore > 0 ? best : null;
}

function showNudge() {
  $nudge.hidden = false;
  // Pulse only the prompts that haven't been asked yet
  document.querySelectorAll('.prompts__list .prompt').forEach((b) => {
    if (path.includes(b.dataset.q)) return;
    b.classList.remove('is-pulse');
    void b.offsetWidth;
    b.classList.add('is-pulse');
  });
  setTimeout(() => {
    document.querySelectorAll('.prompt').forEach((b) => b.classList.remove('is-pulse'));
  }, 700);
}

function clearNudge() { $nudge.hidden = true; }

// ------------------------------------------------------------------------- //
// Event wiring                                                               //
// ------------------------------------------------------------------------- //

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.prompt');
  if (btn?.dataset.q) {
    clearNudge();
    ask(btn.dataset.q);
    return;
  }

  // Tier expand/collapse (the end-to-end stack diagram)
  const tier = e.target.closest('.tier');
  if (tier) {
    const expanded = tier.getAttribute('aria-expanded') === 'true';
    tier.setAttribute('aria-expanded', String(!expanded));
  }
});

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = $field.value.trim();
  if (!text) return;
  const matched = matchInput(text);
  if (matched) {
    clearNudge();
    ask(matched);
    $field.value = '';
  } else {
    showNudge();
  }
});

$field.addEventListener('input', () => {
  if (!$nudge.hidden) clearNudge();
});

// ------------------------------------------------------------------------- //
// Theme toggle (with View Transitions for cross-fade)                        //
// ------------------------------------------------------------------------- //

// iOS Safari URL bar / Chrome Android address bar follow this meta — keep it
// in sync with the active theme (not the OS pref).
const $themeColorMeta = document.querySelector('meta[name="theme-color"]');
const THEME_COLOR = { dark: '#0F0A14', light: '#FFFFFF' };

function setTheme(theme, persist) {
  const next = theme === 'light' ? 'light' : 'dark';
  const apply = () => {
    document.documentElement.dataset.theme = next;
    if ($themeColorMeta) $themeColorMeta.setAttribute('content', THEME_COLOR[next]);
    if (persist) {
      try { localStorage.setItem('db-theme', next); } catch (_) { /* no-op */ }
    }
    if ($themeBtn) {
      $themeBtn.setAttribute('aria-pressed', next === 'light' ? 'true' : 'false');
    }
  };

  if (persist && document.startViewTransition && !prefersReducedMotion()) {
    const t = document.startViewTransition(apply);
    // Swallow abort errors — they fire when a new transition starts before
    // the previous finishes (e.g. rapid theme-toggle clicks). Harmless.
    t.finished?.catch(() => {});
    t.ready?.catch(() => {});
  } else {
    apply();
  }
}

setTheme(document.documentElement.dataset.theme, false);

if ($themeBtn) {
  $themeBtn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === 'dark' ? 'light' : 'dark', true);
  });
}

// Note: we deliberately don't auto-respond to system colour-scheme changes.
// Dark is the canonical theme for this brand; light is opt-in via the toggle.

// ------------------------------------------------------------------------- //
// Restore from URL hash                                                      //
// ------------------------------------------------------------------------- //

const initial = (window.location.hash || '').replace(/^#/, '');
if (initial) {
  initial.split(',').forEach((key) => {
    if (answers[key]) ask(key);
  });
}
