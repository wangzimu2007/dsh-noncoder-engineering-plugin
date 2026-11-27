import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const inject = ['skills']

const root = dirname(fileURLToPath(import.meta.url))
const skillDir = join(root, 'skill')
const raw = readFileSync(join(skillDir, 'SKILL.md'), 'utf8')
const content = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')

const description = '非程序员工程助手 v1.3：用户有产品想法但不写代码时，代替其做技术决策并完整交付软件。默认 auto 模式，不逐项询问、不阻塞；演示优先、决策翻译成人话、MVP 范围锁、自动备份/恢复、零安装交付、用户验收清单、验证状态、里程碑预览和自动交接。支持自然语言 goal 触发：用户说「直接做完/全部做完再汇报/不用问我」等强触发短语且任务明确时，自动进入完成目标模式。只有破坏性操作、账号/付费/法律、两个互斥产品方向、验收完全不清这四类才允许停下来问，一次最多 3 个产品问题。禁止问技术栈、数据库、架构、目录结构、测试框架、日志、命名等实现细节。已经给定完整任务或 goal 时，直接执行到完成，最后再汇报和建议。'

export function apply(ctx) {
  return ctx.effect(() => ctx.skills.register({
    name: 'noncoder-engineering',
    description,
    content,
    source: 'noncoder-engineering-plugin',
    resourceBase: { kind: 'directory', path: skillDir },
    invocation: { modelInvocable: true, userInvocable: true },
  }))
}
