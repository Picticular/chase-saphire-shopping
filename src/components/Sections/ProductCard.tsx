import { motion, useReducedMotion } from 'framer-motion';
import type React from 'react';
import type { IconType } from 'react-icons';

export interface Product {
  name: string;
  saved: string;
  Icon: IconType;
}

interface Props extends Product {
  index: number;
  className?: string;
  scrollRef?: React.RefObject<HTMLElement | null>;
}

const getRandomInt = (min: number, max: number) => {
  const lo = Math.ceil(min);
  const hi = Math.floor(max);
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
};

/** A "saved $" product chip that springs in from a random offset, like the streamer logos on the tutorial. */
const ProductCard = ({ name, saved, Icon, index, className, scrollRef: ref }: Props) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={['flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl shadow-black/30', className]
        .filter(Boolean)
        .join(' ')}
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        x: shouldReduceMotion ? 0 : getRandomInt(-120, 120),
        y: shouldReduceMotion ? 0 : getRandomInt(-120, 120),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        duration: 0.5,
        delay: 0.6 + index * 0.15,
      }}
      viewport={{
        once: true,
        amount: 0.1,
        root: ref,
      }}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-xl text-purple-700">
        <Icon aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-bold text-purple-1000">{name}</span>
        <span className="text-xs font-bold uppercase tracking-wide text-emerald-600">saved {saved}</span>
      </span>
    </motion.div>
  );
};

export default ProductCard;
