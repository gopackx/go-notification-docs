import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const Icon = ({ children, ...props }: IconProps & { children: ReactNode }) => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {children}
  </svg>
);

const SparklesIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </Icon>
);
const ArrowRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Icon>
);
const ArrowUpRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </Icon>
);
const GitHubIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </Icon>
);
const CopyIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect width={14} height={14} x={8} y={8} rx={2} />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </Icon>
);
const FileCode = (p: IconProps) => (
  <Icon {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m9 18 3-3-3-3" />
    <path d="m15 12 3 3-3 3" />
  </Icon>
);
const SendIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </Icon>
);
const LayersIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m12 2 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  </Icon>
);
const ZapIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
  </Icon>
);
const RepeatIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m17 2 4 4-4 4" />
    <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
    <path d="m7 22-4-4 4-4" />
    <path d="M21 13v1a4 4 0 0 1-4 4H3" />
  </Icon>
);
const GaugeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m12 14 4-4" />
    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
  </Icon>
);
const CodeIcon = (p: IconProps) => (
  <Icon {...p}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </Icon>
);
const ShieldCheck = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);
const RocketIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </Icon>
);
const BookOpen = (p: IconProps) => (
  <Icon {...p}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z" />
  </Icon>
);
const GitPR = (p: IconProps) => (
  <Icon {...p}>
    <circle cx={18} cy={18} r={3} />
    <circle cx={6} cy={6} r={3} />
    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
    <line x1={6} x2={6} y1={9} y2={21} />
  </Icon>
);
const MailIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect width={20} height={16} x={2} y={4} rx={2} />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Icon>
);
const WhatsApp = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </Icon>
);
const SMSIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Icon>
);
const ChatIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </Icon>
);
const BellIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10 21a2 2 0 0 0 4 0" />
  </Icon>
);
const DatabaseIcon = (p: IconProps) => (
  <Icon {...p}>
    <ellipse cx={12} cy={5} rx={9} ry={3} />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </Icon>
);
const WebhookIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
    <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
    <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
  </Icon>
);
const PuzzleIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M19.5 13.5h-2a2 2 0 1 1 0-3h2v-3a1.5 1.5 0 0 0-1.5-1.5h-3a2 2 0 1 0-3 0H8a1.5 1.5 0 0 0-1.5 1.5v2.5h2a2 2 0 1 1 0 3h-2V18a1.5 1.5 0 0 0 1.5 1.5h3a2 2 0 1 1 3 0H18a1.5 1.5 0 0 0 1.5-1.5z" />
  </Icon>
);
const RssIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 11a9 9 0 0 1 9 9" />
    <path d="M4 4a16 16 0 0 1 16 16" />
    <circle cx={5} cy={19} r={1} />
  </Icon>
);
const TwitterIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </Icon>
);

const features = [
  {
    icon: LayersIcon,
    title: 'Multi-channel by design',
    body: 'Email, WhatsApp, SMS, Chat (Slack/Telegram/Discord/Teams), Push, Database, and Webhook — fan a single Notification across all of them.',
    href: '/docs/channels/overview',
  },
  {
    icon: ZapIcon,
    title: 'Async by default',
    body: 'A worker pool dispatches jobs concurrently with backpressure. Send returns instantly while delivery happens off the request path.',
    href: '/docs/features/async',
  },
  {
    icon: RepeatIcon,
    title: 'Retries with backoff',
    body: 'Configurable max attempts and exponential backoff per channel. Transient errors heal themselves; permanent ones surface fast.',
    href: '/docs/features/async',
  },
  {
    icon: GaugeIcon,
    title: 'Rate limiting built-in',
    body: 'Token-bucket limiter per channel and per provider. Stay inside SendGrid 100/s or Twilio MPS without writing your own scheduler.',
    href: '/docs/features/async',
  },
  {
    icon: CodeIcon,
    title: 'Typed message builders',
    body: 'Compose Mail, WhatsApp, SMS, Slack messages with strongly-typed builders. Compile-time errors instead of runtime YAML surprises.',
    href: '/docs/features/message-builders',
  },
  {
    icon: ShieldCheck,
    title: 'Zero external SDK deps',
    body: 'Every driver speaks plain HTTP via stdlib net/http. Tiny binaries, predictable upgrades, no transitive vendor surprises.',
    href: '/docs/features/security',
  },
];

