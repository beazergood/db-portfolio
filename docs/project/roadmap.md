---
layout: doc
title: db-portfolio Roadmap
lastUpdated: 2026-04-27
---

# Roadmap

> What's coming and what's parked. Reorder ruthlessly when reality changes.

## Now

- **wiki-bootstrap** (this branch) — establish `docs/` structure, viewer, and slash commands so future work is documented as it lands.

## Next (planned, not started)

- **lolz subdomain** — Vercel domain alias from `lolz.davebeazer.dev` to the `april-fools-2026` branch. Add DNS CNAME at the registrar. Confirm the prank loads independently of production.
- **Retire legacy trees** — once everything worth referencing has been pulled out, delete `/src/` and `/dwjb-api/` so the repo only contains what's deployed.
- **Backfill feature specs** — write `features/april-fools-2026/spec.md` and `features/redesign-retro/spec.md` from existing context, including a stakeholder-friendly `overview.html` for each per the living-spec principle.

## Soon-ish

- **redesign-retro full pass** — hero PoC is committed. Needs the rest of the page (about, approach, skills, work, contact) translated into the retro idiom, then a side-by-side review against the live site before deciding to merge.
- **`og-image` per project** — small generated social cards so each project shares with its own preview, not the homepage screenshot.

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
