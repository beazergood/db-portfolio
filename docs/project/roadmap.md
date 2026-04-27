---
layout: doc
title: db-portfolio Roadmap
lastUpdated: 2026-04-27
---

# Roadmap

> What's coming and what's parked. Reorder ruthlessly when reality changes.

## Now

- **wiki-bootstrap** (this branch) — establish `docs/` structure, viewer, vision, brand, and the first feature dual-doc pair.
- **portfolio-refresh-2026** (spec) — content rewrite of davebeazer.dev. Strip named clients; replace about-me prose with dynamic project facets. Design questions open. See [feature spec](../features/portfolio-refresh-2026/spec.md).

## Next (planned, not started)

- **VitePress migration** — replace the interim no-build viewer with VitePress to align with `scraps`, `premier-league-docs`, and `enable-platform`. Same content, different rendering layer.
- **lolz subdomain** — Vercel domain alias from `lolz.davebeazer.dev` to the `april-fools-2026` branch. Add DNS CNAME at the registrar.
- **Retire legacy trees** — once everything worth referencing has been pulled out, delete `/src/` and `/dwjb-api/` so the repo only contains what's deployed.
- **April Fools 2026 retrospective overview** — write `features/april-fools-2026/overview.html` to complete that feature pair (only the spec exists today).

## Soon-ish

- **`og-image` per project** — small generated social cards so each project shares with its own preview, not the homepage screenshot.
- **redesign-retro full pass** — only if the visual experiment proves to fit the canonical direction. Hero PoC parked otherwise.

## Parked

> Intentionally on hold. Resume condition spelled out so a future session knows when to reach for it.

- *(none right now)*

## Recently shipped

- **2026-04-01** — April Fools 2026 build deployed to davebeazer.dev for the day, then production reverted. Build preserved on `april-fools-2026` for the lolz subdomain.
- **2026-03-24** — Vercel switched to serve `/static/` directly; legacy Next.js build skipped.
- **2026-03** — No-framework static rebuild merged to `main`.

## Related

- [Wiki — Now](../wiki/index.md#now) — same active work, viewed from the wiki side
- [Decisions](../wiki/decisions.md) — the calls behind the sequencing
