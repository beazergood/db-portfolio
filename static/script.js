/* ===========================================================================
   chat-hero — controller (ES module)
   Pre-curated answers, custom-element rendering, View Transitions for theme.
   State is largely declarative: CSS :has() drives the hero / seen-prompt /
   completion states from the presence of <chat-entry> elements.
   =========================================================================== */

import answers from './answers.json' with { type: 'json' };
import './chat-entry.js?v=2';

// Real-question keys (excludes anything starting with `_`, like `_miss`)
const REAL_KEYS = Object.keys(answers).filter((k) => !k.startsWith('_'));
const TOTAL = REAL_KEYS.length;

// ------------------------------------------------------------------------- //
// Element refs                                                               //
// ------------------------------------------------------------------------- //

const $body     = document.body;
const $thread   = document.getElementById('thread');
const $form     = document.getElementById('input-row');
const $field    = document.getElementById('ask');
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
// `qText` is optional — if provided, it shows in the transcript as the       //
// visitor's literal phrasing instead of the canonical answer label.          //
// ------------------------------------------------------------------------- //

function ask(key, qText) {
  if (!answers[key]) return;

  // For real questions: dedup. Already-asked → scroll to existing.
  if (key !== '_miss' && path.includes(key)) {
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

  // For real keys, push to path and compute followups from the answer's list.
  // For _miss, skip path tracking and show every still-unanswered prompt as
  // the followup set.
  let fresh;
  if (key === '_miss') {
    fresh = REAL_KEYS.filter((k) => !path.includes(k));
  } else {
    path.push(key);
    fresh = answers[key].followups.filter((k) => !path.includes(k));
  }

  const entry = document.createElement('chat-entry');
  entry.setAttribute('q', key);
  if (qText) entry.setAttribute('q-text', qText);
  if (fresh.length > 0) entry.setAttribute('followups', fresh.join(','));
  entry.classList.add('is-fresh');
  $thread.appendChild(entry);
  setTimeout(() => entry.classList.remove('is-fresh'), 600);

  // URL hash captures the path through real answers only — misses are
  // ephemeral and don't replay well from URL.
  if (key !== '_miss' && history.replaceState) {
    history.replaceState(null, '', '#' + path.join(','));
  }

  // Mark completion when every real question has been asked. Pure body class
  // — CSS reveals the completion CTA by reading it.
  if (path.length >= TOTAL) $body.classList.add('is-complete');

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
  for (const key of REAL_KEYS) {
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

// ------------------------------------------------------------------------- //
// Event wiring                                                               //
// ------------------------------------------------------------------------- //

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.prompt');
  if (btn?.dataset.q) {
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
    // If the matched answer is already in the thread, ask() will scroll
    // to it instead of duping. Don't pass q-text in that case so the user
    // sees the existing entry's canonical label, not their typed phrase.
    if (path.includes(matched)) {
      ask(matched);
    } else {
      ask(matched, text);
    }
  } else {
    ask('_miss', text);
  }
  $field.value = '';
  // Reclaim focus so a follow-up question is one keystroke away.
  $field.focus({ preventScroll: true });
});

// Esc clears the field and drops focus.
$field.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    $field.value = '';
    $field.blur();
  }
});

// "/" anywhere on the page pulls focus to the input — a common power-user
// shortcut. Skip when the user is already typing in any field.
document.addEventListener('keydown', (e) => {
  if (e.key !== '/') return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const active = document.activeElement;
  if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable)) return;
  e.preventDefault();
  $field.focus({ preventScroll: true });
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
    if (answers[key] && !key.startsWith('_')) ask(key);
  });
}
