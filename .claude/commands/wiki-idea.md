Capture an idea into the scraps wiki without committing to implementation.

Arguments: $ARGUMENTS — free-text idea description. Optional area suffix in `[brackets]` (e.g. `[ux]`, `[capture]`, `[infra]`).

If `$ARGUMENTS` is empty, ask the user: what's the idea?

## Step 1: Distil the idea

Read the input. Restate it as a compact paragraph capturing:

- What the idea is, in plain language
- Why it matters / what triggered it
- (Optional) any obvious related concept or thread

Keep it short — `ideas.md` is meant to scan in seconds. The full elaboration happens *if and when* the idea graduates to its own thread page.

## Step 2: Generate a slug + area

Slug: kebab-case 2–4 words capturing the core idea. Examples: `pinch-zoom-week`, `rx100-night-mode`, `weekly-summary-email`.

Area: pick from the existing tags in `ideas.md` if any fit (`sequences`, `library`, `capture`, `ux`, `infra`, `wiki`, `auth`, etc.). Otherwise propose one.

## Step 3: Append to ideas.md

Read `docs/wiki/ideas.md`. Insert the new entry **at the top** of the entries list (newest first), in this format:

```
### YYYY-MM-DD · <slug> · <area>
<one-paragraph description>
```

If `ideas.md` has the placeholder `> *Empty, awaiting first capture…*`, replace it with the new entry.

## Step 4: Append to the activity log

Add one line to the **top** of the entries in `docs/wiki/log.md`:

```
- **YYYY-MM-DD** — idea — <slug> — <one-line summary>
```

## Step 5: Don't implement

Resist the urge to start building. The whole point of this command is to *capture without committing*. Tell the user the idea is filed under `docs/wiki/ideas.md` and move on.

## When the user is ready to graduate an idea

If they later say "let's tackle the pinch-zoom idea" — that's the moment for `/wiki-update` to create a thread page or a `docs/features/<feature>/spec.md`. The idea entry stays in `ideas.md` as a historical note ("graduated to thread X on YYYY-MM-DD").
