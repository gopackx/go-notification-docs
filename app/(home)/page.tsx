import Link from 'next/link';

type Feature = {
  title: string;
  body: string;
  href: string;
};

const features: Feature[] = [
  {
    title: '24 Built-in Drivers',
    body: 'Email, WhatsApp, SMS, Slack, Telegram, Discord, Teams, FCM, Database, Webhook.',
    href: '/docs/channels/overview',
  },
  {
    title: 'Async by Default',
    body: 'Goroutine worker pool with retry, exponential backoff, and rate limiting.',
    href: '/docs/features/async',
  },
  {
    title: 'Fluent Message Builders',
    body: 'Build emails, WhatsApp messages, push notifications with a clean chainable API.',
    href: '/docs/features/message-builders',
  },
  {
    title: 'Indonesia-Ready',
    body: 'First-class support for Fonnte, Wablas, WAHA, and Zenziva alongside global providers.',
    href: '/docs/channels/whatsapp/overview',
  },
  {
    title: 'In-App Notifications',
    body: 'Database channel with unread count, mark as read, and query API built-in.',
    href: '/docs/channels/database',
  },
  {
    title: 'Auto Redaction',
    body: 'Sensitive data in logs automatically redacted. API keys never exposed.',
    href: '/docs/features/security',
  },
  {
    title: 'Multi-Database',
    body: 'Database channel supports PostgreSQL, MySQL, and SQLite.',
    href: '/docs/channels/database',
  },
  {
    title: 'Laravel-Inspired',
    body: 'Via(), ToMail(), ToWhatsApp() — familiar patterns from the Laravel ecosystem.',
    href: '/docs/getting-started/quick-start',
  },
  {
    title: 'Zero SDK Dependencies',
    body: 'All drivers use raw HTTP. No Twilio SDK, no AWS SDK. Minimal footprint.',
    href: '/docs/features/security',
  },
];

function BellIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-12 w-12 text-fd-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 1 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z" />
      <path d="M10 21a2 2 0 0 0 4 0" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b border-fd-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.fd-primary/15),transparent_60%)]"
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center sm:py-28">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-fd-border bg-fd-card shadow-sm">
            <BellIcon />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            GO NOTIFICATION
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-fd-muted-foreground sm:text-xl">
            One API. Every channel. Send notifications via email, WhatsApp, SMS,
            Slack, Telegram, push, and more — with a single interface.
          </p>

          <div className="mt-8 w-full max-w-xl">
            <pre className="overflow-x-auto rounded-lg border border-fd-border bg-fd-card px-4 py-3 text-left text-sm">
              <code className="text-fd-foreground">
                <span className="text-fd-muted-foreground">$ </span>
                go get github.com/gopackx/go-notification
              </code>
            </pre>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs"
              className="inline-flex h-11 items-center rounded-md bg-fd-primary px-6 text-sm font-medium text-fd-primary-foreground transition hover:opacity-90"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/gopackx/go-notification"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-md border border-fd-border bg-fd-card px-6 text-sm font-medium transition hover:bg-fd-accent"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Everything you need to ship notifications
          </h2>
          <p className="mt-3 text-fd-muted-foreground">
            Designed for Go services that need to reach users wherever they are.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="group rounded-lg border border-fd-border bg-fd-card p-6 transition hover:border-fd-primary/60 hover:bg-fd-accent"
            >
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">{f.body}</p>
              <span className="mt-4 inline-flex items-center text-xs font-medium text-fd-primary opacity-80 group-hover:opacity-100">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-auto border-t border-fd-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-8 text-sm text-fd-muted-foreground sm:flex-row sm:justify-between">
          <p>GO NOTIFICATION © 2026</p>
          <p className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/gopackx/go-notification"
              className="hover:text-fd-foreground"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span aria-hidden>|</span>
            <a
              href="https://github.com/gopackx/go-notification/blob/main/LICENSE"
              className="hover:text-fd-foreground"
              target="_blank"
              rel="noreferrer"
            >
              MIT License
            </a>
          </p>
          <p>Made by Andrian Prasetya</p>
        </div>
      </footer>
    </main>
  );
}
