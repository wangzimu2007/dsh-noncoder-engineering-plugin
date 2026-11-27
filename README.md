# dsh-noncoder-engineering

DSH Host-only plugin for the **noncoder engineering** skill.

It registers an embedded skill with `ctx.skills.register()` so DSH users can install one plugin instead of copying a skill directory manually.

## What it does

- Technical decisions are made by the agent
- Non-blocking by default
- Only destructive/irreversible actions, credentials/payment/legal, mutually exclusive product directions, or unclear acceptance justify a question
- Writes `BRIEF.md`, `.noncoder/ASSUMPTIONS.md`, `.noncoder/OPEN_QUESTIONS.md`
- With `/goal` or a complete task brief: runs to completion, then reports and suggests

## Install locally

```text
D:\AI\dsh-noncoder-engineering-plugin
```

Use DSH's plugin manager to install this directory as a bundle.

## Structure

```text
package.json
cordis.patch.yml
index.js
skill/SKILL.md
skill/templates/*.md
locale/en.json
locale/zh.json
docs/DETAIL.md
icon.svg
```

## License

MIT