const channels = [
  { icon: MailIcon, title: 'Email', body: 'SMTP · Mailgun · SendGrid · SES · Resend · Postmark', href: '/docs/channels/email/overview' },
  { icon: WhatsApp, title: 'WhatsApp', body: 'WAHA · Fonnte · Wablas · Twilio · Meta Cloud', href: '/docs/channels/whatsapp/overview' },
  { icon: SMSIcon, title: 'SMS', body: 'Twilio · Zenziva · Vonage · AWS SNS', href: '/docs/channels/sms/overview' },
  { icon: ChatIcon, title: 'Chat', body: 'Slack · Telegram · Discord · MS Teams', href: '/docs/channels/chat/overview' },
  { icon: BellIcon, title: 'Push', body: 'Firebase FCM v1 (HTTP, OAuth2 server keys)', href: '/docs/channels/push' },
  { icon: DatabaseIcon, title: 'Database', body: 'In-app inbox; persists notifications for any storage backend', href: '/docs/channels/database' },
  { icon: WebhookIcon, title: 'Webhook', body: 'Generic POST to any URL with custom headers and JSON body', href: '/docs/channels/webhook' },
  {
    icon: PuzzleIcon,
    title: 'Custom driver',
    body: 'Implement the Channel interface to wire any in-house service',
    bordered: true,
    href: '/docs/channels/overview',
  },
];

const quickLinks = [
  {
    icon: RocketIcon,
    title: 'Quickstart',
    body: 'Install, configure, and ship your first notification in 5 minutes.',
    href: '/docs/getting-started/quick-start',
  },
  {
    icon: LayersIcon,
    title: 'All 24 drivers',
    body: 'Per-provider config, auth modes, throughput limits, and gotchas.',
    href: '/docs/channels/overview',
  },
  {
    icon: BookOpen,
    title: 'API reference',
    body: 'Notifiable, Notification, Channel, and the Send pipeline.',
    href: '/docs',
  },
  {
    icon: GitPR,
    title: 'Recipes',
    body: 'Verification codes, broadcast, fan-out, batching, idempotency.',
    href: '/docs',
  },
];

function TrafficDots() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
    </div>
  );
}

