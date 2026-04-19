---
name: git-auto-commit-push
description: "Automatically stage all changes, generate a concise AI-powered commit message, and push to the current branch. Use when the user asks to 'commit and push', 'save changes to github', or similar."
---

# Git Auto Commit & Push

This skill automates the complete workflow for committing and pushing code changes.

## Workflow

1.  **Stage Changes**: Stage all current changes using `git add .` unless the user specifies otherwise.
2.  **Generate Message**: Analyze the staged changes using `git diff --staged` to understand the context.
3.  **Draft Message**: Propose a concise, informative commit message.
4.  **Execute Commit**: Commit the changes with the generated message.
5.  **Push Changes**: Push the commit to the remote repository.

## Best Practices

-   **Message Quality**: Commit messages should be concise and explain the "why" and "what" of the change.
-   **Atomic Commits**: If changes are large and unrelated, recommend splitting them into multiple commits.
-   **Safety First**: Ensure the user confirms the proposed commit message before committing and pushing.
-   **Merge Conflict Check**: If `git push` fails due to conflicts, notify the user and suggest a manual pull/merge.
