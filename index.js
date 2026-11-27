import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const inject = ['skills']

const root = dirname(fileURLToPath(import.meta.url))
const skillDir = join(root, 'skill')
const raw = readFileSync(join(skillDir, 'SKILL.md'), 'utf8')
const content = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')

const description = '非程序员工程助手：用户有产品想法但不写代码时，代替其做技术决策并完整交付软件。默认 auto 模式：不逐项询问、不阻塞，先写 BRIEF、记录 ASSUMPTIONS，再实现、自测和验收报告。适用于做网站、脚本、小工具、桌面应用、自动化流程、修 bug、加功能。只有破坏性操作、账号/付费/法律、两个互斥产品方向、验收完全不清这四类才允许停下来问，一次最多 3 个产品问题。禁止问技术栈、数据库、架构、目录结构、测试框架、日志、命名等实现细节。已经给定完整任务或 goal 时，直接执行到完成，最后再汇报和建议。'

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