function HeroTerminal() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--gn-border-default)] bg-[var(--gn-bg-surface)] shadow-[0_4px_24px_rgba(0,0,0,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--gn-border-subtle)] bg-[var(--gn-bg-elevated)] px-4 py-3">
        <div className="flex items-center gap-2">
          <TrafficDots />
          <FileCode className="ml-2 h-3.5 w-3.5 text-[var(--gn-text-muted)]" />
          <span className="font-mono text-xs text-[var(--gn-text-secondary)]">main.go</span>
        </div>
      </div>
      <div className="bg-[var(--gn-code-bg)] px-5 py-5 font-mono text-[13px] leading-relaxed text-[var(--gn-code-fg)]">
        <div>
          <span className="text-[var(--gn-syntax-comment)]">$</span>{' '}
          <span>go get github.com/gopackx/go-notification</span>
        </div>
        <div className="h-2" />
        <div>
          <span className="text-[var(--gn-syntax-keyword)]">package</span> main
        </div>
        <div>
          <span className="text-[var(--gn-syntax-keyword)]">import</span>{' '}
          <span className="text-[var(--gn-syntax-string)]">&quot;github.com/gopackx/go-notification&quot;</span>
        </div>
        <div className="h-1" />
        <div>
          n <span className="text-[var(--gn-syntax-keyword)]">:=</span>{' '}
          <span className="text-[var(--gn-syntax-fn)]">notification.New</span>(cfg)
        </div>
        <div>
          err <span className="text-[var(--gn-syntax-keyword)]">:=</span>{' '}
          <span className="text-[var(--gn-syntax-fn)]">n.Send</span>(ctx, user,{' '}
          <span className="text-[var(--gn-syntax-prop)]">WelcomeNotification</span>{'{}'})
        </div>
        <div>
          <span className="text-[var(--gn-syntax-keyword)]">if</span> err !={' '}
          <span className="text-[var(--gn-syntax-keyword)]">nil</span> {'{ log.Fatal(err) }'}
        </div>
        <div>
          <span className="italic text-[var(--gn-syntax-comment)]">
            // Dispatched on email + slack + db
          </span>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <span className="inline-block h-3.5 w-2 animate-pulse bg-[var(--gn-accent)]" />
          <span className="text-[var(--gn-syntax-string)]">sent</span>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-[var(--gn-border-subtle)] bg-[var(--gn-bg-surface)] px-4 py-1.5 font-mono text-[11px] text-[var(--gn-text-muted)]">
        <span>8 lines · Go · UTF-8 · LF</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--gn-accent)]" />
          <span className="text-[var(--gn-text-secondary)]">Ready</span>
        </span>
      </div>
    </div>
  );
}

function NotificationCodePanel() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--gn-border-default)] bg-[var(--gn-bg-surface)] shadow-[0_4px_24px_rgba(0,0,0,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--gn-border-subtle)] bg-[var(--gn-bg-elevated)] px-4 py-3">
        <div className="flex items-center gap-2">
          <TrafficDots />
          <FileCode className="ml-2 h-3.5 w-3.5 text-[var(--gn-text-muted)]" />
          <span className="font-mono text-xs text-[var(--gn-text-secondary)]">welcome.go</span>
        </div>
        <span className="font-mono text-[11px] text-[var(--gn-text-muted)]">Notification</span>
      </div>
      <div className="flex-1 bg-[var(--gn-code-bg)] px-5 py-5 font-mono text-[13px] leading-[1.7] text-[var(--gn-code-fg)]">
        <div>
          <span className="text-[var(--gn-syntax-keyword)]">type</span>{' '}
          <span className="text-[var(--gn-syntax-prop)]">WelcomeNotification</span>{' '}
          struct&#123; User User &#125;
        </div>
        <div className="h-1" />
        <div>
          <span className="text-[var(--gn-syntax-keyword)]">func</span> (n WelcomeNotification){' '}
          <span className="text-[var(--gn-syntax-fn)]">Via</span>(){' '}
          []<span className="text-[var(--gn-syntax-keyword)]">string</span> &#123;
        </div>
        <div>
          {'  return []'}
          <span className="text-[var(--gn-syntax-keyword)]">string</span>
          {'{'}
          <span className="text-[var(--gn-syntax-string)]">&quot;mail&quot;, &quot;slack&quot;, &quot;db&quot;</span>
          {'}'}
        </div>
        <div>&#125;</div>
        <div className="h-1" />
        <div>
          <span className="text-[var(--gn-syntax-keyword)]">func</span> (n WelcomeNotification){' '}
          <span className="text-[var(--gn-syntax-fn)]">ToMail</span>() *
          <span className="text-[var(--gn-syntax-prop)]">Mail</span> &#123;
        </div>
        <div>
          {'  return '}
          <span className="text-[var(--gn-syntax-fn)]">NewMail</span>().
          <span className="text-[var(--gn-syntax-fn)]">Subject</span>(
          <span className="text-[var(--gn-syntax-string)]">&quot;Welcome&quot;</span>)
        </div>
        <div>
          {'    .'}
          <span className="text-[var(--gn-syntax-fn)]">View</span>(
          <span className="text-[var(--gn-syntax-string)]">&quot;emails/welcome.html&quot;</span>, n.User)
        </div>
        <div>&#125;</div>
      </div>
      <div className="flex items-center justify-between border-t border-[var(--gn-border-subtle)] bg-[var(--gn-bg-surface)] px-4 py-1.5 font-mono text-[11px] text-[var(--gn-text-muted)]">
        <span>8 lines · Go · UTF-8 · LF</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-[var(--gn-text-secondary)]">Ready</span>
        </span>
      </div>
    </div>
  );
}

