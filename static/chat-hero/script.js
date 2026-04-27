/* ===========================================================================
   chat-hero — interactive layer
   Pre-curated answers. No LLM. Progressive enhancement.
   The visitor's path accumulates as a thread; each prompt is asked at most
   once. When they've asked all five, they've effectively read the site.
   =========================================================================== */

(function () {
  'use strict';

  // ---------------------------------------------------------------------- //
  // Curated answers + keyword tags                                          //
  // ---------------------------------------------------------------------- //

  const ANSWERS = {
    work: {
      label: 'What kind of work do you do?',
      tags: ['work', 'do', 'kind', 'build', 'specialise', 'specialize', 'offer'],
      followups: ['show', 'available', 'care'],
    },
    available: {
      label: 'Are you available?',
      tags: ['available', 'availability', 'free', 'capacity', 'hire', 'hiring', 'when'],
      followups: ['why', 'work', 'care'],
    },
    show: {
      label: 'Show me something you’ve built.',
      tags: ['show', 'something', 'built', 'project', 'projects', 'examples', 'example', 'portfolio', 'work'],
      followups: ['work', 'care', 'available'],
    },
    care: {
      label: 'What do you care about?',
      tags: ['care', 'value', 'values', 'principle', 'principles', 'matter', 'philosophy', 'believe'],
      followups: ['why', 'work', 'show'],
    },
    why: {
      label: 'Why hire a contractor?',
      tags: ['why', 'contractor', 'contract', 'consultant', 'freelance', 'reason', 'pitch'],
      followups: ['available', 'work', 'care'],
    },
  };

  const TOTAL_QUESTIONS = Object.keys(ANSWERS).length;

  // ---------------------------------------------------------------------- //
  // Element refs                                                            //
  // ---------------------------------------------------------------------- //

  const $body         = document.body;
  const $hero         = document.querySelector('.hero');
  const $thread       = document.getElementById('thread');
  const $template     = document.getElementById('entry-template');
  const $form         = document.getElementById('input-row');
  const $field        = document.getElementById('ask');
  const $nudge        = document.getElementById('input-nudge');
  const $fallback     = document.getElementById('fallback');
  const $themeBtn     = document.querySelector('.theme-toggle');
  const $complete     = document.getElementById('prompts-complete');

  // Visitor's path through the chat — preserves order, deduped
  const path = [];

  // ---------------------------------------------------------------------- //
  // Hydrate                                                                  //
  // ---------------------------------------------------------------------- //

  $body.classList.add('is-enhanced');

  function getAnswerHtml(key) {
    const node = $fallback.querySelector(`[data-answer="${key}"]`);
    if (!node) return '';
    const clone = node.cloneNode(true);
    const heading = clone.querySelector('h3');
    if (heading) heading.remove();
    return clone.innerHTML;
  }

  // ---------------------------------------------------------------------- //
  // Render                                                                  //
  // ---------------------------------------------------------------------- //

  function buildEntryNode(key) {
    const meta = ANSWERS[key];
    const fragment = $template.content.cloneNode(true);
    const article = fragment.querySelector('.entry');

    article.dataset.q = key;
    fragment.querySelector('.entry__q-text').textContent = meta.label;
    fragment.querySelector('.entry__body').innerHTML = getAnswerHtml(key);

    // Build follow-ups, excluding any that have already been asked
    const list = fragment.querySelector('.entry__followups-list');
    const fresh = meta.followups.filter((k) => !path.includes(k));
    if (fresh.length === 0) {
      // No fresh follow-ups — hide the whole footer rather than show "Or →" alone
      fragment.querySelector('.entry__followups').remove();
    } else {
      fresh.forEach((k) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.className = 'prompt';
        btn.type = 'button';
        btn.dataset.q = k;
        // Trim trailing punctuation for the button label
        btn.textContent = ANSWERS[k].label.replace(/[.?]+$/, '');
        li.appendChild(btn);
        list.appendChild(li);
      });
    }

    return article;
  }

  function ask(key) {
    if (!ANSWERS[key]) return;

    // Already asked — scroll to that entry and pulse
    if (path.includes(key)) {
      const existing = $thread.querySelector(`.entry[data-q="${key}"]`);
      if (existing) {
        existing.scrollIntoView({ behavior: 'smooth', block: 'start' });
        existing.classList.remove('is-pulse');
        void existing.offsetWidth; // restart animation
        existing.classList.add('is-pulse');
        setTimeout(() => existing.classList.remove('is-pulse'), 1000);
      }
      return;
    }

    path.push(key);

    // Hide the hero greeting on first ask
    if ($hero) $hero.style.display = 'none';

    const node = buildEntryNode(key);
    node.classList.add('is-fresh');
    $thread.appendChild(node);
    setTimeout(() => node.classList.remove('is-fresh'), 600);

    // Mark prompt as seen
    document.querySelectorAll(`.prompt[data-q="${key}"]`).forEach((b) => {
      b.classList.add('is-seen');
    });

    // Scroll the new entry into view
    requestAnimationFrame(() => {
      node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Update URL hash with the path so it can be shared / restored
    if (history.replaceState) {
      history.replaceState(null, '', '#' + path.join(','));
    }

    // Show completion state once everything's been asked
    if (path.length >= TOTAL_QUESTIONS && $complete) {
      $complete.hidden = false;
    }
  }

  // ---------------------------------------------------------------------- //
  // Match typed input to a curated answer                                   //
  // ---------------------------------------------------------------------- //

  function matchInput(text) {
    const norm = text.toLowerCase().replace(/[^a-z\s]/g, ' ').trim();
    if (!norm) return null;

    const words = norm.split(/\s+/);

    let best = null;
    let bestScore = 0;
    for (const key of Object.keys(ANSWERS)) {
      const tags = ANSWERS[key].tags;
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
    document.querySelectorAll('.prompt:not(.is-seen)').forEach((b) => {
      b.classList.remove('is-pulse');
      void b.offsetWidth;
      b.classList.add('is-pulse');
    });
    setTimeout(() => {
      document.querySelectorAll('.prompt').forEach((b) => b.classList.remove('is-pulse'));
    }, 700);
  }

  function clearNudge() { $nudge.hidden = true; }

  // ---------------------------------------------------------------------- //
  // Event wiring                                                            //
  // ---------------------------------------------------------------------- //

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.prompt');
    if (!btn || !btn.dataset.q) return;
    clearNudge();
    ask(btn.dataset.q);
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

  // ---------------------------------------------------------------------- //
  // Theme toggle                                                            //
  // ---------------------------------------------------------------------- //

  function setTheme(theme, persist) {
    const next = theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    if (persist) {
      try { localStorage.setItem('db-theme', next); } catch (_) { /* no-op */ }
    }
    if ($themeBtn) {
      $themeBtn.setAttribute('aria-pressed', next === 'light' ? 'true' : 'false');
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
  // Dark is the canonical theme for this brand; light is opt-in via the toggle
  // and persists for return visits.

  // ---------------------------------------------------------------------- //
  // Restore from URL hash                                                   //
  // ---------------------------------------------------------------------- //
  // Hash format is a comma-separated list of keys representing the visitor's
  // path. e.g. "#work,available,care" — replays those entries in order.

  const initial = (window.location.hash || '').replace(/^#/, '');
  if (initial) {
    initial.split(',').forEach((key) => {
      if (ANSWERS[key]) ask(key);
    });
  }

})();
