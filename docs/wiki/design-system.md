---
layout: doc
title: db-portfolio Design System
lastUpdated: 2026-04-27
---

# Design System

The site speaks in a small, deliberate visual vocabulary: clean typography, soft pastel accents, hand-drawn waves. It positions Dave as a senior contractor, not a junior developer — the surface is calm, the copy is unfussy.

## Palette

All colours live as CSS custom properties on `:root` in `static/styles.css`. **Never hardcode hex** — reference the variable.

| Role | Token | Hex | Use |
|---|---|---|---|
| Purple (accent) | `--color-purple` | `#C285D3` | Headings, hover states, decorative |
| Purple (deep) | `--color-purple-dark` | `#642975` | Text emphasis, dark accent |
| Mint (light) | `--color-mint` | `#C2F0CC` | Buttons, card borders |
| Mint (deep) | `--color-mint-dark` | `#6FDC87` | Active states |
| Melon / coral | `--color-melon` | `#FDB6B8` | Decorative underlines, wave accents |
| Ice | `--color-ice` | `#E6F4F1` | Tinted section backgrounds |
| Text | `--color-text` | `#2B2B2B` | Body |
| Text (soft) | `--color-text-soft` | `#8F91A8` | Secondary copy |
| Background | `--color-bg` | `#FFFFFF` | Page |

**Do NOT** introduce a dark theme or alternate palette without explicit approval — the prank build's theme switcher is the exception that proves the rule, and it lives only on `april-fools-2026`.

## Typography

- **Headings**: Paytone One (Google Fonts).
- **Body**: Inter (Google Fonts), 400/500/600/700.
- **Mono** (only on the redesign-retro PoC for now): JetBrains Mono.

Fonts load via two `<link rel="preconnect">` plus a single Google Fonts `<link rel="stylesheet">` in `static/index.html`.

## Components

- **Cards** — mint border, white background, purple hover state. Subtle radius, no shadow stack.
- **Skill tags / pills** — light purple tint background, soft outline.
- **Hero** — full-width image with an SVG-masked wave on desktop, clip-path version on mobile. The wave path is reused from the production site's pre-migration SVG.
- **Section dividers** — hand-drawn underline SVGs (melon-coloured).

## Voice

Content guidelines live in [`/CLAUDE.md`](../../CLAUDE.md). High-level:

- Position Dave as a senior contractor, not a list of every job ever held.
- Anonymise client work where appropriate.
- No mention of AI tooling anywhere in site copy.
- The "How I Work" section replaces a traditional experience timeline.

## Related

- [Architecture](./architecture.md) — where these styles live in the file tree
- [Decisions](./decisions.md) — palette choice, font choice
