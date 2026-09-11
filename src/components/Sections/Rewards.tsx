import Card from '@/components/Card';
import Frame from '@/components/Frame';
import Reveal from '@/components/Reveal';
import SectionHeading, { Accent } from '@/components/SectionHeading';
import { brand } from '@/content/brand';
import type React from 'react';
import { FaCoins, FaGift } from 'react-icons/fa6';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

const retailers = brand.rewardRetailers.join(' and ');

const Rewards = ({ scrollRef: ref }: Props) => {
  return (
    <Frame aria-labelledby="rewards-title">
      <div className="flex grow w-full flex-col items-center justify-center gap-8 pt-6 lg:px-20">
        <SectionHeading
          id="rewards-title"
          title={
            <>
              Rewards with a <Accent scrollRef={ref}>click.</Accent>
            </>
          }
          lead={`Click and earn Rewards for your purchases on popular sites like ${retailers}. Use your Shopping Rewards to buy gift cards from the brands you already love.`}
          scrollRef={ref}
        />
        <div className="grid w-full max-w-4xl gap-5 md:grid-cols-2">
          <Reveal direction="left" delay={0.3} scrollRef={ref}>
            <Card className="h-full">
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-purple-700">
                <FaCoins aria-hidden="true" /> Earn
              </p>
              <ul className="mt-4 space-y-2">
                {brand.rewardRetailers.map((store, i) => (
                  <li key={store} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-3">
                    <span className="font-bold">{store}</span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                      up to {i === 0 ? '4' : '2'}% back
                    </span>
                  </li>
                ))}
                <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-3">
                  <span className="font-bold">Thousands more</span>
                  <span className="text-xs text-slate-500">activate at checkout</span>
                </li>
              </ul>
            </Card>
          </Reveal>
          <Reveal direction="right" delay={0.5} scrollRef={ref}>
            <Card className="h-full">
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-purple-700">
                <FaGift aria-hidden="true" /> Redeem
              </p>
              <div className="mt-4 rounded-xl bg-purple-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Your Shopping Rewards</p>
                <p className="mt-1 text-3xl font-bold text-purple-700">$42.15</p>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Turn your balance into gift cards for dining, travel, and retail.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Restaurants', 'Airlines', 'Home', 'Electronics'].map(tag => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </Frame>
  );
};

export default Rewards;
