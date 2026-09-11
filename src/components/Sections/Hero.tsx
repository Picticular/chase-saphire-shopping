import Frame from '@/components/Frame';
import InstallButton from '@/components/InstallButton';
import ProductCard, { type Product } from '@/components/Sections/ProductCard';
import { brand } from '@/content/brand';
import { motion, useReducedMotion } from 'framer-motion';
import type React from 'react';
import {
  FaCamera,
  FaClock,
  FaComputerMouse,
  FaGamepad,
  FaGlasses,
  FaHeadphones,
  FaLaptop,
  FaShoePrints,
} from 'react-icons/fa6';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

const products: (Product & { position: string })[] = [
  { name: 'Running shoes', saved: '$28', Icon: FaShoePrints, position: 'top-[6vh] left-0' },
  { name: 'Headphones', saved: '$61', Icon: FaHeadphones, position: 'top-[6vh] left-[22vw] xl:left-[18vw]' },
  { name: 'Camera', saved: '$140', Icon: FaCamera, position: 'top-[20vh] left-[10vw] xl:left-[8vw]' },
  { name: 'Sunglasses', saved: '$35', Icon: FaGlasses, position: 'top-[20vh] left-[30vw] xl:left-[26vw]' },
  { name: 'Laptop', saved: '$210', Icon: FaLaptop, position: 'top-[34vh] left-0' },
  { name: 'Fitness watch', saved: '$45', Icon: FaClock, position: 'top-[34vh] left-[22vw] xl:left-[18vw]' },
  { name: 'Game controller', saved: '$12', Icon: FaGamepad, position: 'top-[48vh] left-[10vw] xl:left-[8vw]' },
  { name: 'Wireless mouse', saved: '$9', Icon: FaComputerMouse, position: 'top-[48vh] left-[30vw] xl:left-[26vw]' },
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
    <Frame aria-labelledby="hero-title">
      <div className="relative flex grow w-full flex-col justify-center gap-8 pt-10 text-white lg:flex-row lg:items-center lg:gap-12 lg:px-10">
        <div className="flex flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          <motion.h2
            id="hero-title"
            className="text-3xl font-bold uppercase leading-none md:text-5xl lg:text-[3.75vw] lg:leading-[0.9]"
            {...enter(0)}
          >
            {brand.product} checks for deals <span className="text-purple-200">before</span> you checkout.
          </motion.h2>
          <motion.p
            className="mt-5 max-w-xl text-base leading-snug text-purple-100 md:text-xl lg:text-2xl"
            {...enter(0.3)}
          >
            {brand.product} is a free browser extension that automatically applies coupon codes at checkout and lets you
            know when prices drop on products you've viewed and purchased.
          </motion.p>
          <motion.div className="mt-8" {...enter(0.5)}>
            <InstallButton />
          </motion.div>
          <motion.p className="mt-4 text-sm text-purple-200 md:text-base" {...enter(0.7)}>
            Shoppers saved over <strong className="font-bold text-white">{brand.stats.savedLastYear}</strong> last year.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard key={product.name} {...product} index={index} scrollRef={ref} />
          ))}
        </div>

        <div className="relative hidden h-[64vh] w-1/2 lg:block">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              {...product}
              index={index}
              className={`absolute ${product.position}`}
              scrollRef={ref}
            />
          ))}
        </div>
      </div>
    </Frame>
  );
};

export default Hero;
