import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider';
import './global.css';

export const metadata: Metadata = {
  title: {
    default: 'go-notification — One API. Every channel.',
    template: '%s · go-notification',
  },
  description:
    'Send notifications via email, WhatsApp, SMS, Slack, Telegram, push, and more — with a single Go interface. 24 built-in drivers, async by default.',
  metadataBase: new URL('https://go-notification.andrianprasetya.com'),
  icons: {
    icon: '/go-notification-logo-transparent.png',
    shortcut: '/go-notification-logo-transparent.png',
    apple: '/go-notification-logo-transparent.png',
  },
  openGraph: {
    title: 'go-notification',
    description: 'One API. Every channel. A unified Go notification library.',
    url: 'https://go-notification.andrianprasetya.com',
    siteName: 'go-notification',
    type: 'website',
    images: ['/go-notification-logo-transparent.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
