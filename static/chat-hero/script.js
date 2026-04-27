/* ===========================================================================
   chat-hero — interactive layer
   Pre-curated answers. No LLM. Progressive enhancement.
   =========================================================================== */

(function () {
  'use strict';

  // ---------------------------------------------------------------------- //
  // Curated answers + keyword tags                                          //
  // ---------------------------------------------------------------------- //

  // Each answer: prompt label (shown in the answer chrome), tags (for typed
  // input matching), HTML body (extracted from the no-JS fallback so we
  // don't duplicate copy), and follow-up keys.

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

  // ---------------------------------------------------------------------- //
  // Element refs                                                            //
  // ---------------------------------------------------------------------- //

  const $body         = document.body;
  const $hero         = document.querySelector('.hero');
  const $heroPrompt   = document.getElementById('hero-prompt');
  const $answer       = document.getElementById('answer');
  const $answerQ      = document.getElementById('answer-q');
  const $answerBody   = document.getElementById('answer-body');
  const $followups    = document.getElementById('answer-followups');
  const $promptsList  = document.querySelector('.prompts__list');
  const $form         = document.getElementById('input-row');
  const $field        = document.getElementById('ask');
  const $nudge        = document.getElementById('input-nudge');
  const $fallback     = document.getElementById('fallback');
  const $themeBtn     = document.querySelector('.theme-toggle');

  // ---------------------------------------------------------------------- //
  // Hydrate                                                                  //
  // ---------------------------------------------------------------------- //

  $body.classList.add('is-enhanced');

  // Pull the rich answer HTML out of the no-JS fallback so we have one
  // copy of the content. Each answer key's HTML lives in a fallback article.
  function getAnswerHtml(key) {
    const node = $fallback.querySelector(`[data-answer="${key}"]`);
    if (!node) return '';
    // Take everything after the <h3> — the question heading is rendered
    // separately in the answer chrome, we don't want it twice.
    const clone = node.cloneNode(true);
    const heading = clone.querySelector('h3');
    if (heading) heading.remove();
    return clone.innerHTML;
  }

  // ---------------------------------------------------------------------- //
  // Render answer                                                           //
  // ---------------------------------------------------------------------- //

  function renderAnswer(key) {
    const meta = ANSWERS[key];
    if (!meta) return false;

    // Build follow-up buttons from this answer's followup keys
    const followupHtml = meta.followups
      .map((k) => {
        const label = ANSWERS[k] && ANSWERS[k].label;
        if (!label) return '';
        // Trim trailing punctuation from the label for the button
        const buttonText = label.replace(/[.?]+$/, '');
        return `<li><button class="prompt" type="button" data-q="${k}">${buttonText}</button></li>`;
      })
      .join('');

    $answerQ.textContent = meta.label;
    $answerBody.innerHTML = getAnswerHtml(key);
    $followups.innerHTML = followupHtml;
    $answer.hidden = false;

    // Hide the hero greeting once an answer is up — but keep prompts list
    // for direct re-selection.
    if ($hero) $hero.style.display = 'none';

    // Scroll the answer into view on small screens
    if (window.innerWidth < 720) {
      $answer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Mark the active prompt button
    document.querySelectorAll('.prompt').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.q === key);
    });

    // Update URL hash for shareable state (without a scroll jump)
    if (history.replaceState) {
      history.replaceState(null, '', '#' + key);
    }

    return true;
  }

  // ---------------------------------------------------------------------- //
  // Match typed input to a curated answer                                   //
  // ---------------------------------------------------------------------- //

  function matchInput(text) {
    const norm = text.toLowerCase().replace(/[^a-z\s]/g, ' ').trim();
    if (!norm) return null;

    const words = norm.split(/\s+/);

    // Score each answer by tag-hits
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
    // Pulse the prompts so the eye is drawn there
    document.querySelectorAll('.prompt').forEach((b) => {
      b.classList.remove('is-pulse');
      // Force reflow before reapplying so the animation re-runs
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

  // Delegated click handler for both the main prompt list and follow-ups
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.prompt');
    if (!btn || !btn.dataset.q) return;
    clearNudge();
    renderAnswer(btn.dataset.q);
  });

  // Form submit (typed input)
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = $field.value.trim();
    if (!text) return;
    const matched = matchInput(text);
    if (matched) {
      clearNudge();
      renderAnswer(matched);
      $field.value = '';
    } else {
      showNudge();
    }
  });

  // Clear nudge as soon as the user starts typing again
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

  // Sync the aria-pressed attribute with the initial theme
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
  // Restore from URL hash (for shareable links)                             //
  // ---------------------------------------------------------------------- //

  const initial = (window.location.hash || '').replace(/^#/, '');
  if (initial && ANSWERS[initial]) {
    renderAnswer(initial);
  }

})();
