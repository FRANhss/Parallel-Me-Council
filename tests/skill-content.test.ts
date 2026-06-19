import { describe, expect, it } from 'vitest';

import { headings, parseSkill, readSkill } from './helpers';

const skill = readSkill();
const parsed = parseSkill(skill);
const skillHeadings = headings(parsed.body);

describe('技能正文内容', () => {
  it.each([
    '技能目的',
    '何时使用',
    '安全闸门',
    '信息采集',
    '委员会成员',
    '成员发言格式',
    '投票含义',
    '最终决策协议',
    '质量要求',
    '输出模板',
    '必须避免',
  ])('包含章节：%s', (heading) => {
    expect(skillHeadings).toContain(heading);
  });

  it.each(['自伤', '暴力', '被伤害', '严重健康症状', '自杀念头', '立即危险'])(
    '红色安全路径覆盖：%s',
    (term) => {
      expect(skill).toContain(term);
    },
  );

  it.each(['医疗', '法律', '税务', '移民', '合同', '大额财务', '重大债务'])(
    '专业边界路径覆盖：%s',
    (term) => {
      expect(skill).toContain(term);
    },
  );

  it.each(['决策问题', '可选方案', '约束条件', '代价后果', '可逆程度', '证据材料', '决策期限'])(
    '信息采集包含：%s',
    (field) => {
      expect(skill).toContain(field);
    },
  );

  it.each([
    '现实资源官',
    '长期主义者',
    '反脆弱冒险派',
    '风险审计员',
    '情绪诚实者',
    '关系与伦理观察者',
    '行动设计师',
  ])('定义成员：%s', (member) => {
    expect(skill).toContain(member);
  });

  it.each(['立场', '支持证据', '反对证据', '最大风险', '可逆性', '投票'])(
    '要求成员字段：%s',
    (field) => {
      expect(skill).toContain(`**${field}**`);
    },
  );

  it.each(['立即行动', '准备条件', '继续等待', '暂不执行', '小步验证'])('定义投票：%s', (vote) => {
    expect(skill).toContain(vote);
  });

  it('要求严肃反对意见', () => {
    expect(skill).toContain('至少一个成员必须提出严肃反对意见');
  });

  it('澄清问题最多三个', () => {
    expect(skill).toContain('最多问 3 个问题');
  });

  it('保留用户自主权', () => {
    expect(skill).toContain('委员会只建议，用户做决定');
  });

  it('禁止假装调用外部服务', () => {
    expect(skill).toContain('假装调用了外部服务');
  });
});
