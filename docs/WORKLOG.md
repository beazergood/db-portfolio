# db-portfolio — Working Log

> Living document tracking momentum, current focus, and next steps.
> Updated each session to maintain continuity.

---

## Current Status (2026-04-28)

### What's Built & Working

| Feature | Status | Notes |
|---------|--------|-------|
| Chat-driven canonical site | **Live** | `main` → davebeazer.dev. `static/index.html` is the chat. No sub-routes |
| Living wiki | Live | `docs/` browseable at `:8081`. Six slash commands available |
| `<chat-entry>` Web Component | Live | Right-aligned user bubble + assistant card; light DOM |
| Theme-color sync | Live | iOS Safari URL bar follows active theme |
| Sticky input on mobile | Live | + auto-refocus, slash-to-focus, esc-to-clear |
| Wave hero backdrop | Live | Theme-aware: full in light, dimmed in dark |
| April Fools 2026 build | Shipped one day | Preserved on `april-fools-2026` branch |

### Open / next

| Item | State |
|---|---|
| PWA install (`manifest.json` + apple-touch-icon) | Open — would give full mobile chrome control on iOS |
| `lolz.davebeazer.dev` subdomain | Pending Vercel domain config |
| Real-device mobile pass | Pending — need iPhone + Android smoke test |
| VitePress migration of the wiki viewer | Deferred |
| Retire legacy `/src/` and `/dwjb-api/` | Pending |
| Branch-protection workflow decision (PR-only vs direct-push) | Open |
| Real-LLM hatch (v2) | Roadmap |

### What Needs Testing

- [ ] Wiki viewer in browser — does the sidebar navigation work, does markdown render, does HTML embed work
- [ ] Lolz subdomain end-to-end — once live, verify production main is unaffected
- [ ] Redesign-retro hero on real devices (not just localhost)

---

## Focus Areas

### Immediate (this session)

1. Land the wiki bootstrap: structure, content, viewer, commands.
2. Verify the viewer in a browser before reporting done.
3. Commit on `wiki-bootstrap`, leave the redesign work parked on its branch.

### Next session

1. First feature spec pair: write `features/april-fools-2026/overview.html` (stakeholder-readable companion).
2. Schedule the lolz Vercel setup — needs UI access, not a code change.
3. Decide whether to tidy the legacy `/src/` and `/dwjb-api/` trees or leave them as-is.

### Parked

- Full retro redesign — needs design-time, not a coding session.

---

## Session Notes

### 2026-04-28 — chat bubbles, input quick wins, hero polish, ship

Three commits over the day plus a wrap-up:

1. **Hero polish (`ce074e3`)** — role tagline ("Contract software engineer.") in italic Inter under the gradient name; the wavy coast backdrop returns as a full-bleed hero element, theme-aware (full saturation in light, dimmed/desaturated in dark via `[data-theme="dark"]` selector). Cache-bust on `styles.css?v=3`.

2. **Chat bubbles + input quick wins (`4f497de`)** — each chat-entry now visually splits into a right-aligned user bubble (purple, asymmetric corners, max-width 80%) and the existing assistant card. The mono "asked" label is gone; position is the signal. Input gets sticky-on-mobile, auto-refocus after submit, `/`-anywhere to focus the field, `Esc` to clear, and a subtle `<kbd>/</kbd>` hint inside when blurred.

3. **Tier diagram → flow line (`c8429e1`)** — the Frontend / API / Infra tile diagram with hover-reveal looked like skeleton boxes, especially on mobile where there's no hover. Replaced with a single mint-mono `Frontend → API → Infra` line that pulls its weight on first sight. Net `-90` LOC; a rare commit that *removes* visual weight.

**Lesson captured:** if a visual element needs interaction to be informative, it probably shouldn't be a visual element. Trust the prose; punctuate with one tight visual beat.

**Branch-protection note:** every push to `main` reports "Bypassed rule violations: Changes must be made through a pull request." We're admin-overriding. Decision on whether to keep direct-push or move to PR-only is still open.

### 2026-04-27 — chat-hero 2026-native upgrade

End-to-end modernisation of the PoC: ES modules + JSON module imports for the answer data, a `<chat-entry>` custom element (light DOM) for per-entry rendering, View Transitions API for the theme cross-fade, native CSS nesting, `:has()`-driven state for hero hide / seen prompts / completion message (CSS owns the state — the DOM IS the state), container-type on `.main`, `100dvh` for mobile-keyboard safety. Controller shrunk; separation of concerns sharpened (data → JSON, render → custom element, control → script, state → CSS). Visible behaviour identical; smoother theme cross-fade where the browser supports View Transitions. Decisions log captured "2026-native stack" as the default pattern for this repo's static work.

