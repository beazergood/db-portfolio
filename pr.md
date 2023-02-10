# Creating a pr

1. Create a new branch with the pattern: `<type>/<do-something>` (see
   [Conventional Commit](#conventional-commit))

   e.g. `git checkout -b feat/add-bullet-button`

2. After you have done your changes, commit your changes according to
   [Conventional Commit](#conventional-commit) style.

3. if you have additional commits and don't want to be bothered with the
   `<type>`, you can start your commit message with a capital letter to _skip_
   the commitlint.
   ([though we are NOT recommending to do this](#why-skipping-commitlint-is-not-recommended))

   e.g. `git commit -m 'Add commit message guidelines'`

4. When it is ready, you can push the branch to remote `origin`

   e.g. `git push --set-upstream origin feat/add-bullet-button`

5. Create a Merge Request(MR), and add at least one reviewer. By default you
   need at least one approval before you can merge it.

6. When the MR is ready to merge, you can either merge it directly if the
   pipeline has passed, or set it to auto-merge once it has done so. Make sure
   the title and description have been correctly set first (see
   [Conventional Commit](#conventional-commit))

   e.g.

   _Title_: `feat(components): add bullet button`

   _Description_: (Optional but it is **highly recommended** to have a summary
   of relevant points for the changes)

   ```markdown
   - Add bullet button component

     We use bullet button everywhere, it is better to extract it to be a
     reusable component to avoid repeating yourselves, DRY

   - Add an example usage of the new button component to the docs
   ```

   _P.S. Use imperative form for your commit message and the Merge Request_

   > Describe your changes in imperative mood, e.g. “make xyzzy do frotz”
   > instead of “[This patch] makes xyzzy do frotz” or “[I] changed xyzzy to do
   > frotz”, as if you are giving orders to the codebase to change its behavior.
   > Try to make sure your explanation can be understood without external
   > resources. Instead of giving a URL to a mailing list archive, summarize the
   > relevant points of the discussion.
   >
   > https://git.kernel.org/pub/scm/git/git.git/tree/Documentation/SubmittingPatches?id=HEAD#n133

## Conventional commit

Format:

```
<type>(<optional scope>): <subject>
<BLANK LINE>
[optional body]
<BLANK LINE>
[optional footer(s)]
```

### Example

    feat: add hat wobble
    ^--^  ^------------^
    |     |
    |     +-> Summary in present tense.
    |
    +-------> Type: fix, feat, chore, revert, build, ci, docs, perf, refactor, style & test

Can only be the following `<type>`s:

- `fix`: a commit of the type `fix` patches a bug in your codebase (this
  correlates with [PATCH](http://semver.org/#summary) in semantic versioning)
- `feat`: a commit of the type `feat` introduces a new feature to the codebase
  (this correlates with [MINOR](http://semver.org/#summary) in semantic
  versioning)
- `revert`: revert previous commit only
- `build`: changes that affect the build system or external dependencies
  (example scopes: gulp, broccoli, npm)
- `ci`: changes to our CI configuration files and scripts (example scopes:
  Travis, Circle, BrowserStack, SauceLabs)
- `docs`: documentation only changes
- `perf`: a code change that improves performance
- `refactor`: a code change that neither fixes a bug nor adds a feature
- `style`: changes that do not affect the meaning of the code (white-space,
  formatting, missing semi-colons, etc)
- `test`: adding missing tests or correcting existing tests
- `chore`: updating eslint rules etc.; no production code change. **ONLY use
  `chore` when above types do not fit in.**

Special `<type>` annotation(`!`):

- **`BREAKING CHANGE`**: a commit that has a footer `BREAKING CHANGE:`, or
  appends a ! after the type/scope, introduces a breaking API change
  (correlating with [MAJOR](http://semver.org/#summary) in semantic versioning).
  A BREAKING CHANGE can be part of commits of any type.

footers other than `BREAKING CHANGE: <description>` may be provided and follow a
convention similar to
[git trailer format](https://git-scm.com/docs/git-interpret-trailers).

References:

- https://www.conventionalcommits.org/

### Note: Commitlint is temporarily disabled

### Why skipping commitlint is not recommended

1. Because we use the conventional commit message, and commitlint is here to
   help.
1. Own it as your commit style. To develop your the habit to always write a good
   commit message and be consistent with the repo, follow the convention to
   write every commit message. When your habit has been well developed,
   commitlint does no harm to you because you cannot even see the error message.
1. Save yourselves a couple seconds when creating a MR with a single commit.
   Since Github will pick up the commit message as the MR title when it is only
   one commit.

### When it's OK to to skip the commitlint?

1. When you are going to squash your commits later manually, the commit messages
   aren't that important as you are going to re-write them later. It is OKAY to
   skip the commitlint.

1. When you are sure that you are going to write a MUCH better commit message
   when the MR is ready to merge to master, it is okay to skip it.

### When it's NOT OK to to skip the conventional commits?

1. When you are trying to push directly to master branch (**NOT recommended**),
   you **SHOULD NOT** skip the commitlint, i.e. the conventional commit, to make
   sure you have all your commit messages in the conventional style
