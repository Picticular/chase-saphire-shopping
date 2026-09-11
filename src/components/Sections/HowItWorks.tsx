import Frame from '@/components/Frame';
import Reveal from '@/components/Reveal';
import SectionHeading, { Accent } from '@/components/SectionHeading';
import { brand } from '@/content/brand';
import type React from 'react';
import { FaCartShopping, FaPuzzlePiece } from 'react-icons/fa6';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

const steps = [
  {
    Icon: FaPuzzlePiece,
    title: 'Add the extension',
    body: `One click installs ${brand.product} in your browser. No account needed to start saving.`,
  },
  {
    Icon: FaCartShopping,
    title: 'Click "Apply" at checkout',
    body: 'When you reach a checkout page we pop up, test every code we know, and keep the one that saves you the most.',
  },
];

const HowItWorks = ({ scrollRef: ref }: Props) => {
  return (
    <Frame aria-labelledby="how-title">
      <div className="flex grow w-full flex-col items-center justify-center gap-10 pt-6 lg:px-20">
        <SectionHeading
          id="how-title"
          title={
            <>
              <Accent scrollRef={ref}>Two clicks</Accent> is all it takes to save with {brand.product}.
            </>
          }
          scrollRef={ref}
        />
        <ol className="grid w-full max-w-4xl gap-5 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal direction={index === 0 ? 'left' : 'right'} delay={0.3 + index * 0.2} scrollRef={ref}>
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
