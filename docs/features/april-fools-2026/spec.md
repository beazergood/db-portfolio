---
layout: doc
title: April Fools 2026 — Spec (retrospective)
status: shipped
lastUpdated: 2026-04-27
---

# April Fools 2026 — "slop edition"

> Retrospective spec. The feature shipped on 2026-04-01 and is preserved on the `april-fools-2026` branch for redeploy at `lolz.davebeazer.dev`.

## Premise

A snarky parody of the portfolio that goes live for one day a year. Visual chaos, fake-engagement copy, "AI-built in 0.3 seconds" badges — i.e. everything the real site deliberately is not.

## What's in it

- **Theme switcher** (light / dark / rainbow) — top-right, persisted to localStorage for the session.
- **Fake testimonials** — over-the-top, clearly satirical.
- **Tier-list skills** — S/A/B/C/D tier instead of the calm pill grid. Includes "Manual Linting" in C-tier (added post-launch).
- **Cookie-prefs modal** — the most invasive possible parody of a consent banner.
- **WebRant popup chaos layer** — `webrant.js`, ~1,400 lines of escalating nonsense pop-ups.
- **Under-construction marquee banner** — top of page, scrolling.

## Files

- `static/slop.css` — chaos styling (~810 lines)
- `static/slop.js` — theme switcher, marquee, cookie modal (~123 lines)
- `static/webrant.js` — the popup engine (~1,433 lines)
- `static/index.html` — extra `<link>` and `<script>` tags pulling the slop layer in

## Deployment intent

`lolz.davebeazer.dev` → Vercel domain alias to the `april-fools-2026` branch. Production main remains untouched.

## Lessons

- Branch isolation worked: the prank stayed off `main` entirely. Reverting was a Vercel domain flip, not a git revert.
- Z-index conflicts surfaced late (theme switcher vs. construction banner, AI badge vs. theme switcher). Future seasonal builds: define a z-index scale upfront.
- `webrant.js` ended up the biggest file in the repo, larger than the entire main site. Worth it for the lolz; not worth maintaining as production-quality.

## Acceptance (when re-deployed to lolz)

- [ ] Loads at `lolz.davebeazer.dev` independently of production.
- [ ] No requests leak from the prank build to the canonical domain (and vice-versa).
- [ ] Theme switcher persists per-session, not cross-session.
- [ ] All popups dismissable.
- [ ] Lighthouse score: who cares, that's the point.

## Related

- [`april-fools-2026` branch on GitHub](https://github.com/beazergood/db-portfolio/tree/april-fools-2026)
- [Deployment guide](../../guides/deployment.md) — Vercel domain alias steps
