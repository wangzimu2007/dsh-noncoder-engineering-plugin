# noncoder-engineering

**非程序员工程助手 v1.2** — 给不写代码、只负责产品想法的人用的 DSH 技能。

目标不是让 Agent 更会写代码，而是让它：

- 替你做技术决策
- 不拿技术问题烦你
- 先给你能看的演示
- 让你能用普通话验收
- 坏了能恢复
- 想法变多也不会拖死当前版本

## 核心规则

- 默认 `auto`：不问，直接做
- 只问产品，不问技术
- 只有四类阻塞才停：破坏性操作、账号/付费/法律、两个互斥产品方向、验收完全不清
- 有 `/goal` 或完整任务说明时：直接跑完，最后再报告

## v1.2 新增

### 第一梯队

- **演示优先**：先做能打开、能点的最小版本；`DEMO.md`
- **决策翻译**：技术决定写成人话；`.noncoder/DECISIONS.md`
- **模糊反馈翻译**：把“不好看/太慢/不是我想要的”翻译成视觉/性能/范围/流程问题
- **MVP 范围锁**：新想法进 `LATER.md`，不偷偷加进当前版本
- **自动备份/恢复**：改前备份；`RECOVERY.md` 用普通话写怎么恢复

### 第二梯队

- **零安装交付**：优先单文件/便携版；不让你装 Node、Python、数据库
- **桌面快捷方式**：需要反复打开的成品自动放桌面
- **错误翻译**：不甩堆栈；告诉你哪里坏了、下一步点哪里
- **用户验收清单**：`ACCEPTANCE.md`，5 步能验收
- **数据/隐私说明**：数据存哪、是否上传、怎么删
- **验证状态**：已验证 / 未验证 / 无法验证，不假装全好
- **里程碑预览**：做完一段给截图/可运行版本，但不问“继续吗”
- **自动交接**：上下文快满时写 `.noncoder/HANDOFF.md`，不让用户重复描述

## 安装

把整个目录复制到：

```text
C:\Users\<你>\.dsh\skills\noncoder-engineering
```

或从 GitHub clone。

## 使用

```text
用非程序员工程助手，auto：帮我做一个记账小工具。
```

```text
用非程序员工程助手，guided：我想做一个管理角色和分镜的桌面工具。
```

```text
用非程序员工程助手，strict：帮我完整规划这个项目。
```

有 `/goal` 时直接说：

```text
/goal 完成这个软件：<目标>。<验收标准>。按步骤连续执行，全部完成才停。
```

## 文件

| 文件 | 作用 |
|---|---|
| `SKILL.md` | 技能规则 |
| `templates/BRIEF.md` | 产品简报 |
| `templates/DEMO.md` | 现在能看的东西 |
| `templates/DECISIONS.md` | 技术决定人话版 |
| `templates/LATER.md` | 以后再做 |
| `templates/RECOVERY.md` | 怎么恢复 |
| `templates/ACCEPTANCE.md` | 用户验收清单 |
| `templates/ASSUMPTIONS.md` | 技术假设 |
| `templates/OPEN_QUESTIONS.md` | 不阻塞的问题 |

## DSH 插件版

GitHub：

https://github.com/wangzimu2007/dsh-noncoder-engineering-plugin

插件版通过 `ctx.skills.register()` 注册嵌入式技能，装插件即可，不用手动复制。

## 限制

- 它是指令，不是执行引擎
- 不会替代测试、安全审计和人工验收
- 角色/声音/图片等生成任务仍需对应工具

## License

MIT
