---
layout: doc
title: Concept-Pages Exploration
status: exploration
lastUpdated: 2026-04-28
---

# Concept-Pages — davebeazer.dev as a portfolio of demos

> *Exploration, not a committed direction yet. Captured so the thinking survives the chat. When this gets prioritised, it'll graduate to feature specs and a roadmap entry.*

## The frame

What if davebeazer.dev isn't a portfolio site — it's a **portfolio application**? A curated set of self-contained concept pages, each demonstrating a 2026 web platform capability. Together they form the portfolio piece **by being** the kind of work the visitor might want built. Medium-is-the-message, applied recursively from the chat hero outward.

The chat hero stays as the entry. The concept index becomes the second face. Each concept page lives at `/concepts/<slug>` as a self-contained PoC.

## Structure

```
davebeazer.dev/                  ← chat hero (existing canonical face)
davebeazer.dev/concepts/         ← curated index, smooth transitions between
davebeazer.dev/concepts/<slug>   ← each PoC, focused on one idea
```

Each `/concepts/<slug>` gets a `docs/features/concept-<slug>/` pair (`spec.md` + `overview.html`), continuing the per-feature dual-doc pattern already in place. Cross-document View Transitions (PoC #1 below) is the connector that makes navigation feel like one application rather than separate pages.

## PoC candidates

Ranked by impact + buildability. #1 first because the others gain polish from it.

### 1. concepts/transitions — Cross-document View Transitions

`@view-transition` rule + browser-native cross-document navigation. Click between concept pages and the surface morphs seamlessly without an SPA.

**Client hook:** SEO-safe, refresh-safe, share-safe interactions for content sites that previously thought they had to be SPAs.

### 2. concepts/scroll — Scroll-driven storytelling

`animation-timeline: scroll()` and `view()`. A long-form narrative where scroll IS the input — case studies, narrative product intros, data reveals.

**Client hook:** editorial-grade landing pages without scroll-jacking libraries.

### 3. concepts/anchored — Anchor positioning + Popover API

Click any annotation on a complex artefact (dashboard, screenshot, diagram) and a context-aware tooltip emerges, declaratively positioned via `position-anchor` / `position-area`. The native version of all the floating-UI libraries that came before.

**Client hook:** onboarding overlays, in-product help, complex enterprise dashboards.

### 4. concepts/voice — Speech Recognition

Same chat hero, but you can speak to it instead of type. Multi-modal without an LLM in the loop.

**Client hook:** accessibility-first products, hands-free contexts, voice-input forms.

### 5. concepts/offline — Local-first PWA

Small notes/todo demo that works on a plane, syncs when back. Service worker, IndexedDB, conflict-free updates.

**Client hook:** products that need to feel instant and resilient on patchy connections — increasingly the bar.

### 6. concepts/canvas (stretch)

Small WebGPU shader-toy or generative piece. Signals graphics range without leaning on a games-style toy.

### 7. concepts/progressive (stretch)

The same UI rendered at three explicitly-labelled layers — HTML-only, CSS-enhanced, JS-enhanced. The before/after physically shows progressive enhancement as a principle.

## Adjacent 2026 platform topics worth keeping in mind

Not necessarily standalone PoCs — but tools to reach for when building any of the above:

- **`<dialog>` + `popover`** for native overlays (no portal libraries needed)
- **`text-wrap: balance` / `text-wrap: pretty`** for editorial typography
- **`@scope`** for component-level CSS scoping without bundlers
- **`interpolate-size: allow-keywords`** to animate from `0` to `auto` height (long-awaited)
- **`light-dark()` CSS function** for fluent dual-theme expressions
- **`field-sizing: content`** so textareas auto-grow
- **Speculation Rules API** for prefetch/prerender hints — instant navigation
- **EyeDropper API** — pick a colour from the screen
- **CSS Cascade Layers (`@layer`)** for long-lived stylesheets that need order discipline
- **The Navigation API** — replaces hand-rolled SPA routers with platform primitives

## Open questions

- **Order?** Suggested above (#1 first as connector). Could also lead with #2 (scroll) for higher visual WOW factor.
- **How many is enough?** 3–5 feels right. 7 starts to dilute. The curated set should signal taste, not scale.
- **Should the chat hero link to `/concepts/`?** Yes, eventually — it could become a follow-up button on the "show me something" answer. Not required for v1.
- **Real client examples?** Each PoC could double as a sketch of a thing a client *might* want — keeping it abstracted enough that no specific client is named.
- **Sequencing vs parallel?** Sequence. Each PoC gets its own dual-doc pair and ships independently. Don't try to land them as a batch.

## Related

- [Vision](./vision.md) — the canvas as a personal-publishing platform; concept-pages would be a future face of it
- [Roadmap](./roadmap.md) — these become "Next" entries when prioritised
- [Ideas](../wiki/ideas.md) — first-draft idea entry pointing here
