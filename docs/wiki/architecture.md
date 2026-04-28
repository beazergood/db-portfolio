---
layout: doc
title: db-portfolio Architecture
lastUpdated: 2026-04-28
---

# Architecture

A single-page personal portfolio for Dave Beazer (contract software engineer) at [davebeazer.dev](https://www.davebeazer.dev/). The canonical surface is a chat-driven UI — visitors interact with prompts and typed input rather than scrolling sectioned content. See [features/portfolio-refresh-2026/spec.md](../features/portfolio-refresh-2026/spec.md).

## Layout

```
db-portfolio/
├── static/                       ← the live site (active)
│   ├── index.html                chat-driven canonical surface
│   ├── styles.css                hand-written CSS with native nesting
│   ├── script.js                 ES-module controller (~250 lines)
│   ├── chat-entry.js             <chat-entry> custom element (light DOM)
│   ├── answers.json              the curated answer data
│   └── images/                   photos baked into the deploy
├── src/                          ← legacy Next.js (retained for reference)
├── dwjb-api/                     ← legacy Strapi CMS (no longer used)
├── public/                       ← shared assets from the legacy era
├── docs/                         ← this wiki + per-feature specs
├── scripts/dev.js                npm-run-dev orchestrator (no deps)
└── vercel.json                   { outputDirectory: "static" }
```

## The chat-hero stack (canonical)

The live page is built with platform-native primitives — no build step, no framework, no bundler:

- **HTML** — `static/index.html`. Hero (name + role + cursor prompt + wave backdrop), thread container, suggested-prompt list, input row, noscript fallback section.
- **`<chat-entry>` Web Component** — light-DOM custom element, defined in `chat-entry.js`. Renders a right-aligned user bubble + an assistant card (body + follow-ups). Imports answers as a JSON module (`with { type: 'json' }`).
- **Controller** — `script.js`, ES module. Hash routing, theme persistence, `/`-to-focus, esc-to-clear, sticky input.
- **Styles** — `styles.css`. Native CSS nesting, OKLCH colour, container queries, View Transitions for theme cross-fade. Hero hide / seen-prompt state / completion CTA all `:has()`-driven (declarative state — the DOM IS the state).
- **Cache-busting** — subresources are referenced as `?v=N`. Bump on each behaviour-affecting change to defend against dev-time HTTP cache. Production Vercel handles invalidation transparently via etags.

Single source of truth for answer body content: the noscript `<section class="fallback">` in `index.html`. The custom element extracts from it at hydration; noscript visitors see the same content as a stacked semantic page.

## Deploy model

- **Host**: Vercel.
- **Build**: none. `vercel.json` declares `outputDirectory: "static"` and an empty `buildCommand`. Vercel serves `/static/` as a plain static site.
- **Production domain**: `davebeazer.dev` → `main` branch.
- **Subdomain plan**: `lolz.davebeazer.dev` → `april-fools-2026` branch (pending Vercel config). The intention is that `april-fools-2026` becomes the canonical "lolz" branch and accumulates seasonal pranks rather than being recreated each year.

## Branch model

| Branch | Purpose |
|---|---|
| `main` | What's live at davebeazer.dev. Chat-driven canonical site. |
| `april-fools-2026` | The 2026 prank build (theme switcher, fake testimonials, popup chaos). Earmarked for `lolz.davebeazer.dev`. |
| `redesign-retro` | Parked hero PoC for an 8-bit-with-2026-spin redesign. Commit `cf6f4aa`. Kept-for-nostalgia. |
| `wiki-bootstrap` | Merged to `main`. The living-wiki bootstrap branch. |

**Branch protection note:** `main` has a "must be made through a pull request" rule that we currently bypass on every push (admin override). Direct-push is faster for solo work; PR-only would force a final glance before each change. Decision still open — see [roadmap](../project/roadmap.md).

## What the migration removed

- The Next.js build chain (`npm run build`).
- The Strapi backend (`/dwjb-api/`) and the network round-trip it implied.
- Any runtime JS framework. The site is HTML + CSS + ~85 lines of vanilla JS.

The legacy `/src/` and `/dwjb-api/` trees are still on disk for reference but are no longer part of the deploy. They'll be removed once we're sure nothing in them is worth salvaging.

## Dev loop

From the project root, one command brings up both surfaces:

```bash
npm run dev
# [site] → http://localhost:8080/   (the portfolio)
# [docs] → http://localhost:8081/   (the wiki)
```

The orchestrator is `scripts/dev.js` — a small Node script with zero npm deps that spawns both `python3 -m http.server` processes and prefixes their output. Mirrors the scraps and enable-platform pattern at a smaller scale.

Individual surfaces can be brought up with `npm run dev:site` or `npm run dev:docs`. Stop a stuck pair with `npm run stop`.

No build, no watcher, no transpile. Edit a file, refresh.

## Ports

This project's ports:

| Port | Surface | Run with |
|---|---|---|
| 8080 | Static portfolio site (`/static/`) | `npm run dev:site` |
| 8081 | Wiki viewer (`/docs/`) | `npm run dev:docs` |

**Neighbour awareness** — we share a machine with other projects. Known active dev ports across the household so we don't clash when multi-project dev sessions are running:

| Project | Service | Port |
|---|---|---|
| scraps | api (NestJS) | 3333 |
| scraps | web (Angular) | 4202 |
| scraps | capture daemon | 9090 |
| enable-platform | api (NestJS) | 3000 |
| enable-platform | app (Angular) | 4201 |
| enable-platform | docs (VitePress) | 5173 |
| pl-docs | docusaurus | 3000 (default; latent) |

When the [VitePress migration](./decisions.md) lands, db-portfolio's docs should pick a port other than 5173 (e.g. 5181) to avoid clashing with enable-platform.

## Related

- [Design System](./design-system.md) — palette + typography
- [Decisions](./decisions.md) — why static, why no framework
- [Deployment guide](../guides/deployment.md) — Vercel + DNS specifics
