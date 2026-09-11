import Card from '@/components/Card';
import Frame from '@/components/Frame';
import Reveal from '@/components/Reveal';
import SectionHeading, { Accent } from '@/components/SectionHeading';
import { brand } from '@/content/brand';
import { useReducedMotion } from 'framer-motion';
import type React from 'react';
import { useEffect, useState } from 'react';
import { FaCheck, FaTag } from 'react-icons/fa6';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

const codes = [
  { code: 'FIT', saving: '$4.00' },
  { code: 'SUNDAYSMS', saving: '$12.50' },
  { code: 'LOVE', saving: '$6.20' },
  { code: 'BTSSMS', saving: '$24.80' },
  { code: 'SUNDAY', saving: '$10.00' },
];
const bestIndex = 3;
const tickMs = 320;

const Coupons = ({ scrollRef: ref }: Props) => {
  const shouldReduceMotion = useReducedMotion();
  const [started, setStarted] = useState(false);
  const [tested, setTested] = useState(0);

  // Once the card has slid in, "test" the codes one at a time. Reduced motion shows the finished state.
  useEffect(() => {
    if (!started) return;
    if (shouldReduceMotion) {
      setTested(codes.length);
      return;
    }
    if (tested >= codes.length) return;
    const t = setTimeout(() => setTested(n => n + 1), tickMs);
    return () => clearTimeout(t);
  }, [started, tested, shouldReduceMotion]);

  const done = tested >= codes.length;

  return (
    <Frame aria-labelledby="coupons-title">
      <div className="flex grow w-full flex-col items-center justify-center gap-8 pt-6 lg:flex-row lg:gap-16 lg:px-10">
        <div className="lg:w-1/2">
          <SectionHeading
            id="coupons-title"
            title={
              <>
                Coupon codes, <Accent scrollRef={ref}>automatically.</Accent>
              </>
            }
            lead={`${brand.product} finds and applies coupon codes on thousands of retailers. Codes are updated in real time, so you never paste an expired one again.`}
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
                <FaTag aria-hidden="true" /> Checkout
              </span>
              <span className="text-xs text-slate-500">
                {done
                  ? `tested ${codes.length} codes in 1.61s`
                  : `testing ${Math.min(tested + 1, codes.length)} of ${codes.length}…`}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-4 rounded-xl bg-purple-50 p-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white text-2xl">
                🚁
              </span>
              <div className="leading-tight">
                <p className="font-bold">Camera drone</p>
                <p className="text-sm text-slate-500">
                  <s>$249.00</s> {done && <span className="font-bold text-emerald-600">$224.20</span>}
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 font-mono text-sm">
              {codes.map((c, i) => {
                const isTested = i < tested;
                const isBest = done && i === bestIndex;
                return (
                  <li
                    key={c.code}
                    className={[
                      'flex items-center justify-between rounded-lg px-3 py-2 transition-colors duration-300',
                      isBest ? 'bg-emerald-100 font-bold' : 'bg-slate-50',
                      isTested ? 'opacity-100' : 'opacity-40',
                    ].join(' ')}
                  >
                    <span>{c.code}</span>
                    <span className="flex items-center gap-2 text-emerald-600">
                      {isTested && (
                        <>
                          <span className="text-slate-500">-{c.saving}</span>
                          <FaCheck aria-hidden="true" />
                        </>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-center text-sm font-bold text-emerald-600" aria-hidden={!done}>
              {done ? `Best code applied. You saved ${codes[bestIndex].saving}.` : ' '}
            </p>
          </Card>
        </Reveal>
      </div>
    </Frame>
  );
};

export default Coupons;
