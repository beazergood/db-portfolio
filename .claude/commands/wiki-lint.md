Health-check the scraps wiki. Find stale code anchors, orphan pages, and contradictions. Report only — don't fix unless told.

Arguments: $ARGUMENTS — optional `--fix` flag to auto-correct trivially fixable issues.

## Step 1: List the catalogue

Read `docs/wiki/index.md`. Extract the list of pages it claims to have.

## Step 2: List the actual files

`ls docs/wiki/*.md`. Compare to step 1.

Report:

- **Missing pages** — index references a page that doesn't exist on disk
- **Orphan pages** — page exists but isn't linked from `index.md`

## Step 3: Check stale code anchors

For every wiki page, grep for inline references like `file.ts:123` or absolute paths into `api/`, `web/`, `daemon/`, `database/`. For each:

- Verify the file still exists
- If a line number is given, sanity-check the file is at least that long (perfect line accuracy is too brittle to lint, but file-existence is cheap)

Report broken paths.

## Step 4: Check cross-links

Grep wiki pages for `](./<page>.md)` and `](./<page>)` style links. Verify each target exists. Report dangling links.

## Step 5: Check `lastUpdated` freshness

Sort wiki pages by `lastUpdated` frontmatter (or fall back to git mtime). Flag any page that hasn't been touched in **>90 days** AND isn't `decisions.md` or `log.md` (those are append-only by nature).

## Step 6: Check for contradictions (best effort)

For each page, look for explicit contradictions with other pages. This is best-effort — flag obvious cases, ask the user about ambiguous ones. Don't auto-merge.

## Step 7: Report

Group findings:

- 🔴 **Broken** — missing pages, dangling links, dead file paths (must fix)
- 🟡 **Stale** — old pages, orphans (worth a glance)
- 🟢 **Looks fine** — pages that passed all checks

If `--fix` was passed: auto-correct only the trivially fixable ones (orphan pages → add to index, dangling internal links → suggest closest match). Never auto-rewrite content.
