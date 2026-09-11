import type React from 'react';
import type { ReactNode } from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

const Frame = ({ children, ...props }: Props) => {
  return (
    <section
      className="relative flex min-h-screen w-full snap-start snap-always flex-col px-5 pt-16 pb-24 sm:pb-16"
      {...props}
    >
      {children}
    </section>
  );
};

export default Frame;
