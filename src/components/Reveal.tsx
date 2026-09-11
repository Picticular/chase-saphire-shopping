import { motion, useReducedMotion } from 'framer-motion';
import type React from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up';
  delay?: number;
  className?: string;
  scrollRef?: React.RefObject<HTMLElement | null>;
  onAnimationComplete?: () => void;
}

/** Slides a block into view once, from the given side, the same way the tutorial's phone images did. */
const Reveal = ({
  children,
  direction = 'right',
  delay = 0,
  className,
  scrollRef: ref,
  onAnimationComplete,
}: Props) => {
  const shouldReduceMotion = useReducedMotion();
  const offset = shouldReduceMotion ? {} : direction === 'up' ? { y: 120 } : { x: direction === 'left' ? -160 : 160 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: shouldReduceMotion ? 1 : 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        duration: 0.5,
        delay,
      }}
      viewport={{
        once: true,
        amount: 0.4,
        root: ref,
      }}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
