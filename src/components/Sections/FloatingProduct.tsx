import ProductPhoto from '@/components/ProductPhoto';
import { motion, useReducedMotion } from 'framer-motion';
import type { StaticImageData } from 'next/image';
import type React from 'react';

export interface Product {
  name: string;
  /** Amount for the round coin. Leave out when the section's card already shows the saving. */
  saved?: string;
  image: StaticImageData;
  /** Absolute position, width and rotation classes for the cutout, per breakpoint. */
  className: string;
  /** Anchor for the centre of the "saved." coin, as a percentage of the cutout, on the product's silhouette. */
  coin?: string;
}

interface Props extends Product {
  index: number;
  scrollRef?: React.RefObject<HTMLElement | null>;
}

/**
 * A product cutout that springs into place and then drifts, with a round "saved." coin
 * pinned to it, like the parallax images on the Capital One Shopping hero.
 */
const FloatingProduct = ({ name, saved, image, className, coin, index, scrollRef: ref }: Props) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={['absolute', className].join(' ')}
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        y: shouldReduceMotion ? 0 : 60,
        scale: shouldReduceMotion ? 1 : 0.85,
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 16, delay: 0.4 + index * 0.12 }}
      viewport={{ once: true, amount: 0.1, root: ref }}
    >
      <motion.div
        className="relative"
        animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={{
          duration: 5 + (index % 3),
          ease: 'easeInOut',
          repeat: Number.POSITIVE_INFINITY,
          delay: index * 0.7,
        }}
      >
        <ProductPhoto
          image={image}
          priority={index < 4}
          className="h-auto w-full drop-shadow-[0_18px_18px_rgba(0,0,0,0.35)]"
        />
        {saved && (
          <span
            className={[
              'absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-center leading-none shadow-[0_3px_15px_rgba(0,0,0,0.25)] lg:h-[4.5rem] lg:w-[4.5rem]',
              coin,
            ].join(' ')}
          >
            <span className="sr-only">{name}: </span>
            <span className="text-sm font-bold text-emerald-700 lg:text-lg">{saved}</span>
            <span className="mt-0.5 text-[10px] font-bold text-emerald-700 lg:text-[11px]">saved.</span>
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default FloatingProduct;
