---
layout: doc
title: db-portfolio Wiki
lastUpdated: 2026-04-27
---

# db-portfolio Wiki — Catalogue

The living memory of [davebeazer.dev](https://www.davebeazer.dev/). LLM-owned, refreshed when the site or its plumbing changes. Open this on a phone after a week away and re-orient in 60 seconds.

**Sister docs**

- 📘 [Project README](https://github.com/beazergood/db-portfolio/blob/main/README.md) — terse, what-is-this orientation
- 🛠 [Working specs](../features/) — per-feature task plans + acceptance criteria
- 📋 [Project spec](../project/spec.md) — what the site is and isn't
- 🗺 [Roadmap](../project/roadmap.md) — what's next

**Maintained by:** `/wiki-query`, `/wiki-update`, `/wiki-ingest`, `/wiki-idea`, `/wiki-lint` slash commands. Activity log: [log.md](./log.md).

---

## Now

> What's actively in flight. Refreshed at session end.

- **wiki-bootstrap** — adopting the scraps-style living wiki here. This page and its siblings are the first artefact. (this branch)
- **redesign-retro** — hero proof-of-concept committed (`cf6f4aa` on `redesign-retro`); 2026-spin 8-bit aesthetic. Parked pending design-time. See [features/redesign-retro/spec.md](../features/redesign-retro/spec.md).
- **lolz subdomain** — `lolz.davebeazer.dev` earmarked to host the April Fools build so it remains rediscoverable. Vercel domain config pending.

## Concepts

| Page | What it answers |
|---|---|
| [Architecture](./architecture.md) | Static no-framework rebuild, Vercel deploy model, branch strategy |
| [Design System](./design-system.md) | Palette, typography, component patterns |

## Reference

| Page | What it lists |
|---|---|
| [Decisions](./decisions.md) | Date / decision / rationale table for every architectural call |
| [Ideas](./ideas.md) | Captured but not-yet-planned ideas. Append-only |

## Threads (in flight)

| Thread | Status | One-line |
|---|---|---|
| wiki-bootstrap | shipping | First-pass scaffold + browser viewer. This branch. |
| redesign-retro | spec | Hero PoC built; needs design-time before going wider |
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
