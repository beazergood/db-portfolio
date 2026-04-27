---
layout: doc
title: db-portfolio Architecture
lastUpdated: 2026-04-27
---

# Architecture

A single-page personal portfolio for Dave Beazer (contract software engineer) at [davebeazer.dev](https://www.davebeazer.dev/). Mid-2026 the project completed a rebuild from Next.js + Strapi to a no-framework static site.

## Layout

```
db-portfolio/
├── static/                  ← the live site (active)
│   ├── index.html           single-page portfolio
│   ├── styles.css           hand-written CSS, mobile-first
│   ├── script.js            ~85 lines vanilla JS
│   ├── images/              photos, baked into the deploy
│   └── redesign-retro/      parked PoC for the next visual direction
├── src/                     ← legacy Next.js (retained for reference)
├── dwjb-api/                ← legacy Strapi CMS (no longer needed)
├── public/                  ← shared assets used by both old and new
├── docs/                    ← this wiki
└── vercel.json              { outputDirectory: "static" }
```

## Deploy model

- **Host**: Vercel.
- **Build**: none. `vercel.json` declares `outputDirectory: "static"` and an empty `buildCommand`. Vercel serves `/static/` as a plain static site.
- **Production domain**: `davebeazer.dev` → `main` branch.
- **Subdomain plan**: `lolz.davebeazer.dev` → `april-fools-2026` branch (pending Vercel config). The intention is that `april-fools-2026` becomes the canonical "lolz" branch and accumulates seasonal pranks rather than being recreated each year.

## Branch model

| Branch | Purpose |
|---|---|
| `main` | What's live at davebeazer.dev. Static-site rebuild as of `508d409`. |
| `april-fools-2026` | The 2026 prank build (theme switcher, fake testimonials, popup chaos). Earmarked for `lolz.davebeazer.dev`. |
| `redesign-retro` | Parked hero PoC for an 8-bit-with-2026-spin redesign. Commit `cf6f4aa`. |
| `wiki-bootstrap` | This branch — adopting the scraps-style living wiki. |

## What the migration removed

- The Next.js build chain (`npm run build`).
- The Strapi backend (`/dwjb-api/`) and the network round-trip it implied.
- Any runtime JS framework. The site is HTML + CSS + ~85 lines of vanilla JS.

The legacy `/src/` and `/dwjb-api/` trees are still on disk for reference but are no longer part of the deploy. They'll be removed once we're sure nothing in them is worth salvaging.

## Dev loop

```bash
cd static && python3 -m http.server 8080
# → http://localhost:8080/
```

No build, no watcher, no transpile. Edit a file, refresh.

## Related

- [Design System](./design-system.md) — palette + typography
- [Decisions](./decisions.md) — why static, why no framework
- [Deployment guide](../guides/deployment.md) — Vercel + DNS specifics
