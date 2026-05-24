'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const links = [
  { label: 'Docs', href: '/docs' },
  { label: 'API', href: '/docs/api-reference/core' },
  { label: 'Drivers', href: '/docs/channels/overview' },
  { label: 'Examples', href: '/docs/examples/basic' },
  {
    label: 'GitHub',
    href: 'https://github.com/gopackx/go-notification',
    external: true,
  },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </>
      ) : (
        <>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </>
      )}
    </svg>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-lg border transition hover:opacity-80"
        style={{
          backgroundColor: 'var(--site-elevated)',
          borderColor: 'var(--site-border-default)',
          color: 'var(--site-text-secondary)',
        }}
      >
        <MenuIcon open={open} />
      </button>

      {open && (
        <div
          className="fixed inset-x-0 top-[64px] bottom-0 z-40 flex flex-col gap-2 border-t px-5 py-6"
          style={{
            backgroundColor: 'var(--site-bg)',
            borderColor: 'var(--site-border-subtle)',
          }}
        >
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noreferrer' : undefined}
                onClick={() => setOpen(false)}
                className="border-b py-4 text-base font-medium transition hover:opacity-70"
                style={{
                  color: 'var(--site-text-primary)',
                  borderColor: 'var(--site-border-subtle)',
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex items-center justify-between">
            <span
              className="text-xs font-semibold tracking-[0.08em]"
              style={{
                color: 'var(--site-text-muted)',
                fontFamily: 'var(--font-jetbrains-mono)',
              }}
            >
              THEME
            </span>
            <button
              type="button"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition hover:opacity-80"
              style={{
                backgroundColor: 'var(--site-elevated)',
                borderColor: 'var(--site-border-default)',
                color: 'var(--site-text-primary)',
              }}
            >
              {mounted ? (isDark ? 'Switch to light' : 'Switch to dark') : 'Theme'}
            </button>
          </div>

          <Link
            href="/docs"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 rounded-[10px] py-3 text-[15px] font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: 'var(--site-accent)' }}
          >
            Get Started
          </Link>
          <a
            href="https://github.com/gopackx/go-notification"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-[10px] border py-3 text-[15px] font-semibold transition hover:opacity-90"
            style={{
              backgroundColor: 'var(--site-elevated)',
              borderColor: 'var(--site-border-default)',
              color: 'var(--site-text-primary)',
            }}
          >
            View on GitHub
          </a>
        </div>
      )}
    </>
  );
}
