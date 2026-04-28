---
layout: doc
title: db-portfolio Wiki
lastUpdated: 2026-04-28
---

# db-portfolio Wiki — Catalogue

The living memory of [davebeazer.dev](https://www.davebeazer.dev/). LLM-owned, refreshed when the site or its plumbing changes. Open this on a phone after a week away and re-orient in 60 seconds.

**Sister docs**

- 🧭 [Vision](../project/vision.md) — the compass. Reread when the project drifts
- 📘 [Project README](https://github.com/beazergood/db-portfolio/blob/main/README.md) — terse, what-is-this orientation
- 🛠 [Working specs](../features/) — per-feature task plans + acceptance criteria
- 📋 [Project spec](../project/spec.md) — what the site is and isn't
- 🗺 [Roadmap](../project/roadmap.md) — what's next

**Maintained by:** `/wiki-query`, `/wiki-update`, `/wiki-ingest`, `/wiki-idea`, `/wiki-lint` slash commands. Activity log: [log.md](./log.md).

---

## Now

> What's actively in flight. Refreshed at session end.

- *(no live threads at the moment — the canvas is in a steady state; reach for the [roadmap](../project/roadmap.md) for what's queued next)*

## Recently shipped

- **portfolio-refresh-2026 (v1)** — chat-driven canonical site live at davebeazer.dev. Six curated answers, right-aligned user bubbles + assistant card model, dark-default theme with light toggle, iOS Safari chrome syncing, hero with role tagline + wave backdrop, sticky input on mobile, slash-to-focus, typed input becomes part of the transcript. Replaces the legacy sectioned site entirely. See [features/portfolio-refresh-2026/spec.md](../features/portfolio-refresh-2026/spec.md) and the [overview](../features/portfolio-refresh-2026/overview.html).
- **wiki-bootstrap** — `docs/` structure, browser viewer, vision, brand, decisions, the first feature dual-doc pair, and the canvas paradigm captured. Merged to `main`.
- **vision + brand** — first pass at the canvas's north-star and posture. Compass-not-contract framing. See [vision.md](../project/vision.md) and [brand.md](./brand.md).

## Concepts

| Page | What it answers |
|---|---|
| [Architecture](./architecture.md) | Static no-framework rebuild, Vercel deploy model, branch strategy |
| [Brand](./brand.md) | Posture, voice, what we are and aren't |
| [Design System](./design-system.md) | Palette, typography, component patterns |

## Reference

| Page | What it lists |
|---|---|
| [Decisions](./decisions.md) | Date / decision / rationale table for every architectural call |
| [Ideas](./ideas.md) | Captured but not-yet-planned ideas. Append-only |

## Threads

| Thread | Status | One-line |
|---|---|---|
| portfolio-refresh-2026 | **shipped v1** | Chat-driven site live at davebeazer.dev. Iteration ongoing as taste/copy refines |
| wiki-bootstrap | shipped | Living wiki + viewer in `docs/`; merged to `main` |
| vitepress-migration | deferred | Replace the no-build viewer with VitePress to align with `enable-platform` |
| pwa-install | open | Set up `manifest.json` + `apple-touch-icon` so Add-to-Home-Screen gives full chrome control on iOS (status bar themed, bottom toolbar gone) |
| redesign-retro | parked | 8-bit experiment; not the path. Kept-for-nostalgia |
| lolz-subdomain | pending | Vercel domain alias to `april-fools-2026` branch |
| legacy-tidy | pending | Delete `/src/` and `/dwjb-api/` once nothing worth referencing remains |

## Parked

> None right now.

---

## How to use this wiki

**Cold start on a portfolio task** — open this page. Find the concept page for what you're touching. The site is small, so the wiki should fit in one head; treat it as a sanity check, not a textbook.

**Mid-session learning** — when a session synthesises something non-obvious, run `/wiki-update <page>` to file it back. The log captures what changed.

**Capture an idea** — `/wiki-idea` (or just append to [ideas.md](./ideas.md)). Cheap, append-only.

**Weekly hygiene** — `/wiki-lint` reports stale anchors and orphans.
