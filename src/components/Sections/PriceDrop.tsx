import Card from '@/components/Card';
import Frame from '@/components/Frame';
import Reveal from '@/components/Reveal';
import SectionHeading, { Accent } from '@/components/SectionHeading';
import { brand } from '@/content/brand';
import type React from 'react';
import { FaArrowTrendDown, FaBell } from 'react-icons/fa6';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

const PriceDrop = ({ scrollRef: ref }: Props) => {
  return (
    <Frame aria-labelledby="drop-title">
      <div className="flex grow w-full flex-col items-center justify-center gap-8 pt-6 lg:flex-row lg:gap-16 lg:px-10">
        <div className="lg:w-1/2">
          <SectionHeading
            id="drop-title"
            title={
              <>
                Know when prices <Accent scrollRef={ref}>drop.</Accent>
              </>
            }
            lead={`${brand.product} keeps an eye on products you've viewed and bought. When the price falls, you get a heads-up so you can buy at the right moment or claim a refund on what you already own.`}
            align="left"
            scrollRef={ref}
          />
        </div>
        <Reveal direction="right" className="w-full max-w-md lg:w-1/2" scrollRef={ref}>
          <Card>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-purple-700">
              <FaBell aria-hidden="true" /> Price watch
            </p>
            <div className="mt-4 flex items-center gap-4 rounded-xl bg-purple-50 p-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white text-2xl">
                📷
              </span>
              <div className="leading-tight">
                <p className="font-bold">Mirrorless camera</p>
                <p className="text-sm text-slate-500">Viewed 3 days ago</p>
              </div>
            </div>
            <div className="mt-4 flex items-end justify-between rounded-lg bg-emerald-100 px-4 py-3">
              <span className="leading-tight">
                <span className="block text-xs font-bold uppercase tracking-wide text-emerald-700">Price dropped</span>
                <span className="block text-sm text-slate-600">
                  was <s>$899.00</s>
                </span>
              </span>
              <span className="flex items-center gap-2 text-2xl font-bold text-emerald-700">
                <FaArrowTrendDown aria-hidden="true" /> $759.00
              </span>
            </div>
            <p className="mt-3 text-center text-xs text-slate-500">You'd save $140.00 buying today.</p>
          </Card>
        </Reveal>
      </div>
    </Frame>
  );
};

export default PriceDrop;
