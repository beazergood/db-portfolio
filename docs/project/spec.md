---
layout: doc
title: db-portfolio Project Spec
lastUpdated: 2026-04-27
---

# Project Spec — davebeazer.dev

## What it is

A single-page personal portfolio for Dave Beazer, contract software engineer. Lives at [davebeazer.dev](https://www.davebeazer.dev/).

## What it's for

- A credible "who is this person" page for prospective clients and collaborators.
- A stable URL to drop in cover letters, LinkedIn, conference bios.
- A place to anchor seasonal experiments (April Fools build at `lolz.davebeazer.dev`, the redesign-retro PoC, etc.) without disrupting the canonical domain.

## What it's not

- A blog. (Writing happens elsewhere; if it ever moves on-domain, that's a new spec.)
- A CMS. (Was Strapi-backed; not anymore.)
- A SaaS landing page. (Not selling a product, selling availability.)

## Audience

1. **Recruiters / hiring managers** scanning for a quick read on seniority, stack, availability. Want: signal in 30 seconds.
2. **Past colleagues** following up on a referral. Want: a link to send their boss.
3. **Future Dave** as the working canvas for visual experiments and personal projects on a stable URL.

## Constraints

- No popups, no cookie banners (except the prank build), no newsletter modal, no tracking pixel theatre. Calm surface.
- No mention of AI tooling in copy.
- Content positions Dave as a senior contractor — not a junior dev, not a list of every job held.
- Page weight stays small enough that it loads instantly on flaky mobile.

## Success looks like

- The page is up, with no rotting links.
- Updating it is a 30-second edit-and-push, not a CMS workflow.
- A returning visitor recognises the brand even after seasonal experiments.

## Related

- [Roadmap](./roadmap.md) — what's in flight
- [Architecture](../wiki/architecture.md) — how it's built
- [Design System](../wiki/design-system.md) — what makes it look the way it does
