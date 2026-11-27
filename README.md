# dsh-noncoder-engineering

DSH Host-only plugin for the **noncoder engineering** skill, version 1.2.

It registers an embedded skill with `ctx.skills.register()` so DSH users can install one plugin instead of copying a skill directory manually.

## v1.2 features

- Demo-first: smallest runnable version and screenshots
- Plain-language decision log
- Vague-feedback translator
- MVP scope lock and `LATER.md`
- Automatic backup and `RECOVERY.md`
- Portable/zero-install delivery
- Desktop shortcut guidance
- Error translation
- 5-step user acceptance list
- Data/privacy notes
- Verified / unverified / unverifiable status
- Milestone previews without blocking
- Automatic handoff on context pressure

## Install

### Local

Use DSH's plugin manager to install this directory as a bundle:

```text
D:\AI\dsh-noncoder-engineering-plugin
```

### From GitHub

Clone:

```bash
git clone https://github.com/wangzimu2007/dsh-noncoder-engineering-plugin.git
```

Then install the directory with the DSH plugin manager.

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

## Notes

- The embedded skill and a manually copied `noncoder-engineering` skill share the same name. Do not install both; remove the manual copy if you want the plugin version.
- The plugin registers instructions only; capabilities depend on the current DSH composition and tools.

## License

MIT
