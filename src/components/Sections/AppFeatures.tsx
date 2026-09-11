import Card from '@/components/Card';
import Frame from '@/components/Frame';
import Reveal from '@/components/Reveal';
import SectionHeading, { Accent } from '@/components/SectionHeading';
import type { Product } from '@/components/Sections/FloatingProduct';
import ProductLayer from '@/components/Sections/ProductLayer';
import { brand } from '@/content/brand';
import { productPhotos } from '@/content/products';
import type React from 'react';
import { FaHandPointer, FaPlay, FaShareNodes, FaTrophy } from 'react-icons/fa6';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

/** Desktop only, and only when the viewport is tall enough. */
const products: Product[] = [
  {
    name: 'Camera',
    saved: '$140',
    image: productPhotos.camera,
    className: 'hidden lg:tall:block top-[8%] right-[-10vw] w-[min(36vw,55vh)] max-w-[440px]',
    coin: 'top-[30%] left-[15%]',
  },
];

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
      <ProductLayer products={products} scrollRef={ref} />
      <div className="relative z-10 flex grow w-full flex-col items-center justify-center gap-8 pt-6 lg:flex-row lg:gap-16 lg:px-10">
        <div className="lg:w-1/2">
          <SectionHeading
            id="features-title"
            title={
              <>
                Every movie you love, <Accent scrollRef={ref}>in one app.</Accent>
              </>
            }
            lead={`${brand.partner} is where movie night starts. Find what to watch, see where it's playing, buy the tickets and settle the "what are we watching" argument with your friends, all in one place.`}
            align="left"
            scrollRef={ref}
          />
        </div>
        <Reveal direction="right" className="w-full max-w-md lg:w-1/2" scrollRef={ref}>
          <Card>
            <ul className="space-y-3">
              {features.map(f => (
                <li key={f.title} className="flex gap-4 rounded-xl bg-slate-50 p-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-100 text-lg text-purple-700">
                    <f.Icon aria-hidden="true" />
                  </span>
                  <span className="leading-tight">
                    <span className="block font-bold">{f.title}</span>
                    <span className="block text-sm text-slate-600">{f.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Frame>
  );
};

export default AppFeatures;
