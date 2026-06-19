import { describe, expect, it } from 'vitest';

import { listExamples, readExample } from './helpers';

const examples = listExamples();
const exampleCases = examples.map((file) => [file] as const);

describe('中文场景示例', () => {
  it('提供三个示例', () => {
    expect(examples).toEqual(['career.md', 'money.md', 'relationship.md']);
  });

  it.each(exampleCases)('%s 包含用户问题', (file) => {
    expect(readExample(file)).toContain('## 用户问题');
  });

  it.each(exampleCases)('%s 包含技能处理方式', (file) => {
    expect(readExample(file)).toContain('## 技能应该怎么处理');
  });

  it.each(exampleCases)('%s 包含期望输出形态', (file) => {
    expect(readExample(file)).toContain('## 期望输出形态');
  });

  it.each([
    ['career.md', '生活费'],
    ['career.md', '付费验证'],
    ['relationship.md', '边界'],
    ['relationship.md', '观察'],
    ['money.md', '专业边界路径'],
    ['money.md', '书面条款'],
  ] as const)('%s 包含场景提示：%s', (file, cue) => {
    expect(readExample(file)).toContain(cue);
  });

  it.each(exampleCases)('%s 不制造虚假确定性', (file) => {
    expect(readExample(file)).not.toMatch(/一定会|保证成功|稳赚/u);
  });

  it('金钱示例不提供投资建议', () => {
    const money = readExample('money.md');
    expect(money).toContain('不给投资建议');
  });

  it('职业示例不建议盲目裸辞', () => {
    const career = readExample('career.md');
    expect(career).toContain('不建议立刻裸辞');
  });

  it('关系示例强调事实和解释分离', () => {
    const relationship = readExample('relationship.md');
    expect(relationship).toContain('区分事实和解释');
  });
});
