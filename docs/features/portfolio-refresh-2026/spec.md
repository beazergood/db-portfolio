---
layout: doc
title: Portfolio Refresh 2026 — Spec
status: shipped (v1, 2026-04-28)
lastUpdated: 2026-04-28
---

# Portfolio Refresh 2026

> The current static site is the antithesis. We're moving away from sectioned-CV-as-portfolio toward a single, focused, chat-driven surface where depth is found by interacting, not by scrolling. The medium is the message — a contractor's site that demonstrates the 2026 paradigm shift is itself the portfolio piece.

## North star

- **[dcurt.is](https://dcurt.is/)** — calm, opinionated, anti-template, a single bold idea executed with rare restraint. Calm isn't passive there; it's deliberate.
- **The 2026 UX paradigm shift** — from *listing content* to *surfacing it through conversation*. Visitors interact with software through prompts and follow-ups, not page navigation.

## The hypothesis

The portfolio is a beautifully-designed chat interface. Career data is the content surfaced within it. Visitors interact — type a prompt, click a suggestion, ask a follow-up — and the answer renders: typography-rich, considered, occasionally accompanied by a project still or a small visualisation. There are no traditional sections. **The chat is the site.**

A contractor whose site demonstrates the paradigm shift is providing a portfolio piece *while* being the portfolio.

## The anti-pattern (the current site)

- Hero → About → Approach → Skills → Work → Contact, each section slightly less bland than the last.
- Named clients (PL, Pexip) in plain prose.
- "Here's how long I've been at this" energy. Comprehensive over confident.
- Designed for a visitor who'll spend 20 minutes. Real visitors spend 2.

## What we keep

- The hue family — **purple / mint / melon / ice** — but used **boldly**, not pastorally.
- **Paytone One + Inter** typography (still the brand voice).
- Hand-drawn touches, used sparingly and with intent.
- The "no popups, no urgency theatre" rule.

## What we deliberately drop

- Sectioned page structure.
- About-me prose.
- Named clients and employers.
- "Listing every skill" energy.
- The pastel-pastoral feel — we're going **calm-confident**, not calm-passive.
- The redesign-retro 8-bit aesthetic. Wrong direction. Parked.

## Constraints

- **Progressive enhancement.** Works fully without JS — the noscript layer is a single-page summary of the answers, semantic and accessible. JS adds the chat-flow layer on top. Recruiters who don't engage still get the signal in 30 seconds; visitors who do engage get something different.
- **Pre-curated, not real-LLM** (for v1). The "chat" is hand-authored answers triggered by prompts. Real LLM is too gimmicky and unreliable for v1, and adds cost. Hatch left open for v2 if it earns its way in.
- **No popups, no urgency theatre, no fake-typing chrome.** The interaction is real and considered, not theatre. Streamed text is fine if it serves the content; "AI is typing…" placeholders are not.
- **No named clients or employers.** Answers describe work by kind.
- **Senior-contractor credibility.** If a beat tips into "AI demo gimmick" territory, dial it back. Chat UIs fail the moment they feel like a party trick.
- **Same palette and typography as the current site.** Continuity.
- **2-minute visit, full impression.** Visitors who don't dig deeper still leave with a clear feel for who I am.

## What shipped

v1 is **live at davebeazer.dev** as of 2026-04-28. The chat-hero replaced the legacy sectioned site entirely — `static/index.html` is now the chat. No sub-routes; the chat is the site.

What landed:

- Six hand-authored answers — *what kind of work, are you available, show me something, what do you care about, why a contractor, what are you working with*. Each renders prose plus an optional in-answer widget (flow line, dynamic quarter, tool chips).
- **Right-aligned user bubbles + assistant cards** — each turn reads as a real chat exchange, not a Q&A list. The user's literal typed phrase shows up in the bubble; the canonical label shows up when they clicked a suggested prompt.
- **Typed input** — input is keyword-matched against the answers' tags. Match → answer card with the user's literal phrase as the bubble. Miss → an honest "I haven't got an answer for that one yet" with all unanswered prompts as inline suggestions.
- **Path persists** — every prompt asked at most once. URL hash captures the path (e.g. `#work,available,care`) so a curated link reconstructs that thread on load. Completion CTA surfaces once all six are asked.
- **Dark default, light toggle** — choice persists. iOS Safari URL bar follows the active theme via `<meta name="theme-color">`. Theme cross-fade uses View Transitions API.
- **Hero** — name in gradient, italic role tagline ("Contract software engineer."), wavy coast backdrop (theme-aware: full in light, dimmed in dark), prompt with blinking cursor.
- **Input quick wins** — sticky on mobile, auto-refocus after submit, `/` to focus from anywhere, `Esc` to clear, `<kbd>/</kbd>` hint badge inside the field when blurred.
- **Progressive enhancement** — full content readable without JS via the noscript fallback section. JS layer adds the interactive flow.
- **2026-native stack** — `<script type="module">`, JSON modules (`with { type: 'json' }`), `<chat-entry>` light-DOM Web Component, CSS nesting, `:has()`-driven state, container queries.

What was *deliberately* dropped between PoC and v1:

- The Frontend / API / Infra **tier diagram** — empty boxes with hover-reveal didn't communicate at first sight (especially on mobile). Replaced with a single mint-mono `Frontend → API → Infra` flow line that pulls its weight on first read.
- The floating "I haven't got an answer for that" **nudge** — folded into the inline `_miss` chat-entry instead, so the transcript stays coherent.

## How v1 answered the open questions

- **Entry affordance** — *resolved*: six suggested prompts + a typed-input field. Both visible. Explicit invitation, no blank-page anxiety.
- **Suggested prompts** — *resolved*: *what kind of work · are you available · show me something · what do you care about · why a contractor · what are you working with*. Six total; bench/tools added as the personal-adjacent prompt.
- **Answer composition** — *resolved*: prose plus optional inline widgets (mint-mono flow line, dynamic quarter, tool chips, abstract device-frame SVG). Rich enough to feel composed, restrained enough to stay calm.
- **Follow-up affordance** — *resolved*: inline follow-up buttons on the most-recent entry only (older entries' followups hide via `:not(:last-of-type)`). Input is sticky on mobile.
- **Noscript fallback** — *resolved*: the noscript fallback section IS the source of truth for answer body content; the chat-entry component extracts from it at hydration. Single source.
- **Performance budget** — *open*: not measured. Worth a Lighthouse run.
- **Real-LLM hatch (v2)** — *parked*: roadmap entry for cost-gated "ask anything" affordance below the curated prompts.

## Acceptance (v1)

- [x] No traditional `<section>` stack. Single focused surface.
- [x] Works without JS — the answers are server-rendered as fallback.
- [x] No named clients or employers anywhere in any answer.
- [ ] First paint < 1s on a throttled connection — *not measured yet*.
- [ ] Lighthouse a11y ≥ 95 — *not measured yet*.
- [ ] At least one outside reviewer experiences the chat interaction — *bypassed in pursuit of speed; worth doing post-ship*.
- [~] A visitor who spends 2 minutes leaves with a clear feel for who I am — *subjective; needs real-visitor feedback*.

## Related

- [Vision](../../project/vision.md) — the canvas idea
- [Brand](../../wiki/brand.md) — calm-confidence; the medium is the message
- [Design System](../../wiki/design-system.md) — palette + typography
- [Redesign Retro](../redesign-retro/spec.md) — visual experiment, now clearly not the path
- Stakeholder canonical: [overview.html](./overview.html)
