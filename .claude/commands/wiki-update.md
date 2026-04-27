Push a mid-session learning into the scraps wiki so knowledge compounds across conversations.

Arguments: $ARGUMENTS — the target page (kebab-case filename or free-text topic) plus optional inline content.

Examples:

- `/wiki-update moments` — use the current conversation context as the learning
- `/wiki-update sequences play_window dispatcher iterates allFrames` — inline content
- `/wiki-update "new concept: timeline zoom"` — create a new page

If $ARGUMENTS is empty, ask the user: which page, and what's the learning to file?

## Step 1: Identify the target page

Read `docs/wiki/index.md` to see existing pages.

- If $ARGUMENTS names an existing page (fuzzy match on filename or row), use it.
- If not, suggest the closest match and ask: "Did you mean `sequences.md`, or should I create a new page?"
- If it's clearly a new page, confirm the page name and add an entry to the Concepts / Reference table of `docs/wiki/index.md`.

## Step 2: Extract the learning

The learning can come from:

- The current conversation (summarise what was synthesised — what's specifically NEW or NON-OBVIOUS, not boilerplate)
- Inline content passed in `$ARGUMENTS` (after the page name)
- A file the user points at (read it)

Write the learning as a **specific, durable fact**. Bad: "we talked about the loader". Good: "Sequence detail loader fetches the latest 5 k frames (offset = max(0, total - limit)). Earlier offset:0 strategy broke moment chips for sequences past 5 k. Trade-off: deep history needs pagination."

## Step 3: Edit the target MD page

Place the new content under the most relevant existing section. If no section fits, add a new `## <heading>` before the `## Related` section.

Cross-link aggressively — if the learning mentions another wiki concept (auth, sequences, etc.), link to that page's MD.

## Step 4: Update lastUpdated

If the page has a `lastUpdated:` frontmatter field, bump it to today's date.

## Step 5: Append to the activity log

Add one line to `docs/wiki/log.md` at the **top** of the entries:

```
- **YYYY-MM-DD** — update — <page-name> — <one-sentence summary of what changed>
```

## Step 6: Confirm to the user

Summarise:

- Which page was updated
- A 1–2 line preview of the new content
- Whether it was an existing or new page
- Suggest a related page that might want a corresponding update
