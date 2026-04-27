---
layout: doc
title: db-portfolio Technical Decisions
lastUpdated: 2026-04-27
---

# Technical Decisions

Architectural calls made during the portfolio's evolution, each with rationale. Add new rows at the bottom with today's date; never rewrite history — supersede with a new entry instead.

| Date | Decision | Rationale |
|------|----------|-----------|
| Mar 2026 | Migrate from Next.js + Strapi to a no-framework static site | Personal portfolio doesn't need SSR, hydration, or a CMS. Removing the build + backend cuts maintenance to near-zero and makes "edit a file, push, done" the dev loop |
| Mar 2026 | Vercel `outputDirectory: "static"`, empty buildCommand | Skip the legacy Next.js build entirely. Vercel serves `/static/` directly |
| Mar 2026 | Hand-write CSS instead of Tailwind / framework | Site is small enough that bespoke CSS is shorter than the config a framework would require, and it leaves the source readable to anyone |
| Mar 2026 | Mobile-first CSS with `clip-path` for the wave on small screens, SVG mask on desktop | clip-path is widely supported and cheap; the mask version on desktop is needed because the wave needs the photo behind it, not just a coloured shape |
| Apr 2026 | Keep the legacy `/src/` and `/dwjb-api/` directories on disk after the migration | Cheap insurance — they're only bytes on disk, and the old portfolio occasionally has copy worth referencing during the rewrite |
| Apr 2026 | Branch-per-feature with descriptive names (`april-fools-2026`, `redesign-retro`, `wiki-bootstrap`) | Easier to alias to subdomains in Vercel for previews; reads better in `git log` than ticket-numbered branches |
| Apr 2026 | `april-fools-2026` becomes the canonical "lolz" branch, not a one-off | New pranks accrete onto the same branch each year, hosted at `lolz.davebeazer.dev`. Avoids branch sprawl |
| Apr 2026 | Adopt scraps-style living wiki (`docs/wiki/`, `docs/features/`, slash commands) | Same workflow as scraps means muscle memory transfers; same `/wiki-*` commands work without re-learning |
| Apr 2026 | Wiki viewer is a no-build static SPA (`docs/index.html` + client-side markdown render) | Matches the project's no-framework ethos — no npm install, no build step, no VitePress bundle. Trades search/SEO that we don't need anyway |

## Related

- [Architecture](./architecture.md) — the file tree the decisions live in
- [Design System](./design-system.md) — the palette/font choices behind the visual decisions
