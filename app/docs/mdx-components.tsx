import { isValidElement, type ReactElement, type ReactNode } from 'react';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';

const filenameByLang: Record<string, string> = {
  go: 'main.go',
  bash: 'terminal.sh',
  shell: 'terminal.sh',
  sh: 'terminal.sh',
  zsh: 'terminal.sh',
  ts: 'index.ts',
  typescript: 'index.ts',
  tsx: 'index.tsx',
  js: 'index.js',
  javascript: 'index.js',
  jsx: 'index.jsx',
  json: 'config.json',
  yaml: 'config.yaml',
  yml: 'config.yaml',
  toml: 'config.toml',
  sql: 'query.sql',
  py: 'main.py',
  python: 'main.py',
  rb: 'app.rb',
  ruby: 'app.rb',
  rust: 'main.rs',
  rs: 'main.rs',
  java: 'Main.java',
  kotlin: 'main.kt',
  swift: 'main.swift',
  html: 'index.html',
  css: 'styles.css',
  scss: 'styles.scss',
  dockerfile: 'Dockerfile',
  docker: 'Dockerfile',
  env: '.env',
  ini: 'config.ini',
  xml: 'config.xml',
  md: 'README.md',
  markdown: 'README.md',
  diff: 'changes.diff',
  patch: 'changes.patch',
  graphql: 'schema.graphql',
  proto: 'schema.proto',
};

function extractLanguage(node: ReactNode): string {
  if (!node) return '';
  if (Array.isArray(node)) {
    for (const child of node) {
      const found = extractLanguage(child);
      if (found) return found;
    }
    return '';
  }
  if (!isValidElement(node)) return '';
  const props = (node as ReactElement<{ className?: string; children?: ReactNode }>).props;
  const cls = props?.className ?? '';
  const match = /language-([a-z0-9+-]+)/i.exec(cls);
  if (match) return match[1].toLowerCase();
  if (props?.children) return extractLanguage(props.children);
  return '';
}

type PreProps = {
  title?: string;
  children?: ReactNode;
  className?: string;
} & Record<string, unknown>;

function CustomPre({ title, children, ...rest }: PreProps) {
  const lang = extractLanguage(children);
  const resolvedTitle = title ?? filenameByLang[lang] ?? (lang ? `snippet.${lang}` : 'snippet');

  return (
    <CodeBlock
      title={resolvedTitle}
      data-language={lang}
      data-lang-label={lang || 'text'}
      {...rest}
    >
      <Pre>{children}</Pre>
    </CodeBlock>
  );
}

export const mdxComponents = {
  ...defaultMdxComponents,
  pre: CustomPre,
};
