import Frame from '@/components/Frame';
import type { Product } from '@/components/Sections/FloatingProduct';
import ProductLayer from '@/components/Sections/ProductLayer';
import StoreBadges from '@/components/StoreBadges';
import { brand } from '@/content/brand';
import { productPhotos } from '@/content/products';
import { motion, useReducedMotion } from 'framer-motion';
import type React from 'react';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Below lg the cutouts share a band under the copy; from lg they fill the whole section
 * and hang off the top and right edges (the fixed footer rules out the bottom). The
 * first four also show on phones, the laptop from sm. The rest of the set is spread
 * over the later sections. The laptop comes first so the others render over it.
 */
const products: Product[] = [
  {
    name: 'Laptop',
    saved: '$210',
    image: productPhotos.laptop,
    className:
      'hidden sm:block bottom-[-20%] right-[-18%] w-[38vw] lg:bottom-[-8%] lg:right-[-22vw] lg:w-[max(min(40vw,60vh),30vh)] xl:right-[-18vw] xl:w-[max(min(44vw,60vh),30vh)] 2xl:right-[-12vw] max-w-[900px]',
    coin: 'top-[40%] left-[28%]',
  },
  {
    name: 'Sunglasses',
    saved: '$35',
    image: productPhotos.sunglasses,
    className:
      '-rotate-12 top-[4%] left-[34%] w-[34vw] lg:top-[2%] lg:left-[48%] lg:w-[max(min(34vw,50vh),26vh)] xl:left-[44%] max-w-[620px]',
    coin: 'rotate-12 top-[55%] left-[75%]',
  },
  {
    name: 'Headphones',
    saved: '$61',
    image: productPhotos.headphones,
    className:
      'top-[-6%] right-[-6%] w-[26vw] sm:top-[-12%] lg:top-[-10%] lg:right-[-6vw] lg:w-[max(min(26vw,38vh),18vh)] max-w-[520px]',
    coin: 'top-[62%] left-[35%]',
  },
  {
    name: 'Running shoes',
    saved: '$28',
    image: productPhotos.runningShoes,
    className:
      'bottom-[-6%] left-[-14%] w-[58vw] sm:w-[52vw] lg:top-[30%] lg:bottom-auto lg:left-[50%] lg:w-[max(min(40vw,60vh),30vh)] max-w-[900px]',
    coin: 'top-[58%] left-[78%]',
  },
  {
    name: 'Camera',
    saved: '$140',
    image: productPhotos.camera,
    className:
      'bottom-[10%] right-[24%] w-[24vw] sm:bottom-[4%] sm:right-[36%] lg:bottom-[8%] lg:right-auto lg:left-[40%] lg:w-[max(min(22vw,32vh),20vh)] max-w-[440px]',
    coin: 'top-[20%] left-[85%]',
  },
];

const Hero = ({ scrollRef: ref }: Props) => {
  const shouldReduceMotion = useReducedMotion();

  const enter = (delay: number) => ({
    initial: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 100,
    },
    whileInView: { opacity: 1, y: 0 },
    transition: { type: 'spring' as const, stiffness: 200, duration: 0.5, delay },
    viewport: { once: true, amount: 0.5, root: ref },
  });

  return (
    <Frame aria-labelledby="hero-title" className="overflow-hidden">
      <div className="relative z-10 flex w-full flex-col items-center pt-6 text-center text-white lg:w-1/2 lg:grow lg:items-start lg:justify-center lg:px-10 lg:pt-0 lg:text-left">
        <motion.h2
          id="hero-title"
          className="text-3xl font-bold uppercase leading-none md:text-5xl lg:text-[3.75vw] lg:leading-[0.9]"
          {...enter(0)}
        >
          Get <span className="text-purple-200">{brand.offer.welcome} off</span> your first {brand.partner} purchase
          with a new Chase Sapphire card.
        </motion.h2>
        <motion.p
          className="mt-5 max-w-xl text-base leading-snug text-purple-100 md:text-xl lg:text-2xl"
          {...enter(0.3)}
        >
          {brand.partner} puts {brand.stats.titles} movies in your pocket: see where every title streams, match with
          friends and grab tickets. Pay with your new {brand.offer.welcomeCard} and your first purchase is{' '}
          {brand.offer.welcome} off.
        </motion.p>
        <motion.div className="mt-8" {...enter(0.5)}>
          <StoreBadges className="lg:justify-start" />
        </motion.div>
        <motion.p className="mt-4 text-sm text-purple-200 md:text-base" {...enter(0.7)}>
          Plus <strong className="font-bold text-white">{brand.offer.ticket} off every movie ticket</strong> when you
          pay with your {brand.offer.ticketCard}.
        </motion.p>
      </div>

      <ProductLayer
        products={products}
        className="relative -mx-5 mt-6 min-h-[34vh] grow lg:absolute lg:inset-0 lg:m-0 lg:min-h-0 lg:grow-0"
        scrollRef={ref}
      />
    </Frame>
  );
};

export default Hero;
