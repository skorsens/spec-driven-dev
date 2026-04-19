---
name: changelog
description: Maintain CHANGELOG.md in the project root. If it does not exist, bootstrap it from git history. If it exists, append any commits made after the most recent date heading. Invoke manually before merging a branch.
---

Maintain the project `CHANGELOG.md` using the following rules.

## Step 1 — Read the current state

Check whether `CHANGELOG.md` exists in the project root.

- If it **does not exist**, the cutoff date is the beginning of the repository (include all commits).
- If it **does exist**, read it and find the most recent date heading (format `## YYYY-MM-DD`). The cutoff is that date — only commits *after* that date (exclusive) are new.

## Step 2 — Collect commits

Run the following git command to get commits since the cutoff. If there is no cutoff, omit the `--after` flag.

```bash
git log --pretty=format:"%ad | %s" --date=short --after="<cutoff-date>" --no-merges
```

Group the resulting lines by date. Within each date, each commit subject becomes one bullet.

## Step 3 — Write or update CHANGELOG.md

**If creating from scratch:**

Write `CHANGELOG.md` with this structure — newest date first:

```markdown
# Changelog

## YYYY-MM-DD

- <commit subject>
- <commit subject>

## YYYY-MM-DD

- <commit subject>
```

**If updating an existing file:**

Prepend the new date sections immediately after the `# Changelog` heading, before the existing entries. Do not modify existing entries.

## Rules

- Skip merge commits (already excluded by `--no-merges`).
- If there are no new commits, tell the user and make no changes.
- Date headings use ISO format: `## YYYY-MM-DD`.
- Each bullet is the raw commit subject line — do not rephrase or summarise.
- Newest dates appear first (reverse chronological order).
