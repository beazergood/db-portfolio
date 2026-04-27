---
description: Orient on the latest claude/* branch and propose the next concrete action
---

You're picking up a Scraps session that may have been started on another device (Mac, iPad, phone). Orient yourself, then propose what to do next. Do not change any files.

Steps:

1. Run `git status` and `git log -10 --oneline` to see local state.
2. Run `git fetch origin --prune` then `git for-each-ref --sort=-committerdate --format='%(committerdate:relative) %(refname:short)' refs/remotes/origin/claude/ | head -5` to see recent claude/* branches.
3. Identify the working branch:
   - If on a `claude/*` branch already → that's it.
   - If on `main` → the newest `origin/claude/*` from step 2 is the working branch.
4. Read the most recent commit's full message: `git log -1 --format='%B' <branch>`. Treat it as a handoff note from the previous session.
5. Look in `docs/features/` for any spec the commit message references.
6. Briefly check whether the working tree on the working branch matches origin (any divergence?).

Then report back, in under 150 words:

- **Branch + last commit:** one line.
- **State of play:** which spec phase is complete vs. next, based on the commit + a quick look at the affected files.
- **One concrete next action**, sized for this session.
- **Anything you need from me** before you start (decisions, secrets, access).

Do not start implementing. Wait for me to confirm or redirect.
