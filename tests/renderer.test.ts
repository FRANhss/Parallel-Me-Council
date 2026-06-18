import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

import { root } from './helpers';

describe('validation and sample renderer scripts', () => {
  it('validate-skill script passes', () => {
    const output = execFileSync('node', ['scripts/validate-skill.mjs'], {
      cwd: root,
      encoding: 'utf8',
    });
    expect(output).toContain('Skill validation passed');
  });

  it('render-sample script writes sample output', () => {
    execFileSync('node', ['scripts/render-sample.mjs'], { cwd: root, encoding: 'utf8' });
    expect(existsSync(join(root, 'dist', 'sample-output.md'))).toBe(true);
  });

  it('rendered sample contains council heading', () => {
    execFileSync('node', ['scripts/render-sample.mjs'], { cwd: root, encoding: 'utf8' });
    const sample = readFileSync(join(root, 'dist', 'sample-output.md'), 'utf8');
    expect(sample).toContain('# 平行自我委员会 Sample');
  });

  it.each([
    'Reality Treasurer',
    'Long-Range Self',
    'Antifragile Explorer',
    'Risk Auditor',
    'Emotional Witness',
    'Action Designer',
  ])('rendered sample includes member %s', (member) => {
    execFileSync('node', ['scripts/render-sample.mjs'], { cwd: root, encoding: 'utf8' });
    const sample = readFileSync(join(root, 'dist', 'sample-output.md'), 'utf8');
    expect(sample).toContain(member);
  });

  it.each([
    'Vote Tally',
    'Council Verdict',
    'Reversal Triggers',
    '24-Hour Minimum Action',
    'Rollback Plan',
  ])('rendered sample includes section %s', (section) => {
    execFileSync('node', ['scripts/render-sample.mjs'], { cwd: root, encoding: 'utf8' });
    const sample = readFileSync(join(root, 'dist', 'sample-output.md'), 'utf8');
    expect(sample).toContain(section);
  });
});
