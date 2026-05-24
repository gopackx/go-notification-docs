import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          src="/go-notification-logo-transparent.png"
          alt="go-notification"
          width={28}
          height={28}
          priority
          className="h-7 w-7 object-contain"
        />
        <span className="font-semibold">go-notification</span>
      </>
    ),
  },
  links: [],
};
