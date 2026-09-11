import Frame from '@/components/Frame';
import Reveal from '@/components/Reveal';
import SectionHeading, { Accent } from '@/components/SectionHeading';
import type { Product } from '@/components/Sections/FloatingProduct';
import ProductLayer from '@/components/Sections/ProductLayer';
import { brand } from '@/content/brand';
import { productPhotos } from '@/content/products';
import type React from 'react';
import { FaCreditCard, FaMobileScreenButton, FaTicket } from 'react-icons/fa6';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

const steps = [
  {
    Icon: FaMobileScreenButton,
    title: `Download ${brand.partner}`,
    body: `Free from ${brand.partnerUrl.replace('https://', '')}. Swipe through ${brand.stats.titles} titles and see where each one is playing or streaming.`,
  },
  {
    Icon: FaCreditCard,
    title: 'Add your Chase card',
    body: `Set your ${brand.offer.welcomeCard} as the payment method in the app. Any Chase credit card unlocks the ticket offer.`,
  },
  {
    Icon: FaTicket,
    title: 'Check out',
    body: `${brand.offer.welcome} comes off your first purchase automatically. After that, every ticket is ${brand.offer.ticket} off.`,
  },
];

/** Desktop only, and only when the viewport is tall enough; phones keep this section clean. */
const products: Product[] = [
  {
    name: 'Game controller',
    saved: '$12',
    image: productPhotos.gameController,
    className: 'hidden lg:tall:block -rotate-12 bottom-[-18%] left-[-14vw] w-[min(40vw,70vh)] max-w-[560px]',
    coin: 'rotate-12 top-[25%] left-[70%]',
  },
  {
    name: 'Wireless mouse',
    saved: '$9',
    image: productPhotos.wirelessMouse,
    className: 'hidden lg:tall:block top-[8%] right-[-2vw] w-[min(30vw,40vh)]',
    coin: 'top-[20%] left-[50%]',
  },
];

const HowItWorks = ({ scrollRef: ref }: Props) => {
  return (
    <Frame aria-labelledby="how-title" className="overflow-hidden">
      <ProductLayer products={products} scrollRef={ref} />
      <div className="relative z-10 flex grow w-full flex-col items-center justify-center gap-10 pt-6 lg:px-20">
        <SectionHeading
          id="how-title"
          title={
            <>
              <Accent scrollRef={ref}>Three taps</Accent> is all it takes to save with {brand.issuer} in {brand.partner}
              .
            </>
          }
          scrollRef={ref}
        />
        <ol className="grid w-full max-w-5xl gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal
                direction={index === 0 ? 'left' : index === 1 ? 'up' : 'right'}
                delay={0.3 + index * 0.2}
                scrollRef={ref}
                className="h-full"
              >
                <div className="flex h-full gap-4 rounded-2xl bg-white/10 p-6 text-white backdrop-blur-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl text-purple-700">
                    <step.Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold md:text-xl">
                      <span className="text-purple-200">{index + 1}.</span> {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-snug text-purple-100 md:text-base">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Frame>
  );
};

export default HowItWorks;
