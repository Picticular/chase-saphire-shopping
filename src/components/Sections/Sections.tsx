import AppFeatures from '@/components/Sections/AppFeatures';
import Hero from '@/components/Sections/Hero';
import HowItWorks from '@/components/Sections/HowItWorks';
import Signup from '@/components/Sections/Signup';
import TicketOffer from '@/components/Sections/TicketOffer';
import WelcomeOffer from '@/components/Sections/WelcomeOffer';
import Win from '@/components/Sections/Win';
import type React from 'react';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

const Sections = ({ scrollRef }: Props) => {
  return (
    <div className="relative block h-[100%] w-full">
      <Hero scrollRef={scrollRef} />
      <HowItWorks scrollRef={scrollRef} />
      <WelcomeOffer scrollRef={scrollRef} />
      <TicketOffer scrollRef={scrollRef} />
      <AppFeatures scrollRef={scrollRef} />
      <Win scrollRef={scrollRef} />
      <Signup scrollRef={scrollRef} />
    </div>
  );
};

export default Sections;
