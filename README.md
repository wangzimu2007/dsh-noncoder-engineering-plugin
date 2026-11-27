# dsh-noncoder-engineering

DSH Host-only plugin for the **noncoder engineering** skill, version 1.3.

It registers an embedded skill with `ctx.skills.register()` so DSH users can install one plugin instead of copying a skill directory manually.

## v1.3 features

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
- **Natural-language goal triggers**: “直接做完”, “全部做完再汇报”, “不用问我”, “一口气做完”, “按这个执行到完成”

## Natural-language goal trigger

No need to remember `/goal`.

Strong phrases (with a concrete task):

- 直接做完
- 全部做完再汇报
- 做完再汇报
- 不用问我，做完再说
- 别问我，直接做完
- 一口气做完
- 按这个做完
- 按这个执行到完成
- 从头做到尾
- 完成前不要停
- 你全权处理，做完给结果
- finish it
- just do it, don't ask

Weak words that do **not** trigger alone: 继续 / 开始 / 做吧 / 完成 / 全部 / 直接 / 好的 / 可以.

Excluded: discussion only, no-goal requests, stop/cancel/pause, quoted examples.

## Install

### Local

Use DSH's plugin manager to install this directory as a bundle:

```text
D:\AI\dsh-noncoder-engineering-plugin
```

### From GitHub

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
skill/references/GOAL-TRIGGERS.md
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
