import { describe, expect, it } from 'vitest';

import { parseSkill, readSkill } from './helpers';

describe('skill metadata', () => {
  const parsed = parseSkill();

  it('has YAML frontmatter delimiters', () => {
    expect(readSkill().startsWith('---\n')).toBe(true);
  });

  it('uses the expected skill name', () => {
    expect(parsed.metadata.name).toBe('parallel-me-council');
  });

  it('has a meaningful description', () => {
    expect(String(parsed.metadata.description)).toContain('evidence-based council');
  });

  it('declares a semantic version', () => {
    expect(parsed.metadata.version).toMatch(/^\d+\.\d+\.\d+$/u);
  });

  it('sets a careful safety level', () => {
    expect(parsed.metadata.safety_level).toBe('careful');
  });

  it('declares trigger phrases as a list', () => {
    expect(Array.isArray(parsed.metadata.triggers)).toBe(true);
  });

  it('contains at least six trigger phrases', () => {
    expect(parsed.metadata.triggers).toHaveLength(6);
  });

  it.each(['我很纠结', '我要不要', '帮我做决定', '平行自我委员会', 'decision council'])(
    'includes trigger %s',
    (trigger) => {
      expect(parsed.metadata.triggers).toContain(trigger);
    },
  );

  it('declares tags as a list', () => {
    expect(Array.isArray(parsed.metadata.tags)).toBe(true);
  });

  it.each(['decision-making', 'evidence', 'risk', 'planning', 'reflection'])(
    'includes tag %s',
    (tag) => {
      expect(parsed.metadata.tags).toContain(tag);
    },
  );
});
