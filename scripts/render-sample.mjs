import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const skillPath = join(root, 'skills', 'parallel-me-council', 'SKILL.md');
const outDir = join(root, 'dist');
const outPath = join(outDir, 'sample-output.md');
const skillText = readFileSync(skillPath, 'utf8');

const members = [
  ['现实资源官', '准备条件'],
  ['长期主义者', '准备条件'],
  ['反脆弱冒险派', '小步验证'],
  ['风险审计员', '继续等待'],
  ['情绪诚实者', '小步验证'],
  ['行动设计师', '小步验证'],
];

const memberCards = members
  .map(
    ([name, vote]) => `### ${name}
- **立场**：先把决定变成可验证实验，而不是直接押上全部筹码。
- **支持证据**：用户有明确动机，但关键证据仍不完整。
- **反对证据**：如果长期拖延，机会成本会继续增加。
- **最大风险**：把情绪缓解误认为真实验证。
- **可逆性**：中，因为小实验可回滚，但时间成本真实存在。
- **投票**：${vote}`,
  )
  .join('\n\n');

const output = `# 平行自我委员会示例

技能正文长度：${skillText.length} 个字符。

## 议题识别
- 决策：我要不要辞职做自己的产品？
- 选项：继续上班并验证、兼职验证、直接辞职。
- 约束：现金流、用户验证、精力。
- 风险：收入稳定性和长期机会。
- 可逆性：中。
- 信心等级：中低。

## 委员会发言

${memberCards}

## 投票统计
- 立即行动：0
- 准备条件：2
- 继续等待：1
- 暂不执行：0
- 小步验证：3

## 委员会决议
先探索验证，再准备过渡，不建议立即裸辞。

## 为什么不是其他选项
直接裸辞证据不足；无限等待又会继续消耗。小规模付费验证能用较低成本换真实信息。

## 仍然不确定的事
用户付费意愿、现工作可协商空间、真实最低生活成本。

## 反转条件
如果出现稳定付费、现金流缓冲增加、或工作损害健康到不可恢复，建议可以调整。

## 24 小时最小行动
联系 5 个试用用户，提出明确付费方案并记录反馈。

## 7 天验证计划
第 1 天：付费访谈。第 2 天：定价页。第 3 天：小额预售。第 4 天：复盘异议。第 5 天：计算现金流。第 6 天：设计过渡条件。第 7 天：决策复盘。

## 回滚方案
如果没有付费信号，暂停辞职决定，继续降低产品范围并保留收入来源。
`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, output);
console.log(`已渲染：${outPath}`);