function HandlerCodePanel() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--gn-border-default)] bg-[var(--gn-bg-surface)] shadow-[0_4px_24px_rgba(0,0,0,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--gn-border-subtle)] bg-[var(--gn-bg-elevated)] px-4 py-3">
        <div className="flex items-center gap-2">
          <TrafficDots />
          <SendIcon className="ml-2 h-3.5 w-3.5 text-[var(--gn-text-muted)]" />
          <span className="font-mono text-xs text-[var(--gn-text-secondary)]">handler.go</span>
        </div>
        <span className="font-mono text-[11px] text-[var(--gn-text-muted)]">Send call</span>
      </div>
      <div className="flex-1 bg-[var(--gn-code-bg)] px-5 py-5 font-mono text-[13px] leading-[1.7] text-[var(--gn-code-fg)]">
        <div className="italic text-[var(--gn-syntax-comment)]">// signup handler</div>
        <div>
          <span className="text-[var(--gn-syntax-keyword)]">func</span> (h *Handler){' '}
          <span className="text-[var(--gn-syntax-fn)]">Signup</span>(c echo.
          <span className="text-[var(--gn-syntax-prop)]">Context</span>) error &#123;
        </div>
        <div>
          {'  user, _ := h.users.'}
          <span className="text-[var(--gn-syntax-fn)]">Create</span>(c.
          <span className="text-[var(--gn-syntax-fn)]">Request</span>().Context(), input)
        </div>
        <div className="italic text-[var(--gn-syntax-comment)]">{'  // dispatch async'}</div>
        <div>
          {'  '}
          <span className="text-[var(--gn-syntax-keyword)]">if</span> err := h.notifier.
          <span className="text-[var(--gn-syntax-fn)]">Send</span>(
        </div>
        <div>
          {'    ctx, user, '}
          <span className="text-[var(--gn-syntax-prop)]">WelcomeNotification</span>
          {'{User: user},'}
        </div>
        <div>
          {'  ); err != '}
          <span className="text-[var(--gn-syntax-keyword)]">nil</span>
          {' {'}
        </div>
        <div>
          {'    h.log.'}
          <span className="text-[var(--gn-syntax-fn)]">Warn</span>(
          <span className="text-[var(--gn-syntax-string)]">&quot;notify failed&quot;</span>, &quot;err&quot;, err)
        </div>
        <div>{'  }'}</div>
        <div>
          {'  '}
          <span className="text-[var(--gn-syntax-keyword)]">return</span> c.
          <span className="text-[var(--gn-syntax-fn)]">NoContent</span>(204)
        </div>
        <div>&#125;</div>
      </div>
      <div className="flex items-center justify-between border-t border-[var(--gn-border-subtle)] bg-[var(--gn-bg-surface)] px-4 py-1.5 font-mono text-[11px] text-[var(--gn-text-muted)]">
        <span>11 lines · Go · UTF-8 · LF</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-[var(--gn-text-secondary)]">Ready</span>
        </span>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center self-start rounded-md bg-[var(--gn-accent-soft)] px-2.5 py-1 font-mono text-[11px] font-semibold tracking-[0.1em] text-[var(--gn-accent)]">
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-[var(--gn-bg-base)] text-[var(--gn-text-primary)]">
      <section className="border-b border-[var(--gn-border-subtle)]">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="flex flex-col gap-7">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--gn-accent)] bg-[var(--gn-accent-soft)] px-3 py-1.5 text-xs font-medium text-[var(--gn-accent)]">
              <SparklesIcon className="h-3.5 w-3.5" />
              v1.0 — Now stable
            </span>
            <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              24 drivers, 7 channels,
              <br />
              one Go API.
            </h1>
            <p className="max-w-xl text-base leading-[1.55] text-[var(--gn-text-secondary)] sm:text-lg">
              A Laravel-inspired notification library for Go. Send to email, WhatsApp, SMS, Slack,
              push, and more — async-by-default with retries, backoff, and rate limiting baked in.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--gn-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--gn-accent-hover)]"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://github.com/gopackx/go-notification"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--gn-border-default)] bg-[var(--gn-bg-elevated)] px-5 py-3 text-sm font-semibold text-[var(--gn-text-primary)] transition hover:border-[var(--gn-accent)]"
              >
                <GitHubIcon className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--gn-text-muted)]">
              <span className="font-mono">go get github.com/gopackx/go-notification</span>
              <span className="h-1 w-1 rounded-full bg-current" />
              <span>Go 1.22+</span>
            </div>
          </div>
          <div className="lg:pl-4">
            <HeroTerminal />
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--gn-border-subtle)] bg-[var(--gn-bg-surface)]">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-y-6 px-6 py-8 sm:grid-cols-4 sm:divide-x sm:divide-[var(--gn-border-default)] sm:py-7">
          {[
            ['24', 'Drivers across all channels'],
            ['7', 'Channels (Email, WA, SMS, Chat…)'],
            ['0', 'External SDK dependencies'],
            ['MIT', 'Open source license, Go 1.22+'],
          ].map(([num, label], i) => (
            <div
              key={label}
              className={`flex flex-col gap-1.5 ${i === 0 ? 'sm:pl-0' : 'sm:pl-8'} ${i < 3 ? '' : ''}`}
            >
              <div className="text-3xl font-bold tracking-tight sm:text-4xl">{num}</div>
              <div className="text-xs text-[var(--gn-text-muted)] sm:text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12 flex flex-col gap-3.5">
            <SectionLabel>FEATURES</SectionLabel>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[42px]">
              Built for production traffic
            </h2>
            <p className="max-w-2xl text-base leading-[1.5] text-[var(--gn-text-secondary)] sm:text-lg">
              Everything you need to ship multi-channel notifications without wiring six SDKs
              together.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Ico, title, body, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col gap-4 rounded-2xl border border-[var(--gn-border-default)] bg-[var(--gn-bg-surface)] p-7 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--gn-accent)] hover:shadow-[0_18px_40px_-18px_var(--gn-accent)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gn-accent-soft)] transition group-hover:bg-[var(--gn-accent)]">
                  <Ico className="h-5 w-5 text-[var(--gn-accent)] transition group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-[1.55] text-[var(--gn-text-secondary)]">{body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--gn-border-subtle)] bg-[var(--gn-bg-surface)] px-6 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <div className="flex flex-col gap-2.5">
            <SectionLabel>7 CHANNELS</SectionLabel>
            <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
              One Send() call. Every delivery surface.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
            {channels.map(({ icon: Ico, title, body, bordered, href }) => (
              <Link
                key={title}
                href={href}
                className={`group flex flex-col gap-3 rounded-xl bg-[var(--gn-bg-elevated)] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--gn-accent)] hover:shadow-[0_14px_32px_-16px_var(--gn-accent)] ${
                  bordered
                    ? 'border border-[var(--gn-border-default)]'
                    : 'border border-[var(--gn-border-subtle)]'
                }`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--gn-accent-soft)] transition group-hover:bg-[var(--gn-accent)]">
                  <Ico className="h-4 w-4 text-[var(--gn-accent)] transition group-hover:text-white" />
                </div>
                <div className="text-sm font-semibold">{title}</div>
                <div className="text-xs leading-[1.5] text-[var(--gn-text-muted)]">{body}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12 flex flex-col gap-3.5">
            <SectionLabel>EXAMPLE</SectionLabel>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Define once. Send anywhere.
            </h2>
            <p className="max-w-2xl text-base leading-[1.55] text-[var(--gn-text-secondary)]">
              A Notification declares its content and target channels. Send routes it through the
              worker pool with retries and rate limiting.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <NotificationCodePanel />
            <HandlerCodePanel />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--gn-border-subtle)] bg-[var(--gn-bg-surface)] px-6 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-9">
          <div className="flex flex-col gap-2.5">
            <SectionLabel>DOCS</SectionLabel>
            <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
              Jump straight to what you need
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map(({ icon: Ico, title, body, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col gap-3 rounded-xl border border-[var(--gn-border-default)] bg-[var(--gn-bg-elevated)] p-6 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--gn-accent)] hover:shadow-[0_14px_32px_-16px_var(--gn-accent)]"
              >
                <div className="flex items-center justify-between">
                  <Ico className="h-5 w-5 text-[var(--gn-accent)]" />
                  <ArrowUpRight className="h-4 w-4 text-[var(--gn-text-muted)] transition group-hover:text-[var(--gn-accent)]" />
                </div>
                <div className="text-base font-semibold">{title}</div>
                <div className="text-[13px] leading-[1.5] text-[var(--gn-text-secondary)]">
                  {body}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-auto border-t border-[var(--gn-border-subtle)] px-6 pb-10 pt-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-2">
                <Image
                  src="/go-notification-logo-transparent.png"
                  alt="go-notification"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
                <span className="font-mono text-[15px] font-semibold">go-notification</span>
              </div>
              <p className="max-w-xs text-[13px] leading-[1.6] text-[var(--gn-text-muted)]">
                Unified notification library for Go.
                <br />
                24 drivers · 7 channels · one API.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3 sm:gap-x-16">
              <FooterCol
                heading="PROJECT"
                links={[
                  { label: 'Quickstart', href: '/docs' },
                  { label: 'Drivers', href: '/docs/channels/overview' },
                  { label: 'API reference', href: '/docs' },
                  { label: 'Changelog', href: '/docs' },
                ]}
              />
              <FooterCol
                heading="COMMUNITY"
                links={[
                  { label: 'GitHub', href: 'https://github.com/gopackx/go-notification' },
                  { label: 'Discussions', href: 'https://github.com/gopackx/go-notification/discussions' },
                  { label: 'Issues', href: 'https://github.com/gopackx/go-notification/issues' },
                  { label: 'Sponsor', href: 'https://github.com/sponsors/gopackx' },
                ]}
              />
              <FooterCol
                heading="PACKAGES"
                links={[
                  { label: 'go-migration', href: 'https://github.com/gopackx/go-migration' },
                  { label: 'open-swag-go', href: 'https://github.com/gopackx/open-swag-go' },
                  { label: 'go-notification', href: '/', highlight: true },
                ]}
              />
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--gn-border-subtle)] pt-6 sm:flex-row">
            <p className="text-xs text-[var(--gn-text-muted)]">
              © 2026 gopackx · MIT licensed · Made for Go developers.
            </p>
            <div className="flex items-center gap-3.5 text-[var(--gn-text-muted)]">
              <a
                href="https://github.com/gopackx/go-notification"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--gn-text-primary)]"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--gn-text-primary)]"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href="/feed.xml"
                className="transition hover:text-[var(--gn-text-primary)]"
                aria-label="RSS"
              >
                <RssIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

type FooterLink = { label: string; href: string; highlight?: boolean };

function FooterCol({ heading, links }: { heading: string; links: FooterLink[] }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="font-mono text-[11px] font-semibold tracking-[0.1em] text-[var(--gn-text-muted)]">
        {heading}
      </div>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className={`text-[13px] transition hover:text-[var(--gn-text-primary)] ${
            l.highlight ? 'text-[var(--gn-accent)]' : 'text-[var(--gn-text-secondary)]'
          }`}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
