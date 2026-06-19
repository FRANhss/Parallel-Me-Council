import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const skillPath = join(root, 'skills', 'parallel-me-council', 'SKILL.md');
const text = readFileSync(skillPath, 'utf8');

function fail(message) {
  console.error(`技能校验失败：${message}`);
  process.exit(1);
}

const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/u.exec(text);
if (!match) fail('缺少 YAML frontmatter');

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
  if (!frontmatter.includes(key)) fail(`缺少元数据字段 ${key}`);
}

const requiredBodyPhrases = [
  '安全闸门',
  '红色安全路径',
  '专业边界路径',
  '信息采集',
  '委员会成员',
  '成员发言格式',
  '投票含义',
  '最终决策协议',
  '24 小时最小行动',
  '7 天验证计划',
  '回滚方案',
];

for (const phrase of requiredBodyPhrases) {
  if (!body.includes(phrase)) fail(`缺少正文短语 ${phrase}`);
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
  if (text.includes(term)) fail(`包含已移除旧应用词汇 ${term}`);
}

console.log('技能校验通过。');
