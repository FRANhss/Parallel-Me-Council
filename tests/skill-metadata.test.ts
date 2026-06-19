import { describe, expect, it } from 'vitest';

import { parseSkill, readSkill } from './helpers';

describe('技能元数据', () => {
  const parsed = parseSkill();

  it('包含 YAML frontmatter 分隔符', () => {
    expect(readSkill().startsWith('---\n')).toBe(true);
  });

  it('使用固定技能名称', () => {
    expect(parsed.metadata.name).toBe('parallel-me-council');
  });

  it('描述是中文决策协议', () => {
    expect(String(parsed.metadata.description)).toContain('平行自我委员会');
    expect(String(parsed.metadata.description)).toContain('证据');
  });

  it('声明语义化版本', () => {
    expect(parsed.metadata.version).toMatch(/^\d+\.\d+\.\d+$/u);
  });

  it('安全等级保持谨慎', () => {
    expect(parsed.metadata.safety_level).toBe('careful');
  });

  it('触发语是列表', () => {
    expect(Array.isArray(parsed.metadata.triggers)).toBe(true);
  });

  it('至少包含六个中文触发语', () => {
    expect(parsed.metadata.triggers).toHaveLength(6);
  });

  it.each(['我很纠结', '我要不要', '帮我做决定', '平行自我委员会', '多个版本的我', '做个决策'])(
    '包含触发语：%s',
    (trigger) => {
      expect(parsed.metadata.triggers).toContain(trigger);
    },
  );

  it('标签是列表', () => {
    expect(Array.isArray(parsed.metadata.tags)).toBe(true);
  });

  it.each(['决策', '证据', '风险', '行动', '复盘'])('包含中文标签：%s', (tag) => {
    expect(parsed.metadata.tags).toContain(tag);
  });
});
