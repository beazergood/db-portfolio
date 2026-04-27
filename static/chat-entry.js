/* ===========================================================================
   <chat-entry q="..." followups="..." q-text="...">
   Light-DOM custom element. Self-renders from the answers data + the
   noscript fallback (which holds the rich answer body, single source).
   Visual structure: a right-aligned user bubble + the assistant response
   card below it — reads as a real chat transcript.
   =========================================================================== */

import answers from './answers.json' with { type: 'json' };

function escapeText(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Hardcoded body for unmatched typed input — kept off the noscript
// fallback section, which holds only real answers.
const MISS_BODY = '<p>I haven’t got an answer for that one yet.</p>';

function getBodyHtml(key) {
  if (key === '_miss') return MISS_BODY;
  const fallback = document.getElementById('fallback');
  const node = fallback?.querySelector(`[data-answer="${key}"]`);
  if (!node) return '';
  const clone = node.cloneNode(true);
  clone.querySelector('h3')?.remove();
  return clone.innerHTML;
}

// Compute the next calendar quarter as "Q<n> <yyyy>", e.g. "Q3 2026".
// Used by the "Are you available?" answer's [data-live="quarter"] span.
function nextQuarter() {
  const d = new Date();
  const q = Math.floor(d.getMonth() / 3) + 1; // 1..4
  const next = q === 4 ? 1 : q + 1;
  const year = q === 4 ? d.getFullYear() + 1 : d.getFullYear();
  return `Q${next} ${year}`;
}

class ChatEntry extends HTMLElement {
  static observedAttributes = ['q', 'followups', 'q-text'];

  #rendered = false;

  connectedCallback() {
    if (!this.#rendered) this.#render();
  }

  attributeChangedCallback(_name, oldVal, newVal) {
    if (oldVal === newVal) return;
    if (this.isConnected) this.#render();
  }

  #render() {
    const key = this.getAttribute('q');
    const meta = answers[key];
    if (!meta) return;

    // q-text overrides the canonical label — for typed input we want the
    // visitor's literal phrase to show up in the transcript instead.
    const askedText = this.getAttribute('q-text') || meta.label;

    const followupKeys = (this.getAttribute('followups') || '')
      .split(',').map((s) => s.trim()).filter(Boolean);

    const followupsHtml = followupKeys.length === 0 ? '' : `
      <footer class="entry__followups">
        <p class="entry__followups-label">Or →</p>
        <ul class="entry__followups-list">
          ${followupKeys.map((k) => {
            const label = answers[k]?.label || '';
            const button = label.replace(/[.?]+$/, '');
            return `<li><button class="prompt" type="button" data-q="${k}">${escapeText(button)}</button></li>`;
          }).join('')}
        </ul>
      </footer>
    `;

    this.innerHTML = `
      <div class="entry__bubble">${escapeText(askedText)}</div>
      <div class="entry__response">
        <div class="entry__body">${getBodyHtml(key)}</div>
        ${followupsHtml}
      </div>
    `;
    this.#hydrateLive();
    this.#rendered = true;
  }

  #hydrateLive() {
    this.querySelectorAll('[data-live="quarter"]').forEach((el) => {
      el.textContent = nextQuarter();
    });
  }
}

customElements.define('chat-entry', ChatEntry);
