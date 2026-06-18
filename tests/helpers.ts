import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

export const root = process.cwd();
export const skillDir = join(root, 'skills', 'parallel-me-council');
export const skillPath = join(skillDir, 'SKILL.md');
export const protocolPath = join(skillDir, 'references', 'decision-protocol.md');
export const examplesDir = join(skillDir, 'examples');

export function readSkill(): string {
  return readFileSync(skillPath, 'utf8');
}

export function readProtocol(): string {
  return readFileSync(protocolPath, 'utf8');
}

export function readExample(name: string): string {
  return readFileSync(join(examplesDir, name), 'utf8');
}

export function listExamples(): string[] {
  return readdirSync(examplesDir)
    .filter((file) => file.endsWith('.md'))
    .sort();
}

export type ParsedSkill = {
  frontmatter: string;
  body: string;
  metadata: Record<string, string | string[]>;
};

export function parseSkill(text = readSkill()): ParsedSkill {
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/u.exec(text);
  const frontmatter = match?.[1];
  const body = match?.[2];
  if (!frontmatter || body === undefined) throw new Error('Missing frontmatter');

  const metadata: Record<string, string | string[]> = {};
  const lines = frontmatter.split('\n');
  let currentListKey = '';
  for (const line of lines) {
    const listItem = /^\s+-\s+(.+)$/u.exec(line);
    const listValue = listItem?.[1];
    if (listValue && currentListKey) {
      const existing = metadata[currentListKey];
      metadata[currentListKey] = [...(Array.isArray(existing) ? existing : []), listValue];
      continue;
    }
    const field = /^(\w+):\s*(.*)$/u.exec(line);
    const key = field?.[1];
    const value = field?.[2];
    if (key && value !== undefined) {
      currentListKey = value ? '' : key;
      metadata[key] = value || [];
    }
  }
  return { frontmatter, body, metadata };
}

export function headings(markdown: string): string[] {
  return markdown
    .split('\n')
    .filter((line) => line.startsWith('#'))
    .map((line) => line.replace(/^#+\s*/u, '').trim());
}
