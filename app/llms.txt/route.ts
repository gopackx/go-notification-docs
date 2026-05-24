import { source } from '@/lib/source';

export const revalidate = false;

export function GET() {
  const pages = source.getPages();
  const lines = pages.map(
    (page) =>
      `- [${page.data.title}](${page.url})${
        page.data.description ? `: ${page.data.description}` : ''
      }`,
  );

  const content = [
    '# go-notification',
    '',
    'Notification library for Go — multi-channel (email, SMS, chat, WhatsApp, push, webhook, database) message delivery.',
    '',
    '## Docs',
    '',
    ...lines,
  ].join('\n');

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
