/* ===========================================================================
   <chat-entry q="..." followups="...,...">
   Light-DOM custom element. Self-renders from the answers data + the
   noscript fallback (which holds the rich answer body, single source).
   =========================================================================== */

import answers from './answers.json' with { type: 'json' };

const TEMPLATE_BODY = (label, bodyHtml, followupsHtml) => `
  <header class="entry__q">
    <span class="entry__q-label">asked</span>
    <span class="entry__q-text">${label}</span>
  </header>
  <div class="entry__body">${bodyHtml}</div>
  ${followupsHtml}
`;

function escapeText(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function getBodyHtml(key) {
  const fallback = document.getElementById('fallback');
  const node = fallback?.querySelector(`[data-answer="${key}"]`);
  if (!node) return '';
  const clone = node.cloneNode(true);
  clone.querySelector('h3')?.remove();
  return clone.innerHTML;
}

class ChatEntry extends HTMLElement {
  static observedAttributes = ['q', 'followups'];

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

    this.innerHTML = TEMPLATE_BODY(escapeText(meta.label), getBodyHtml(key), followupsHtml);
    this.#rendered = true;
  }
}

customElements.define('chat-entry', ChatEntry);
