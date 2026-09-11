import appHome from '@/assets/app/home.webp';
import appSplash from '@/assets/app/splash.webp';
import Frame from '@/components/Frame';
import PhoneFrame from '@/components/PhoneFrame';
import Reveal from '@/components/Reveal';
import SectionHeading, { Accent } from '@/components/SectionHeading';
import { brand } from '@/content/brand';
import type React from 'react';
import { FaHandPointer, FaPlay, FaShareNodes, FaTrophy } from 'react-icons/fa6';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

/** Feature list from picticular.com. */
const features = [
  {
    Icon: FaHandPointer,
    title: 'Swipe',
    body: "Left to nix what you don't like, right to add a title to your library.",
  },
  {
    Icon: FaPlay,
    title: 'Watch',
    body: `${brand.stats.titles} titles and trailers, with a link to wherever each one is streaming.`,
  },
  {
    Icon: FaShareNodes,
    title: 'Share',
    body: 'Make lists, share them with your crew and get a ping when you match on a film.',
  },
  {
    Icon: FaTrophy,
    title: 'Win',
    body: 'Add titles to your Lit List for a shot at prizes, premieres and exclusive events.',
  },
];

const AppFeatures = ({ scrollRef: ref }: Props) => {
  return (
    <Frame aria-labelledby="features-title" className="overflow-hidden">
      <div className="relative z-10 flex grow w-full flex-col items-center justify-center gap-8 pt-6 lg:flex-row lg:gap-16 lg:px-10">
        <div className="lg:w-1/2">
          <SectionHeading
            id="features-title"
            title={
              <>
                Every movie you love, <Accent scrollRef={ref}>in one app.</Accent>
              </>
            }
            lead={`${brand.partner} is where movie night starts. Find what to watch, see where it's playing, buy the tickets and settle the "what are we watching" argument with your friends.`}
            align="left"
            scrollRef={ref}
          />
          <ul className="mt-6 grid grid-cols-2 gap-3 text-white lg:mt-8">
            {features.map((f, index) => (
              <li key={f.title}>
                <Reveal direction="up" delay={0.4 + index * 0.1} scrollRef={ref} className="h-full">
                  <div className="flex h-full gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-purple-700">
                      <f.Icon aria-hidden="true" />
                    </span>
                    <span className="leading-tight">
                      <span className="block font-bold">{f.title}</span>
                      <span className="block text-xs text-purple-100 sm:text-sm">{f.body}</span>
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex w-full items-end justify-center lg:w-1/2">
          <Reveal
            direction="right"
            delay={0.2}
            scrollRef={ref}
            className="relative z-10 w-[34%] max-w-[280px] sm:w-[44%]"
          >
            <PhoneFrame screenshot={appHome} alt={`${brand.partner} home screen: swipe through movie posters`} />
          </Reveal>
          <Reveal
            direction="right"
            delay={0.45}
            scrollRef={ref}
            className="-ml-[8%] mb-[10%] hidden w-[40%] max-w-[240px] sm:block"
          >
            <PhoneFrame
              screenshot={appSplash}
              alt={`${brand.partner} on Android: the Get Ready splash screen`}
              variant="android"
            />
          </Reveal>
        </div>
      </div>
    </Frame>
  );
};

export default AppFeatures;
