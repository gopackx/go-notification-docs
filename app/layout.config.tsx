import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <span
          aria-hidden
          className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-fd-primary text-fd-primary-foreground text-xs font-bold"
        >
          GN
        </span>
        <span className="font-semibold">go-notification</span>
      </>
    ),
  },
  links: [
    {
      text: 'Docs',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'GitHub',
      url: 'https://github.com/gopackx/go-notification',
      external: true,
    },
  ],
};
