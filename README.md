# Parallel Me Council / 平行自我委员会 Skill

一个给 AI Agent 使用的决策协议技能：当用户纠结于重要选择时，召集多个“平行自我”从证据、风险、长期影响、情绪和行动设计角度进行结构化辩论，最后产出可验证、可回滚的下一步。

> 这不是桌面 App，不内置模型，不假装测试外部服务，也不保存用户密钥。它是一个本地可审计的 skill 包。

## What it is

`parallel-me-council` is a Markdown-based skill package for agent systems that support reusable skills or slash-command style workflows. It defines when to trigger the council, how to collect decision context, how to handle safety-sensitive cases, and how to produce a grounded decision report.

## Repository layout

```text
skills/parallel-me-council/SKILL.md
skills/parallel-me-council/examples/
skills/parallel-me-council/references/decision-protocol.md
scripts/validate-skill.mjs
scripts/render-sample.mjs
tests/
```

## Install or use

Copy this folder into your agent skill directory, or reference the skill file directly:

```text
skills/parallel-me-council/SKILL.md
```

Use it when the user says things like:

- “我很纠结。”
- “我要不要辞职？”
- “帮我做决定。”
- “用平行自我委员会分析。”

## What the skill enforces

- Intake before advice
- Safety gate before roleplay
- Evidence and counter-evidence for each council member
- Explicit risk and reversibility judgement
- Vote tally
- Reversal triggers
- 24-hour minimum action
- 7-day validation plan
- Rollback plan

## Safety boundaries

The skill does not replace medical, legal, financial, tax, immigration, contractual, or emergency support. High-risk cases switch to safety-first handling rather than theatrical debate.

## Development

```bash
npm install
npm run format:check
npm run typecheck
npm run lint
npm run test
npm run build
```

`npm run build` validates the skill package and renders a sample output into `dist/sample-output.md`.

## License

MIT
