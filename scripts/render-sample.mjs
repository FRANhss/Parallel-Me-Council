import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const skillPath = join(root, 'skills', 'parallel-me-council', 'SKILL.md');
const outDir = join(root, 'dist');
const outPath = join(outDir, 'sample-output.md');
const skillText = readFileSync(skillPath, 'utf8');

const members = [
  ['Reality Treasurer', 'prepare'],
  ['Long-Range Self', 'prepare'],
  ['Antifragile Explorer', 'explore'],
  ['Risk Auditor', 'wait'],
  ['Emotional Witness', 'explore'],
  ['Action Designer', 'explore'],
];

const memberCards = members
  .map(
    ([name, vote]) => `### ${name}
- **Position**: 先把决定变成可验证实验，而不是直接押上全部筹码。
- **Evidence For**: 用户有明确动机，但关键证据仍不完整。
- **Evidence Against**: 如果长期拖延，机会成本会继续增加。
- **Largest Risk**: 把情绪缓解误认为真实验证。
- **Reversibility**: medium, 因为小实验可回滚但时间成本真实存在。
- **Vote**: ${vote}`,
  )
  .join('\n\n');

const output = `# 平行自我委员会 Sample

Source skill length: ${skillText.length} characters.

## Intake
- Decision: 我要不要辞职做自己的产品？
- Options: 留任并验证、兼职验证、直接辞职。
- Constraints: 现金流、用户验证、精力。
- Stakes: 收入稳定性和长期机会。
- Reversibility: medium.
- Confidence: medium-low.

## Council

${memberCards}

## Vote Tally
- act_now: 0
- prepare: 2
- wait: 1
- reject: 0
- explore: 3

## Council Verdict
先探索验证，再准备过渡，不建议立即裸辞。

## Why This Beats the Alternatives
直接裸辞证据不足；无限等待又会继续消耗。小规模付费验证能用较低成本换真实信息。

## Uncertainties
用户付费意愿、现工作可协商空间、真实最低生活成本。

## Reversal Triggers
如果出现稳定付费、现金流缓冲增加、或工作损害健康到不可恢复，建议可调整。

## 24-Hour Minimum Action
联系 5 个试用用户，提出明确付费方案并记录反馈。

## 7-Day Validation Plan
Day 1: 付费访谈。Day 2: 定价页。Day 3: 小额预售。Day 4: 复盘异议。Day 5: 计算 runway。Day 6: 设计过渡条件。Day 7: 决策复盘。

## Rollback Plan
如果没有付费信号，暂停辞职决定，继续降低产品范围并保留收入来源。
`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, output);
console.log(`Rendered ${outPath}`);
