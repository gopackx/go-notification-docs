'use client';

import { useEffect, useRef, useState } from 'react';

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function PageActions({
  markdownUrl,
  pageUrl,
}: {
  markdownUrl: string;
  pageUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onClick(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  async function copyMarkdown() {
    try {
      const res = await fetch(markdownUrl);
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard or fetch failed — silently ignore
    }
  }

  const absoluteMarkdownUrl =
    typeof window !== 'undefined'
      ? new URL(markdownUrl, window.location.origin).toString()
      : markdownUrl;

  const prompt = `Read ${absoluteMarkdownUrl} — I want to ask questions about this go-notification documentation page.`;
  const chatgptUrl = `https://chatgpt.com/?hint=search&q=${encodeURIComponent(prompt)}`;
  const claudeUrl = `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;

  const buttonClass =
    'inline-flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-secondary px-2.5 py-1.5 text-xs font-medium text-fd-secondary-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground';

  return (
    <div className="not-prose mb-6 flex items-center gap-2" ref={containerRef}>
      <button type="button" onClick={copyMarkdown} className={buttonClass}>
        {copied ? <CheckIcon /> : <CopyIcon />}
        {copied ? 'Copied' : 'Copy as Markdown'}
      </button>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-haspopup="menu"
          aria-expanded={open}
          className={buttonClass}
        >
          Open in LLM
          <ChevronIcon
            className={`transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>

        {open ? (
          <div
            role="menu"
            className="absolute right-0 z-20 mt-1.5 w-56 overflow-hidden rounded-lg border border-fd-border bg-fd-popover p-1 text-sm text-fd-popover-foreground shadow-lg"
          >
            <a
              role="menuitem"
              href={markdownUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-md px-2.5 py-2 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              <ExternalIcon className="text-fd-muted-foreground" />
              View raw Markdown
            </a>
            <a
              role="menuitem"
              href={chatgptUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-md px-2.5 py-2 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              <ExternalIcon className="text-fd-muted-foreground" />
              Open in ChatGPT
            </a>
            <a
              role="menuitem"
              href={claudeUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-md px-2.5 py-2 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              <ExternalIcon className="text-fd-muted-foreground" />
              Open in Claude
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
