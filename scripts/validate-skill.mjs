import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const skillPath = join(root, 'skills', 'parallel-me-council', 'SKILL.md');
const text = readFileSync(skillPath, 'utf8');

function fail(message) {
  console.error(`Skill validation failed: ${message}`);
  process.exit(1);
}

const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/u.exec(text);
if (!match) fail('missing YAML frontmatter');

const frontmatter = match[1];
const body = match[2];
const requiredMetadata = [
  'name:',
  'description:',
  'version:',
  'triggers:',
  'safety_level:',
  'tags:',
];
for (const key of requiredMetadata) {
  if (!frontmatter.includes(key)) fail(`missing metadata field ${key}`);
}

const requiredBodyPhrases = [
  'Safety gate',
  'Red safety path',
  'Professional-boundary path',
  'Intake protocol',
  'Council members',
  'Required council card format',
  'Vote definitions',
  'Final decision protocol',
  '24-Hour Minimum Action',
  '7-Day Validation Plan',
  'Rollback Plan',
];

for (const phrase of requiredBodyPhrases) {
  if (!body.includes(phrase)) fail(`missing body phrase ${phrase}`);
}

const forbidden = [
  ['Tau', 'ri'].join(''),
  ['Vi', 'te'].join(''),
  ['Rea', 'ct'].join(''),
  ['local', 'Storage'].join(''),
  ['测试', '连接'].join(''),
  ['接口', '设置'].join(''),
];
for (const term of forbidden) {
  if (text.includes(term)) fail(`contains removed app term ${term}`);
}

console.log('Skill validation passed.');
