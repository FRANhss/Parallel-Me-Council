import { describe, expect, it } from 'vitest';

import { listExamples, readExample } from './helpers';

const examples = listExamples();
const exampleCases = examples.map((file) => [file] as const);

describe('skill examples', () => {
  it('ships exactly three examples', () => {
    expect(examples).toEqual(['career.md', 'money.md', 'relationship.md']);
  });

  it.each(exampleCases)('%s has a user prompt section', (file) => {
    expect(readExample(file)).toContain('## User prompt');
  });

  it.each(exampleCases)('%s has expected behavior section', (file) => {
    expect(readExample(file)).toContain('## Expected skill behavior');
  });

  it.each(exampleCases)('%s has expected verdict shape section', (file) => {
    expect(readExample(file)).toContain('## Expected verdict shape');
  });

  it.each([
    ['career.md', 'runway'],
    ['career.md', 'paid commitment'],
    ['relationship.md', 'boundary'],
    ['relationship.md', 'observe'],
    ['money.md', 'professional-boundary path'],
    ['money.md', 'written terms'],
  ] as const)('%s includes scenario-specific cue %s', (file, cue) => {
    expect(readExample(file)).toContain(cue);
  });

  it.each(exampleCases)('%s avoids fake certainty', (file) => {
    expect(readExample(file).toLowerCase()).not.toMatch(/guaranteed\s+returns|will\s+guarantee/u);
  });

  it('money example does not give investment advice', () => {
    const money = readExample('money.md');
    expect(money).toContain('Do not give investment advice');
  });

  it('career example does not recommend blind resignation', () => {
    const career = readExample('career.md');
    expect(career).toContain('before full resignation');
  });

  it('relationship example separates facts from interpretation', () => {
    const relationship = readExample('relationship.md');
    expect(relationship).toContain('Separate facts from interpretation');
  });
});
