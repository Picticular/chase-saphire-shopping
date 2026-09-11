import type React from 'react';
import type { ReactNode } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/** White panel used for the extension mock-ups. */
const Card = ({ children, className, ...props }: Props) => {
  const classNames = ['rounded-2xl bg-white p-5 text-purple-1000 shadow-2xl shadow-black/30', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Card;
