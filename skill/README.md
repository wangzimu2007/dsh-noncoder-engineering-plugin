# noncoder-engineering

**非程序员工程助手** — 给不写代码、只负责产品想法的人用的 DSH 技能。

它不是让 Agent 更会写代码，而是让 Agent **替你做技术决策**，并且**不拿技术问题烦你**。

## 解决什么问题

普通工程技能会问：

- 用什么数据库？
- 架构怎么分层？
- 要不要写测试？
- issue tracker 怎么配？

这个技能不会。

它只问四类真正会出事的问题：

1. 破坏性/不可逆操作
2. 账号/付费/法律
3. 两个互斥产品方向
4. 验收完全不清

其余全部按默认方案继续，并记录在 `ASSUMPTIONS.md`。

## 三种模式

| 模式 | 行为 |
|---|---|
| `auto` | 默认。不问，直接做，最后报告 |
| `guided` | 开头最多问 3 个产品问题，然后自动做 |
| `strict` | 可以多问产品/验收问题，仍然不问技术实现 |

## 已定任务 / goal 模式

如果用户已经：

- 用 `/goal` 建了目标
- 给了完整步骤
- 说“按这个执行”“跑完再说”“不用问我”

技能会：

- 不进行开场提问
- 不逐步确认
- 直接执行到验收完成
- 最后再给报告和建议

## 安装

### 方式一：复制

把整个目录复制到：

```text
C:\Users\<你>\.dsh\skills\noncoder-engineering
```

确保：

```text
SKILL.md
templates/BRIEF.md
templates/ASSUMPTIONS.md
templates/OPEN_QUESTIONS.md
```

### 方式二：通过 DSH 技能管理器

如果安装了 `dsh-plug-skills` 或类似技能市场插件，可以直接从 GitHub 仓库安装。

## 使用

```text
用非程序员工程助手，auto：帮我做一个记账小工具。
```

或：

```text
用非程序员工程助手，guided：我想做一个能管理角色和分镜的桌面工具。
```

技能会在项目里生成：

- `BRIEF.md`
- `.noncoder/ASSUMPTIONS.md`
- `.noncoder/OPEN_QUESTIONS.md`

## 文件说明

| 文件 | 作用 |
|---|---|
| `SKILL.md` | 技能规则 |
| `templates/BRIEF.md` | 产品简报模板 |
| `templates/ASSUMPTIONS.md` | 技术默认决策记录 |
| `templates/OPEN_QUESTIONS.md` | 非阻塞问题记录 |

## 这不是什么

- 不是模型
- 不是出图工具
- 不是 DSH 插件 bundle（当前是 skill，不是 Cordis 插件）
- 不替代测试、代码审查和安全审计

## License

MIT
