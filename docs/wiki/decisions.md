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
| Apr 2026 | Wiki viewer is a no-build static SPA (`docs/index.html` + client-side markdown render) — *interim scaffolding* | Got us viewable in a browser within one session. To be replaced by VitePress (see next row) once the structure has settled |
| Apr 2026 | VitePress as the canonical docs/wiki stack (deferred migration) | Matches the convention across `scraps`, `premier-league-docs`, and `enable-platform`. Same workflow, same shapes, same skills transfer. The current viewer ships in the meantime so the wiki is usable today |
| Apr 2026 | No named clients or employers in any portfolio copy | The site describes work by *kind* (clinical portal, real-time video, sports-data platform), not by *brand*. Sharpens the prior "anonymise client work where appropriate" guidance into a hard rule. See [brand.md](./brand.md) |
| Apr 2026 | Each shipping feature gets a dual-doc pair: `spec.md` (working notebook) + `overview.html` (stakeholder canonical) | Lifts the global living-spec principle into this repo. Three-tab workflow: wiki tab, app tab, overview tab. First pair is `features/portfolio-refresh-2026/` |
| Apr 2026 | Single-command dev orchestrator (`npm run dev` → `scripts/dev.js`) | One command from the project root spins up both the static site (8080) and wiki viewer (8081) with prefixed colour-coded output. Pure Node child_process, zero npm deps. Mirrors the scraps and enable-platform pattern at smaller scale |
| Apr 2026 | Portfolio refresh adopts a chat-driven UI as the canonical interaction model — anti-section, anti-template | The current static site is the antithesis. A 2026 contractor's site demonstrates the paradigm shift to chat-driven UX *while* being the portfolio. North star: [dcurt.is](https://dcurt.is/). See [features/portfolio-refresh-2026/spec.md](../features/portfolio-refresh-2026/spec.md) |
| Apr 2026 | Progressive enhancement is a hard principle, not a nice-to-have | The noscript layer is a fully-readable, semantic, accessible single-page summary. JS layer adds the chat-flow experience on top. Recruiters who don't engage get the signal in 30 seconds; engaged visitors get something different. No JS-required content |
| Apr 2026 | Pre-curated, hand-authored chat answers (not real-LLM) for v1 | Real LLMs feel like gimmicks and demo-toys; pre-curated answers feel intentional and on-brand. Removes cost, latency, and weird-output risk. Hatch left open for a v2 real-LLM affordance if it earns its way in |
| Apr 2026 | "2026-native" stack for vanilla apps in this repo: ES modules, JSON modules, Web Components (light DOM), View Transitions, CSS nesting, `:has()`, container queries, OKLCH | The web platform has caught up — most of what frameworks gave us is now native. For static pages the canvas builds, this is the default pattern. Use the API where it shines (View Transitions for page-state changes; `:has()` for declarative state). Don't force it where simpler CSS works (a list-append still wants a normal keyframe rather than the View Transitions root cross-fade). First reference impl: `static/chat-hero/` |

## Related

- [Architecture](./architecture.md) — the file tree the decisions live in
- [Design System](./design-system.md) — the palette/font choices behind the visual decisions
