---
layout: doc
title: Redesign — Retro 8-bit (2026 spin) — Spec
status: parked — visual experiment
lastUpdated: 2026-04-27
---

# Redesign — Retro 8-bit, 2026 spin

> **Parked as a visual experiment.** The canonical direction for the portfolio is now [portfolio-refresh-2026](../portfolio-refresh-2026/spec.md) — content-led, not visual-led. This page may donate specific elements (typography, frame treatments, hard-shadow buttons) but isn't the path to `main`. Hero PoC is committed on `redesign-retro` (commit `cf6f4aa`).

## Goal

Reinterpret the portfolio's visual surface as a deliberate homage to 8-bit chrome — pixel borders, hard shadows, monospace accents — but executed with modern CSS so it reads as *intentional*, not nostalgic LARP. Stakeholders should still recognise the site as Dave's.

## Constraints

- **No popups, no annoyances.** The April Fools build is the place for chaos; this is the canonical site.
- **No accessibility regressions.** Reduced-motion, keyboard nav, focus-visible all respected.
- **Same hues as the live site, quantised.** Returning visitors must not feel whiplash. Purple/mint/melon stay; they just become flatter and more saturated.
- **Senior-contractor credibility.** If the aesthetic tips into "hobby project" territory, dial it back. Clients skim for trust signals.
- **No build step.** Stays consistent with the no-framework ethos — vanilla HTML/CSS/JS.

## Status

| Section | State |
|---|---|
| Hero | PoC built — see `static/redesign-retro/` |
| About | not started |
| Approach | not started |
| Skills | not started |
| Work | not started |
| Contact | not started |
| Footer | not started |

## What the hero PoC has

- Sticky terminal-style status bar
- Pixel-block name with hard double-shadow (mint + purple offsets)
- Typewriter tagline with blinking cursor (reduced-motion safe)
- Avatar in a chunky picture-frame with corner pixel-bolts
- Hard-shadow buttons that translate on hover (no blur)
- Stats strip styled like an arcade hi-score row
- 8px dot-matrix page texture (very subtle)
- OKLCH colour throughout, fluid `clamp()` typography

## Open questions

- Do project cards need pixel illustrations, or does the chunky chrome carry the aesthetic alone? *(Strong instinct: chrome alone. Illustrations make this read as a hobby site.)*
- How does the wave hero element translate? Either drop it entirely or pixelate the mask. Test both before committing.
- Press Start 2P only on display copy, or also on labels? *(Current PoC: display-only — labels are JetBrains Mono. Re-evaluate at full-page.)*
- View Transitions API for cross-section navigation? Could make smooth-scroll feel more arcade-screen-transition. Behind the reduced-motion gate either way.

## Non-goals

- Chiptune music. Will not be added even if asked.
- A working in-browser Game Boy. Cute, off-brief.
- Replacing real photography with pixel art. The photo of Dave stays a photo; the *frame* gets pixelated.

## Acceptance (when full-page lands)

- [ ] All sections of the live site reproduced in the retro idiom.
- [ ] Lighthouse a11y ≥ 95.
- [ ] Reduced-motion users see a static, fully-readable page.
- [ ] Side-by-side compare against the current live site shared with at least one outside reviewer before merging to `main`.

## Related

- [Hero PoC source — `static/redesign-retro/`](../../../static/redesign-retro/index.html)
- [Design System](../../wiki/design-system.md) — the hues being quantised
- [Architecture](../../wiki/architecture.md#branch-model) — branch context
