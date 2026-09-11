import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type React from 'react';
import { type ReactNode, useRef } from 'react';

type RenderChildren = (scrollRef: React.RefObject<HTMLElement | null>) => ReactNode;

interface Props {
  children?: RenderChildren;
}

const Layout = ({ children }: Props) => {
  const scrollRef = useRef<HTMLElement>(null);

  return (
    <div className="flex h-[100%] w-full flex-col overflow-hidden bg-gradient-to-b from-purple-600 to-indigo-900">
      <Header id={'SiteHeader'} />
      <main
        className="flex min-h-[100%] grow snap-y snap-mandatory overflow-y-auto overflow-x-hidden overscroll-none scrollbar focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white"
        ref={scrollRef}
        aria-label="Page sections"
        // biome-ignore lint/a11y/noNoninteractiveTabindex: scrollable regions must be keyboard focusable (WCAG 2.1.1, axe scrollable-region-focusable)
        tabIndex={0}
      >
        {children?.(scrollRef)}
      </main>
      <Footer className="fixed bottom-0 left-0 block w-full" />
    </div>
  );
};

export default Layout;