### 2026-04-27 — chat-hero accumulating thread

Evolved the PoC: the chat now persists the visitor's path. Each prompt asked at most once; clicking a seen prompt scrolls back with a highlight; follow-ups scoped to the most recent entry only; completion CTA reveals when all five have been asked. URL hash captures the path in order so a curated `…/#work,care` link reconstructs that exact thread.

### 2026-04-27 — chat-hero PoC

Built the proof of the chat-driven direction at `static/chat-hero/`. Dark-default with a working light toggle, 5 hand-authored answers, typed-input keyword matching with an honest fallback, follow-up prompts per answer, hash routing, progressive-enhancement noscript fallback. ~935 lines across `index.html`, `styles.css`, `script.js`. View at `http://localhost:8080/chat-hero/`.

Not wired to production — main still serves the old static site with PL/Pexip names. Next move depends on whether the PoC vibe is right; if so, the path is to merge `wiki-bootstrap` and then either route `chat-hero/` to root or rebuild `static/index.html` from the PoC.

### 2026-04-27 — direction pivot: chat-driven portfolio

The portfolio-refresh-2026 spec evolved significantly. The earlier framing was "rewrite the copy on a sectioned site"; the new framing is "the sectioned site is the antithesis." Direction crystallised as a chat-driven UI surface where depth is found by interacting, not scrolling.

North star: [dcurt.is](https://dcurt.is/). Brand sharpened — calm-confident not calm-passive; edgy and anti-template; the medium is the message; depth on demand. Decisions log gained chat-UI as canonical interaction model, progressive enhancement as a hard principle, and pre-curated (not real-LLM) answers for v1.

The redesign-retro 8-bit experiment is now clearly not the canonical path. Marked as kept-for-nostalgia rather than donor-of-elements.

`spec.md` and `overview.html` rewritten to match. The overview gained a hypothesis pull-quote and a north-star section.

### 2026-04-27 — single-command dev + port survey

- `package.json` replaced. Old Next.js / Storybook entries dropped (the legacy `/src/` tree is staying on disk per existing decision, but its dependencies aren't part of the active project). Bumped to 2.0.0 to mark the static-rebuild era cleanly.
- `scripts/dev.js` runs both python http.server processes in parallel with colour-prefixed output. No npm deps; mirrors the scraps / enable-platform pattern at a smaller scale.
- Ports documented in `wiki/architecture.md` with neighbour awareness across scraps / enable-platform / pl-docs.
- One thing learned: pl-docs is **Docusaurus**, not VitePress. The "docs alignment" story across projects is "match enable-platform" rather than "match all docs sites." Worth flagging when the VitePress migration is sequenced.

### 2026-04-27 — vision, brand, first feature pair

Pivoted from "scaffold the wiki" to "establish the project's compass". Captured:

- `project/vision.md` — the canvas thread. Compass, not contract.
- `wiki/brand.md` — posture, voice, what we are and aren't. Starting-frame.
- `features/portfolio-refresh-2026/spec.md` + `overview.html` — first dual-doc pair, replacing the existing canonical site copy. Strips named clients; surfaces design questions about dynamic facets.
- Decisions: VitePress is the planned docs stack; current viewer is interim; no-named-clients is a hard rule; every shipping feature gets spec.md + overview.html.

Sharpened the `Anonymise client work where appropriate` line in CLAUDE.md to a hard `Do not name specific clients or employers` rule.

The redesign-retro spec was reframed from "future of the portfolio" to "visual experiment, parked, may donate elements." Saves us pretending it's the canonical direction when it isn't.

### 2026-04-27 — wiki bootstrap

Starting point: the auto-generated `docs/` from a July 2025 "Working Tree MCP" tool — generic emoji-laden templates with no real content. Wiped and replaced with a scraps-style layout:

```
docs/
  WORKLOG.md
  wiki/        (index, log, architecture, design-system, decisions, ideas)
  features/    (april-fools-2026, redesign-retro)
  project/     (spec, roadmap)
  guides/      (deployment)
  + viewer (index.html, styles.css, viewer.js)
```

Slash commands copied from `scraps/.claude/commands/` (pickup, wiki-idea, wiki-ingest, wiki-lint, wiki-query, wiki-update). They reference "scraps" in their examples; the logic is project-agnostic. Localise on first use.

Viewer is a no-build static SPA — sidebar manifest hardcoded, markdown rendered client-side via marked.js from CDN. Matches the project's no-framework ethos.
