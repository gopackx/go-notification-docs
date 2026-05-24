import { readFile } from 'node:fs/promises';
import type { InferPageType } from 'fumadocs-core/source';
import type { source } from '@/lib/source';

// Serve the raw MDX body (frontmatter stripped) with a title/description
// header so an LLM gets clean, self-contained markdown for a single page.
export async function getLLMText(page: InferPageType<typeof source>) {
  const raw = await readFile(page.absolutePath, 'utf-8');
  const body = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '').trim();

  const header = [
    `# ${page.data.title}`,
    page.data.description ? `\n${page.data.description}` : '',
    `\nSource: ${page.url}`,
  ].join('');

  return `${header}\n\n${body}\n`;
}
