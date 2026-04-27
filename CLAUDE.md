# CLAUDE.md

## Project Overview

Personal portfolio site for Dave Beazer — a contract software engineer. The site lives at [davebeazer.dev](https://www.davebeazer.dev/).

## Architecture

The project is mid-migration from Next.js + Strapi CMS to a **static no-framework site** (plain HTML, CSS, vanilla JS).

- **`/static/`** — the new static site (active development)
  - `index.html` — single-page portfolio, semantic HTML5, accessible
  - `styles.css` — hand-written CSS, mobile-first, white/green/purple palette
  - `script.js` — ~85 lines vanilla JS (smooth scroll, mobile nav, scroll animations)
- **`/src/`** — legacy Next.js site (kept for reference, will be removed)
- **`/dwjb-api/`** — legacy Strapi CMS backend (no longer needed)
- **`/public/`** — shared assets (images, SVGs) used by both old and new sites

## Design System

The site uses a specific color palette — always use these values via CSS custom properties:

- **Purple**: `#C285D3` (accent), `#642975` (dark/text)
- **Mint green**: `#C2F0CC` (buttons, borders), `#6FDC87` (dark)
- **Melon/coral**: `#FDB6B8` (decorative underlines, wave accents)
- **Ice**: `#E6F4F1` (tinted section backgrounds)
- **Text**: `#2B2B2B` (primary), `#8F91A8` (secondary)
- **Background**: `#FFFFFF` (white)

**Fonts**: Paytone One (headings), Inter (body)

**Do NOT** use dark theme or switch to a different color palette without explicit approval.

## Styling / Theming

- Always use CSS custom properties (defined in `:root` in styles.css) instead of hardcoded color values
- Cards use mint green borders (`--color-border: #C2F0CC`) with purple hover states
- Skill tags/pills use light purple background tint
- The hero uses a full-width wave-masked image from the production site's SVG wave pattern

## Content Guidelines

- Position Dave as a **senior contractor**, not a junior developer
- Do NOT list every position held — keep it high-level
- Do NOT mention AI tooling, Claude, or any AI assistants anywhere in site content
- **Do NOT name specific clients or employers** in site copy — describe work by *kind* (clinical portal, real-time video, sports-data platform), not by *brand*. This is a hard rule. See [docs/wiki/brand.md](docs/wiki/brand.md) for fuller context
- The "How I Work" section replaces a traditional experience timeline

## Living wiki

Working notebook lives under `docs/`. Vision, brand, decisions, feature specs, and per-feature stakeholder HTML overviews. Browse it locally with:

```bash
cd docs && python3 -m http.server 8081
```

Slash commands available: `/wiki-update`, `/wiki-query`, `/wiki-ingest`, `/wiki-idea`, `/wiki-lint`, `/pickup`. They operate on `docs/wiki/*` regardless of project name.

## Build & Deploy

No build step required. The `/static/` directory can be served from any static host. Currently the production site still runs the legacy Next.js version on Vercel.

## Key Commands

```bash
# Serve locally for development
cd static && python3 -m http.server 8080

# The legacy Next.js site (reference only)
npm install && npm run dev
```
