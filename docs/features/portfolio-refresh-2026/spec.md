---
layout: doc
title: Portfolio Refresh 2026 — Spec
status: spec
lastUpdated: 2026-04-27
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

## PoC

A first proof at `static/chat-hero/` (committed on `wiki-bootstrap`). Dark-default with a working light toggle, 5 hand-authored answers, typed-input keyword matching with an honest fallback, follow-up prompts per answer, hash routing, progressive-enhancement noscript fallback. View at `http://localhost:8080/chat-hero/`. Not wired into `static/index.html` yet — production main still serves the old sectioned site.

## Open questions

- **Entry affordance** — blank chat box, or seeded with 3–4 suggested prompts as visible entry points? *Strong instinct: suggested prompts visible as buttons, with the input box present too. Explicit invitation, not blank-page anxiety.*
- **Suggested prompts** — what are they? Drafting:
  - *What kind of work do you do?*
  - *Are you available?*
  - *Show me something you've built.*
  - *What do you care about?*
  Could include something more provocative (*Why hire a contractor?*).
- **Answer composition** — streamed text? Card with image? Text + small fact + one image? Mixed media. Has to feel rich, not like wall-of-text returned from a backend.
- **Follow-up affordance** — after an answer, do inline next-prompts appear? Is the input box always sticky? How does a "conversation" thread visually?
- **Noscript fallback** — what does the single-page version actually look like? It's effectively the page that the rest of this spec replaces. May be the place where the calm-pastoral feel is allowed to live, since it's the fallback for the visitor who doesn't engage.
- **Performance budget** — first paint < 1s, suggested-prompt buttons interactive immediately. Hydrate the chat layer afterwards.
- **Real-LLM hatch (v2)** — if it lands later, where does it live? A "ask anything" affordance below the curated set? Cost-gated? Worth thinking through but not solving now.

## Acceptance

- [ ] No traditional `<section>` stack. Single focused surface.
- [ ] Works without JS — the answers are server-rendered as fallback.
- [ ] First paint < 1s on a throttled connection.
- [ ] No named clients or employers anywhere in any answer.
- [ ] Lighthouse a11y ≥ 95.
- [ ] At least one outside reviewer experiences the chat interaction before merge to `main`.
- [ ] A visitor who spends 2 minutes leaves with a clear feel for who I am.

## Related

- [Vision](../../project/vision.md) — the canvas idea
- [Brand](../../wiki/brand.md) — calm-confidence; the medium is the message
- [Design System](../../wiki/design-system.md) — palette + typography
- [Redesign Retro](../redesign-retro/spec.md) — visual experiment, now clearly not the path
- Stakeholder canonical: [overview.html](./overview.html)
