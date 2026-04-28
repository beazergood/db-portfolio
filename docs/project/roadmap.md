---
layout: doc
title: db-portfolio Roadmap
lastUpdated: 2026-04-28
---

# Roadmap

> What's coming and what's parked. Reorder ruthlessly when reality changes.

## Now

- *(no live threads — canvas is in a steady state)*

## Next (planned, not started)

- **PWA install** — set up `manifest.json`, `apple-touch-icon`, and `apple-mobile-web-app-status-bar-style="black-translucent"` so an iOS Add-to-Home-Screen install gives full chrome control (status bar themed; bottom Safari toolbar gone). ~15 minutes. Surfaced after first real-device test showed the white iOS status bar can't be themed by a regular page.
- **lolz subdomain** — Vercel domain alias from `lolz.davebeazer.dev` to the `april-fools-2026` branch. Add DNS CNAME at the registrar.
- **VitePress migration** — replace the interim no-build viewer with VitePress to align with `enable-platform`. Same content, different rendering layer.
- **Retire legacy trees** — once everything worth referencing has been pulled out, delete `/src/` and `/dwjb-api/` so the repo only contains what's deployed.
- **April Fools 2026 retrospective overview** — write `features/april-fools-2026/overview.html` to complete that feature pair.
- **Real-device mobile pass** — iPhone + Android end-to-end smoke test. Test sticky input + soft keyboard interaction; confirm tier flow line + bubble layout reads cleanly on small screens.
- **Branch-protection workflow decision** — main currently bypasses the "must be made through a pull request" rule on every push. Pick: stay direct-push (current speed) or move to PR-only (every change gets a final glance).

## Soon-ish

- **`og-image` per project** — small generated social cards so each share has its own preview, not the homepage screenshot.
- **Real-LLM hatch (v2)** — a single "ask anything" affordance below the curated prompts, cost-gated by an edge function. Only after at least N curated prompts have been clicked.
- **Personal-beat copy refresh** — the bench answer's "turning over how good interfaces age" line is placeholder; swap for something more specifically Dave when there's a moment.

## Parked

> Intentionally on hold. Resume condition spelled out so a future session knows when to reach for it.

- **redesign-retro 8-bit experiment** — kept-for-nostalgia at `redesign-retro` branch (commit `cf6f4aa`). Not the canonical direction.

## Recently shipped

- **2026-04-28** — Right-aligned chat bubbles + input quick wins (sticky on mobile, auto-refocus after submit, slash-to-focus, esc-to-clear, kbd hint). Tier diagram dropped in favour of a simple mint-mono flow line.
- **2026-04-28** — Hero gains a role tagline ("Contract software engineer.") and the wavy coast backdrop returns, theme-aware (full in light, dimmed in dark).
- **2026-04-27** — Typed input becomes part of the transcript: literal phrasing in the user bubble, honest fallback for unmatched input, completion CTA when all prompts asked.
- **2026-04-27** — Copy refresh on `work` and `show` answers — drops named clients (PL/Pexip) and fabricated specifics (£400, 60ms). Now leans on organisation-wide platforms / design systems / media tooling for photo + video.
- **2026-04-27** — Theme-color sync for iOS Safari URL bar; cache-bust query strings on subresources to defend against stale dev caches.
- **2026-04-27** — `chat-hero/` migrated to `static/` root and replaces the legacy sectioned site as the canonical face. Inline DB favicon added.
- **2026-04-27** — 2026-native refactor of the chat-hero: ES modules, JSON modules, `<chat-entry>` light-DOM Web Component, View Transitions for theme cross-fade, CSS nesting, `:has()`-driven state.
- **2026-04-27** — Persistent chat thread (path accumulates), URL hash captures the conversation, follow-ups scoped to last entry, completion CTA when all prompts asked.
- **2026-04-27** — chat-hero PoC (initial) at `static/chat-hero/` — first proof of the chat-driven direction.
- **2026-04-27** — Direction pivot: portfolio refresh becomes chat-driven and anti-template, north-starred on dcurt.is. Brand sharpened to calm-confident; no craft-romance vocabulary.
- **2026-04-27** — Vision + brand pages captured. Canvas paradigm articulated: chat → wiki → spec → ship → log → repeat.
- **2026-04-27** — Wiki bootstrap: `docs/` structure (wiki, project, features, guides, viewer), six slash commands copied from scraps, browser-viewable at `:8081`.
- **2026-04-01** — April Fools 2026 build deployed for the day, then production reverted. Preserved on `april-fools-2026` for the lolz subdomain.
- **2026-03-24** — Vercel switched to serve `/static/` directly; legacy Next.js build skipped.
- **2026-03** — No-framework static rebuild merged to `main`.

## Related

- [Wiki — Now](../wiki/index.md#now) — same active work, viewed from the wiki side
- [Decisions](../wiki/decisions.md) — the calls behind the sequencing
