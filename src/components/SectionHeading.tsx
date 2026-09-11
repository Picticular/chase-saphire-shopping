import { motion, useReducedMotion } from 'framer-motion';
import type React from 'react';
import type { ReactNode } from 'react';

interface Props {
  id: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  scrollRef?: React.RefObject<HTMLElement | null>;
}

/** Animated section title and lead paragraph. `title` may include <Accent> spans. */
const SectionHeading = ({ id, title, lead, align = 'center', scrollRef: ref }: Props) => {
  const shouldReduceMotion = useReducedMotion();
  const alignClasses = align === 'left' ? 'text-center lg:text-left' : 'text-center';

  return (
    <div className={`w-full text-white ${alignClasses}`}>
      <motion.h2
        id={id}
        className="text-3xl font-bold uppercase leading-none md:text-4xl lg:text-[3.5vw] lg:leading-[0.9]"
        initial={{
          opacity: shouldReduceMotion ? 1 : 0,
          y: shouldReduceMotion ? 0 : 150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          duration: 0.5,
        }}
        viewport={{
          once: true,
          amount: 0.5,
          root: ref,
        }}
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p
          className="mt-4 text-base leading-snug text-purple-100 md:text-xl lg:mt-6 lg:text-2xl"
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            y: shouldReduceMotion ? 0 : 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            duration: 0.5,
            delay: 0.3,
          }}
          viewport={{
            once: true,
            amount: 0.5,
            root: ref,
          }}
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
};

interface AccentProps {
  children: ReactNode;
  delay?: number;
  scrollRef?: React.RefObject<HTMLElement | null>;
}

/** Highlighted word inside a SectionHeading title, scales in after the heading lands. */
export const Accent = ({ children, delay = 0.2, scrollRef: ref }: AccentProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      className="inline-block text-purple-200"
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        scale: shouldReduceMotion ? 1 : 4,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        duration: 1,
        delay,
      }}
      viewport={{
        once: true,
        root: ref,
      }}
    >
      {children}
    </motion.span>
  );
};

export default SectionHeading;
