import { describe, expect, it } from 'vitest';

import { headings, readProtocol } from './helpers';

const protocol = readProtocol();
const protocolHeadings = headings(protocol);

describe('decision protocol reference', () => {
  it.each([
    'Core principles',
    'Intake fields',
    'Decision scoring rubric',
    'Vote mapping',
    'Final output checklist',
  ])('contains section %s', (heading) => {
    expect(protocolHeadings).toContain(heading);
  });

  it.each([
    'Evidence before drama',
    'Tension is required',
    'Reversibility matters',
    'Action creates information',
    'Safety overrides performance',
  ])('documents principle %s', (principle) => {
    expect(protocol).toContain(principle);
  });

  it.each([
    'Evidence quality',
    'Reversibility',
    'Downside severity',
    'Optionality',
    'Time pressure',
  ])('scores dimension %s', (dimension) => {
    expect(protocol).toContain(dimension);
  });

  it.each(['act_now', 'explore', 'prepare', 'wait', 'reject'])('maps vote %s', (vote) => {
    expect(protocol).toContain(vote);
  });

  it.each([
    'At least five member cards',
    'At least one serious counterargument',
    'Vote tally',
    'Confidence level',
    'Reversal triggers',
    '24-hour action',
    '7-day validation plan',
    'Rollback plan',
  ])('final checklist includes %s', (item) => {
    expect(protocol).toContain(item);
  });
});
