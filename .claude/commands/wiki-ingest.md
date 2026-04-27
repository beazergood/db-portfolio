Ingest a transcribed source document into the scraps wiki — extract facts, update affected pages, log the ingest.

Arguments: $ARGUMENTS — path to a text source (MD / TXT / CSV).

If $ARGUMENTS is empty, ask the user which source to ingest.

## Step 1: Refuse binaries early

If the path ends in `.xlsx`, `.xlsm`, `.pptx`, `.docx`, or `.pdf`, **stop**. Respond:

> Can't ingest binary sources directly. Please transcribe it first:
>
> - **Spreadsheet** (`.xlsx`/`.xlsm`): export the relevant sheets as CSV, drop them in `docs/wiki/_sources/<source-name>/`, then re-invoke `/wiki-ingest`.
> - **Slides** (`.pptx`): paste the speaker notes / key slide content into a markdown file under `docs/wiki/_sources/<source-name>.md`.
> - **Meeting notes / Slack threads / Q&A**: type them into a markdown file under `docs/wiki/_sources/`.

Transcription is a deliberate human step — your interpretation gets baked in, not raw OCR.

## Step 2: Read the source

Read the full source file. Note the source path — it'll be referenced in the log entry.

## Step 3: Identify affected wiki pages

Read `docs/wiki/index.md` to see the page catalogue. Match facts in the source to existing pages by topic.

If the source covers a concept with no existing wiki page, create a new page (and add a row to `index.md`).

## Step 4: Extract facts

For each affected page:

- Pull out **specific, durable facts** — measurements, formulas, decisions, constraints, version-stamped statements.
- Skip filler ("we discussed X" — what was the conclusion?).
- Cite the source inline where it adds context: "Per `_sources/jose-2026-04-22.md`, …"

Edit each affected page in place. If the new content is a self-contained sub-topic, give it a `## <heading>`. Otherwise weave it into existing sections.

## Step 5: Update lastUpdated

Bump the `lastUpdated:` frontmatter on every edited page to today's date.

## Step 6: Append to the activity log

Add one line to the **top** of the entries in `docs/wiki/log.md`:

```
- **YYYY-MM-DD** — ingest — <pages touched> — <source path> — <one-sentence summary of what it added>
```

## Step 7: Confirm to the user

Summarise:

- Which source was ingested
- Which pages were updated, and the headline fact added to each
- Any sections you flagged as "TBD" because the source was ambiguous
