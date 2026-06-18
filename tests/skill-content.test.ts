import { describe, expect, it } from 'vitest';

import { headings, parseSkill, readSkill } from './helpers';

const skill = readSkill();
const parsed = parseSkill(skill);
const skillHeadings = headings(parsed.body);

describe('skill content', () => {
  it.each([
    'Purpose',
    'When to use',
    'Safety gate',
    'Intake protocol',
    'Council members',
    'Required council card format',
    'Vote definitions',
    'Final decision protocol',
    'Quality rules',
    'Output template',
    'Failure modes to avoid',
  ])('contains heading %s', (heading) => {
    expect(skillHeadings).toContain(heading);
  });

  it.each([
    'self-harm',
    'violence',
    'abuse',
    'immediate danger',
    'severe medical symptoms',
    'suicidal thoughts',
  ])('red safety path covers %s', (term) => {
    expect(skill).toContain(term);
  });

  it.each(['medical', 'legal', 'tax', 'immigration', 'contractual', 'major financial'])(
    'professional-boundary path covers %s',
    (term) => {
      expect(skill).toContain(term);
    },
  );

  it.each([
    'Decision question',
    'Options',
    'Constraints',
    'Stakes',
    'Reversibility',
    'Evidence',
    'Deadline',
  ])('intake requires %s', (field) => {
    expect(skill).toContain(field);
  });

  it.each([
    'Reality Treasurer',
    'Long-Range Self',
    'Antifragile Explorer',
    'Risk Auditor',
    'Emotional Witness',
    'Relationship and Ethics Observer',
    'Action Designer',
  ])('defines member %s', (member) => {
    expect(skill).toContain(member);
  });

  it.each([
    'Position',
    'Evidence For',
    'Evidence Against',
    'Largest Risk',
    'Reversibility',
    'Vote',
  ])('requires council card field %s', (field) => {
    expect(skill).toContain(`**${field}**`);
  });

  it.each(['act_now', 'prepare', 'wait', 'reject', 'explore'])('defines vote %s', (vote) => {
    expect(skill).toContain(vote);
  });

  it('requires a serious counterargument', () => {
    expect(skill).toContain('At least one member must provide a serious counterargument');
  });

  it('limits clarification questions to three', () => {
    expect(skill).toContain('Ask at most three clarifying questions');
  });

  it('preserves user agency', () => {
    expect(skill).toContain('The council recommends; the user decides');
  });

  it('rejects fake external behavior', () => {
    expect(skill).toContain('Pretending to have called external services');
  });
});
