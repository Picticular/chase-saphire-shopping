import Card from '@/components/Card';
import Frame from '@/components/Frame';
import Reveal from '@/components/Reveal';
import SectionHeading, { Accent } from '@/components/SectionHeading';
import type { Product } from '@/components/Sections/FloatingProduct';
import ProductLayer from '@/components/Sections/ProductLayer';
import { brand } from '@/content/brand';
import { productPhotos } from '@/content/products';
import { useReducedMotion } from 'framer-motion';
import type React from 'react';
import { useEffect, useState } from 'react';
import { FaCheck, FaTicket } from 'react-icons/fa6';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

/** The checkout card sits on the drone, so the drone carries no coin. Desktop only. */
const products: Product[] = [
  {
    name: 'Camera drone',
    image: productPhotos.cameraDrone,
    className: 'hidden lg:tall:block top-[6%] right-[-18vw] w-[min(52vw,80vh)] max-w-[1300px]',
  },
];

const lines = [
  { label: 'Opening night, 2 tickets', amount: '$34.00' },
  { label: 'Large popcorn and two drinks', amount: '$22.50' },
  { label: 'Reserved seats', amount: '$7.50' },
];
const subtotal = '$64.00';
const total = '$14.00';

const WelcomeOffer = ({ scrollRef: ref }: Props) => {
  const shouldReduceMotion = useReducedMotion();
  const [started, setStarted] = useState(false);
  const [applied, setApplied] = useState(false);

  // Once the card has slid in, "apply" the welcome offer. Reduced motion shows the finished state.
  useEffect(() => {
    if (!started) return;
    if (shouldReduceMotion) {
      setApplied(true);
      return;
    }
    const t = setTimeout(() => setApplied(true), 900);
    return () => clearTimeout(t);
  }, [started, shouldReduceMotion]);

  return (
    <Frame aria-labelledby="welcome-title" className="overflow-hidden">
      <ProductLayer products={products} scrollRef={ref} />
      <div className="relative z-10 flex grow w-full flex-col items-center justify-center gap-8 pt-6 lg:flex-row lg:gap-16 lg:px-10">
        <div className="lg:w-1/2">
          <SectionHeading
            id="welcome-title"
            title={
              <>
                Your first purchase, <Accent scrollRef={ref}>{brand.offer.welcome} off.</Accent>
              </>
            }
            lead={`Open a ${brand.offer.welcomeCard}, add it to ${brand.partner} and the welcome offer applies itself at checkout. Tickets, concessions, seats: whatever your first order is, ${brand.offer.welcome} comes off. Nothing to paste, nothing to remember.`}
            align="left"
            scrollRef={ref}
          />
        </div>
        <Reveal
          direction="right"
          className="w-full max-w-md lg:w-1/2"
          scrollRef={ref}
          onAnimationComplete={() => setStarted(true)}
        >
          <Card aria-live="polite">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-purple-700">
                <FaTicket aria-hidden="true" /> Checkout
              </span>
              <span className="text-xs text-slate-500">{applied ? 'Offer applied' : 'Applying offer…'}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {lines.map(line => (
                <li key={line.label} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                  <span>{line.label}</span>
                  <span className="font-bold">{line.amount}</span>
                </li>
              ))}
              <li className="flex items-center justify-between px-3 py-1 text-slate-500">
                <span>Subtotal</span>
                <span>{subtotal}</span>
              </li>
              <li
                className={[
                  'flex items-center justify-between rounded-lg px-3 py-2 font-bold transition-colors duration-500',
                  applied ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-50 text-slate-400',
                ].join(' ')}
              >
                <span className="flex items-center gap-2">
                  {applied && <FaCheck aria-hidden="true" />} Chase Sapphire welcome offer
                </span>
                <span>-{brand.offer.welcome}.00</span>
              </li>
            </ul>
            <div className="mt-4 flex items-end justify-between rounded-xl bg-purple-50 px-4 py-3">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">You pay</span>
              <span className="text-3xl font-bold text-purple-700">{applied ? total : subtotal}</span>
            </div>
            <p className="mt-3 text-center text-xs text-slate-500">Paid with your new {brand.offer.welcomeCard}.</p>
          </Card>
        </Reveal>
      </div>
    </Frame>
  );
};

export default WelcomeOffer;
