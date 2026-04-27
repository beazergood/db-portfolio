# db-portfolio — Working Log

> Living document tracking momentum, current focus, and next steps.
> Updated each session to maintain continuity.

---

## Current Status (2026-04-27)

### What's Built & Working

| Feature | Status | Notes |
|---------|--------|-------|
| Static no-framework site | Live | `main` branch, served at davebeazer.dev via Vercel |
| Vercel deploy | Live | `outputDirectory: static`, no build step |
| April Fools 2026 build | Shipped (one day) | Preserved on `april-fools-2026` branch |
| Wiki + viewer | Bootstrapping | This work — `wiki-bootstrap` branch |

### What's WIP

| Feature | Branch | State |
|---------|--------|-------|
| Living wiki | `wiki-bootstrap` | Scaffolding `docs/` structure + browser viewer |
| Retro redesign | `redesign-retro` | Hero PoC committed (`cf6f4aa`); rest of page unwritten |
| `lolz.davebeazer.dev` subdomain | n/a | Pending Vercel domain config |

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
