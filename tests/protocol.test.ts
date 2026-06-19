import { describe, expect, it } from 'vitest';

import { headings, readProtocol } from './helpers';

const protocol = readProtocol();
const protocolHeadings = headings(protocol);

describe('中文决策协议参考', () => {
  it.each(['核心原则', '信息采集字段', '决策评分表', '投票映射', '最终输出检查表'])(
    '包含章节：%s',
    (heading) => {
      expect(protocolHeadings).toContain(heading);
    },
  );

  it.each(['证据先于戏剧', '必须存在张力', '可逆性决定证据门槛', '行动创造信息', '安全高于表现'])(
    '记录原则：%s',
    (principle) => {
      expect(protocol).toContain(principle);
    },
  );

  it.each(['证据质量', '可逆程度', '下行风险', '选择空间', '时间压力'])(
    '评分维度：%s',
    (dimension) => {
      expect(protocol).toContain(dimension);
    },
  );

  it.each(['立即行动', '小步验证', '准备条件', '继续等待', '暂不执行'])('映射投票：%s', (vote) => {
    expect(protocol).toContain(vote);
  });

  it.each([
    '至少五个成员发言',
    '至少一个严肃反对意见',
    '投票统计',
    '信心等级',
    '反转条件',
    '24 小时行动',
    '7 天验证计划',
    '回滚方案',
    '三句话总结',
  ])('最终检查包含：%s', (item) => {
    expect(protocol).toContain(item);
  });
});
