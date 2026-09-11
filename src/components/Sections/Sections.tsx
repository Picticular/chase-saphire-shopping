import Coupons from '@/components/Sections/Coupons';
import Hero from '@/components/Sections/Hero';
import HowItWorks from '@/components/Sections/HowItWorks';
import PriceComparison from '@/components/Sections/PriceComparison';
import PriceDrop from '@/components/Sections/PriceDrop';
import Rewards from '@/components/Sections/Rewards';
import Signup from '@/components/Sections/Signup';
import type React from 'react';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

const Sections = ({ scrollRef }: Props) => {
  return (
    <div className="relative block h-[100%] w-full">
      <Hero scrollRef={scrollRef} />
      <HowItWorks scrollRef={scrollRef} />
      <Coupons scrollRef={scrollRef} />
      <PriceComparison scrollRef={scrollRef} />
      <PriceDrop scrollRef={scrollRef} />
      <Rewards scrollRef={scrollRef} />
      <Signup scrollRef={scrollRef} />
    </div>
  );
};

export default Sections;
