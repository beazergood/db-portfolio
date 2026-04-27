---
layout: doc
title: db-portfolio Wiki
lastUpdated: 2026-04-27
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

- **vision + brand captured** — first pass at the canvas's north-star and posture. See [vision.md](../project/vision.md) and [brand.md](./brand.md). Both pages are starting-frames; will grow.
- **portfolio-refresh-2026** — replace the canonical content on davebeazer.dev. Strip named clients, swap "about me" prose for dynamic project facets. Spec captured; design questions surfaced. See [features/portfolio-refresh-2026/spec.md](../features/portfolio-refresh-2026/spec.md) and the [overview](../features/portfolio-refresh-2026/overview.html).
- **wiki-bootstrap** — adopting the scraps-style living wiki here. This page and its siblings are the first artefact. (this branch)
- **redesign-retro** — hero proof-of-concept committed (`cf6f4aa`); 2026-spin 8-bit aesthetic. Parked as a *visual* experiment that may donate elements; not the canonical direction.
- **lolz subdomain** — `lolz.davebeazer.dev` earmarked to host the April Fools build so it remains rediscoverable. Vercel domain config pending.

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

## Threads (in flight)

| Thread | Status | One-line |
|---|---|---|
| portfolio-refresh-2026 | spec | Strip named clients; replace about-me with dynamic facets. Design questions open |
| wiki-bootstrap | shipping | First-pass scaffold + browser viewer + vision/brand pages. This branch |
| vitepress-migration | deferred | Replace the no-build viewer with VitePress to align with scraps / pl-docs / enable-platform |
| redesign-retro | parked (visual exp.) | Hero PoC built; visual experiment, may donate elements to portfolio-refresh |
| lolz-subdomain | pending | Vercel domain alias to `april-fools-2026` branch |
| static-migration | mostly shipped | Static site live on `main`; legacy `/src/` and `/dwjb-api/` still on disk pending tidy |

## Parked

> None right now.

---

## How to use this wiki

**Cold start on a portfolio task** — open this page. Find the concept page for what you're touching. The site is small, so the wiki should fit in one head; treat it as a sanity check, not a textbook.

**Mid-session learning** — when a session synthesises something non-obvious, run `/wiki-update <page>` to file it back. The log captures what changed.

**Capture an idea** — `/wiki-idea` (or just append to [ideas.md](./ideas.md)). Cheap, append-only.

**Weekly hygiene** — `/wiki-lint` reports stale anchors and orphans.
