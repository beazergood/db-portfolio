---
layout: doc
title: Deployment Guide
lastUpdated: 2026-04-27
---

# Deployment Guide

How davebeazer.dev gets onto the internet.

## Where it lives

- **Vercel** project, connected to the GitHub repo `beazergood/db-portfolio`.
- **Production domain**: `davebeazer.dev` (and `www.davebeazer.dev`) → `main` branch.
- **Subdomain plan**: `lolz.davebeazer.dev` → `april-fools-2026` branch (pending — see steps below).

## How it builds (or doesn't)

`vercel.json` at the repo root:

```json
{
  "outputDirectory": "static",
  "buildCommand": "",
  "framework": null
}
```

Vercel skips Node entirely and serves `/static/` as a plain static site. Push to `main` → live in ~30 seconds.

## Setting up the lolz subdomain

> One-time setup, ~5 minutes. Do this when ready to publish the April Fools build year-round.

1. **Vercel** → Project → Settings → **Domains** → Add `lolz.davebeazer.dev`.
2. When prompted "What branch should this domain serve?", choose `april-fools-2026`.
3. **DNS** at the registrar — add a CNAME:
   ```
   lolz.davebeazer.dev. CNAME cname.vercel-dns.com.
   ```
4. Wait for DNS propagation (usually < 5 min, sometimes longer).
5. Verify in an incognito window.

After this, every push to `april-fools-2026` redeploys lolz. Production main is unaffected.

## Reverting a bad day

If a deploy goes wrong:

1. Vercel dashboard → Deployments → find the last good one → **Promote to production**.
2. Then fix the broken code on a branch and re-merge through `main`.

Avoid `git revert` for visual-only fixes — Vercel rollback is faster and leaves the git history clean.

## Local preview

```bash
cd static && python3 -m http.server 8080
# → http://localhost:8080/
```

For the wiki:

```bash
cd docs && python3 -m http.server 8081
# → http://localhost:8081/
```

(Or serve from the repo root and let one server cover both.)

## Related

- [Architecture](../wiki/architecture.md) — the file layout that this guide deploys
- [April Fools spec](../features/april-fools-2026/spec.md) — what's on the `lolz` subdomain
