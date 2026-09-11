import Card from '@/components/Card';
import Frame from '@/components/Frame';
import Reveal from '@/components/Reveal';
import SectionHeading, { Accent } from '@/components/SectionHeading';
import type { Product } from '@/components/Sections/FloatingProduct';
import ProductLayer from '@/components/Sections/ProductLayer';
import { brand } from '@/content/brand';
import { productPhotos } from '@/content/products';
import type React from 'react';
import { FaCreditCard, FaTrophy } from 'react-icons/fa6';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

/** Desktop only, and only when the viewport is tall enough. */
const products: Product[] = [
  {
    name: 'Laptop',
    saved: '$210',
    image: productPhotos.laptop,
    className: 'hidden lg:tall:block bottom-[-14%] right-[-20vw] w-[min(44vw,70vh)] max-w-[900px]',
    coin: 'top-[35%] left-[20%]',
  },
  {
    name: 'Sunglasses',
    saved: '$35',
    image: productPhotos.sunglasses,
    className: 'hidden lg:tall:block rotate-12 top-[10%] left-[-6vw] w-[min(26vw,40vh)] max-w-[620px]',
    coin: '-rotate-12 top-[55%] left-[75%]',
  },
];

const Win = ({ scrollRef: ref }: Props) => {
  return (
    <Frame aria-labelledby="win-title" className="overflow-hidden">
      <ProductLayer products={products} scrollRef={ref} />
      <div className="relative z-10 flex grow w-full flex-col items-center justify-center gap-8 pt-6 lg:px-20">
        <SectionHeading
          id="win-title"
          title={
            <>
              Win more than <Accent scrollRef={ref}>movie night.</Accent>
            </>
          }
          lead={`Add titles to your Lit List and ${brand.partner} enters you for rewards, prizes and invites to premieres. Your Chase offers sit on top of all of it.`}
          scrollRef={ref}
        />
        <div className="grid w-full max-w-4xl gap-5 md:grid-cols-2">
          <Reveal direction="left" delay={0.3} scrollRef={ref} className="h-full">
            <Card className="h-full">
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-purple-700">
                <FaTrophy aria-hidden="true" /> Lit List
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  ['Rewards and prizes', 'drawn from your list'],
                  ['Premieres', 'invites to screenings'],
                  ['Exclusive events', 'members only'],
                ].map(([item, note]) => (
                  <li key={item} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-3">
                    <span className="font-bold">{item}</span>
                    <span className="text-xs text-slate-500">{note}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal direction="right" delay={0.5} scrollRef={ref} className="h-full">
            <Card className="h-full">
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-purple-700">
                <FaCreditCard aria-hidden="true" /> Your Chase offers
              </p>
              <div className="mt-4 rounded-xl bg-purple-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">First purchase</p>
                <p className="mt-1 text-3xl font-bold text-purple-700">{brand.offer.welcome} off</p>
                <p className="mt-1 text-sm text-slate-600">with a new {brand.offer.welcomeCard}</p>
              </div>
              <div className="mt-3 rounded-xl bg-emerald-100 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Every movie ticket</p>
                <p className="mt-1 text-3xl font-bold text-emerald-700">{brand.offer.ticket} off</p>
                <p className="mt-1 text-sm text-slate-600">with any {brand.offer.ticketCard}</p>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </Frame>
  );
};

export default Win;
