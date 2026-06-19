import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

import { root } from './helpers';

describe('中文校验与示例渲染脚本', () => {
  it('技能校验脚本通过', () => {
    const output = execFileSync('node', ['scripts/validate-skill.mjs'], {
      cwd: root,
      encoding: 'utf8',
    });
    expect(output).toContain('技能校验通过');
  });

  it('示例渲染脚本写入输出文件', () => {
    execFileSync('node', ['scripts/render-sample.mjs'], { cwd: root, encoding: 'utf8' });
    expect(existsSync(join(root, 'dist', 'sample-output.md'))).toBe(true);
  });

  it('渲染示例包含中文标题', () => {
    execFileSync('node', ['scripts/render-sample.mjs'], { cwd: root, encoding: 'utf8' });
    const sample = readFileSync(join(root, 'dist', 'sample-output.md'), 'utf8');
    expect(sample).toContain('# 平行自我委员会示例');
  });

  it.each(['现实资源官', '长期主义者', '反脆弱冒险派', '风险审计员', '情绪诚实者', '行动设计师'])(
    '渲染示例包含成员：%s',
    (member) => {
      execFileSync('node', ['scripts/render-sample.mjs'], { cwd: root, encoding: 'utf8' });
      const sample = readFileSync(join(root, 'dist', 'sample-output.md'), 'utf8');
      expect(sample).toContain(member);
    },
  );

  it.each(['投票统计', '委员会决议', '反转条件', '24 小时最小行动', '回滚方案'])(
    '渲染示例包含章节：%s',
    (section) => {
      execFileSync('node', ['scripts/render-sample.mjs'], { cwd: root, encoding: 'utf8' });
      const sample = readFileSync(join(root, 'dist', 'sample-output.md'), 'utf8');
      expect(sample).toContain(section);
    },
  );
});
