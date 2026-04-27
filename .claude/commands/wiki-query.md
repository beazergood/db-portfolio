Answer a question from the scraps wiki before crawling code.

Arguments: $ARGUMENTS — the question to answer (free text).

If $ARGUMENTS is empty, ask the user what they want to know.

## Step 1: Read the catalogue

Read `docs/wiki/index.md` to see which concept, reference, and decision pages exist. The catalogue groups pages by purpose (Concepts / Reference / Threads / Parked) and includes one-line descriptions.

## Step 2: Pick candidate pages

From the question, identify 1–3 candidate pages that most likely contain the answer. Favour:

- A concept page (`architecture.md`, `auth.md`, `sequences.md`, `moments.md`, `cloud-import.md`, `camera-import.md`) for "what does X mean / why"
- A reference page (`api-surface.md`, `data-model.md`) for "where is X" / "what's the shape of X"
- `decisions.md` for "why did we choose X"

## Step 3: Read and answer

Read the candidate pages in parallel. Answer the user's question with the relevant passage and cite the wiki page (e.g. "per `wiki/auth.md` — ...").

If the wiki contains the answer, **do not crawl the codebase**. The whole point of the wiki is to be the fast path.

## Step 4: Fall back to code only if the wiki is silent

If after reading 2–3 candidate pages the answer isn't there, fall back to grep / Read on the codebase. After answering, consider running `/wiki-update <page>` to file the learning back so the next session doesn't have to re-derive it.
