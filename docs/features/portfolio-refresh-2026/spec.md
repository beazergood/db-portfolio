---
layout: doc
title: Portfolio Refresh 2026 — Spec
status: spec
lastUpdated: 2026-04-27
---

# Portfolio Refresh 2026

> Working notebook. Replace the canonical content on davebeazer.dev with something that reflects the current direction. This spec evolves as ideas land — keep it loose. The stakeholder canonical for this work is [overview.html](./overview.html).

## Why now

- The live site has stale copy that names PL and Pexip. Direction has changed: no named clients or employers in site copy.
- The April Fools build (Apr 1) was the first content change to the static site since the rebuild. The canonical content hasn't been touched in years.
- We've just established a [vision](../../project/vision.md) (canvas) and a [brand](../../wiki/brand.md) (calm, considered, no overselling). The portfolio is the first face of those — and should reflect them.

## Goal

A canonical davebeazer.dev that:

- Feels distinctively *this person* — not a templated contractor page.
- Surfaces project facets dynamically rather than narrating an "about me".
- Stays a one-page spine but with depth — the spine can lead to other surfaces if they grow.
- Loads instantly. Stays calm. Reads quickly.

## Constraints

- **No named clients or employers** in copy. Describe work by *kind*, not by *brand*. ("Real-time video tools used by hundreds of conferencing rooms" rather than "Pexip".)
- **No popups, no banners, no newsletter modals.** Standard portfolio constraint.
- **No traditional about-me prose.** Show via project facets and posture.
- **No traditional blog snippets.** If writing happens later, it's a separate decision.
- **Same colour palette and typography** as the existing site (purple/mint/melon, Paytone One + Inter). Continuity over reinvention.
- **No build step.** Stay with vanilla HTML/CSS/JS at first. VitePress is the docs stack, not the portfolio stack.

## Open questions

- **What are the dynamic facets?** Live data from a project? Photos that auto-rotate? Project cards that surface different work each visit? Cards that pull from the wiki? *No answer yet — this is the design question.*
- **Does the redesign-retro PoC fit anywhere?** It was a *visual* experiment, parked. May donate specific elements (typography, frame treatments) but isn't the canonical direction.
- **Is "no one-pager" actually true?** Or is the one-pager fine if the depth lives behind clicks rather than scrolls?
- **What replaces the PL/Pexip line specifically?** Need a verbal model for describing work without brands.
- **Where does the wiki feed in?** Could project cards be generated from feature specs? The spec→portfolio pipeline could be its own facet.

## Status

| Section | Live state | Direction |
|---|---|---|
| Hero | Photo + name + tagline | Keep, refine tagline to drop "for organisations including..." |
| About | Two paragraphs naming PL and Pexip | Rewrite — describe work by kind, not brand |
| Approach / How I Work | 4-card grid | Audit — does this still ring true? |
| Skills | Pill grid | Probably fine; audit specifics |
| Work | Project cards | This is where dynamic facets could live |
| Contact | Email + socials | Audit — keep what's still active |

## Acceptance

- [ ] No named clients or employers anywhere in copy.
- [ ] One sentence "what I do" that I'd actually say in a coffee meeting.
- [ ] At least one facet that surprises a returning visitor.
- [ ] Loads in < 1s on a throttled connection.
- [ ] Lighthouse a11y ≥ 95.
- [ ] A reviewer outside Dave's head reads it before merge to `main`.

## Related

- [Vision](../../project/vision.md) — why the canvas exists at all
- [Brand](../../wiki/brand.md) — posture, voice, what we're not
- [Design System](../../wiki/design-system.md) — palette + typography
- [Redesign Retro](../redesign-retro/spec.md) — visual experiment, parked, may donate elements
- Stakeholder canonical: [overview.html](./overview.html)
