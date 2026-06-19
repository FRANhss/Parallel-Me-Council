import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

import { root } from './helpers';

function collectTextFiles(directory: string): string[] {
  const ignored = new Set(['.git', 'node_modules', 'coverage', 'dist']);
  const results: string[] = [];
  for (const entry of readdirSync(directory)) {
    if (ignored.has(entry)) continue;
    const fullPath = join(directory, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      results.push(...collectTextFiles(fullPath));
      continue;
    }
    if (/\.(md|json|ts|mjs|cjs|js|yml|yaml|txt)$/u.test(entry)) results.push(fullPath);
  }
  return results;
}

function repositoryText(): string {
  return collectTextFiles(root)
    .map((file) => readFileSync(file, 'utf8'))
    .join('\n');
}

describe('仓库首页与清理状态', () => {
  it.each(['src', 'src-tauri', 'index.html', 'vite.config.ts', 'Python'])(
    'does not keep old path %s',
    (path) => {
      expect(existsSync(join(root, path))).toBe(false);
    },
  );

  const removedAppTerms = [
    ['Tau', 'ri'].join(''),
    ['Rea', 'ct'].join(''),
    ['Vi', 'te'].join(''),
    ['local', 'Storage'].join(''),
    ['测试', '连接'].join(''),
    ['接口', '设置'].join(''),
    ['gpt', '-4o-mini'].join(''),
  ];

  it.each(removedAppTerms)('does not contain old app term %s', (term) => {
    expect(repositoryText()).not.toContain(term);
  });

  it('does not contain the leaked token prefix', () => {
    const tokenPrefix = ['gh', 'p_'].join('');
    expect(repositoryText()).not.toContain(tokenPrefix);
  });

  it('does not contain a fake connection implementation from the old app', () => {
    const fakeConnectionFunction = ['test', 'Api', 'Connection'].join('');
    expect(repositoryText()).not.toContain(fakeConnectionFunction);
  });

  it('keeps the MIT license', () => {
    expect(existsSync(join(root, 'LICENSE'))).toBe(true);
  });

  it('ships the skill directory', () => {
    expect(existsSync(join(root, 'skills', 'parallel-me-council', 'SKILL.md'))).toBe(true);
  });

  it('README 使用视觉封面', () => {
    const readme = readFileSync(join(root, 'README.md'), 'utf8');
    expect(readme).toContain('assets/parallel-me-council-cover.svg');
  });

  it('README 大量使用中文产品表达', () => {
    const readme = readFileSync(join(root, 'README.md'), 'utf8');
    expect(readme).toContain('把纠结变成一场有证据、有反证、有回滚线的内部董事会');
    expect(readme).toContain('委员会成员');
    expect(readme).toContain('输出长什么样');
  });

  it('仓库包含中文 SVG 封面', () => {
    const cover = readFileSync(join(root, 'assets', 'parallel-me-council-cover.svg'), 'utf8');
    expect(cover).toContain('平行自我委员会');
    expect(cover).toContain('现实资源官');
  });
});
