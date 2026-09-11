import Card from '@/components/Card';
import Frame from '@/components/Frame';
import Reveal from '@/components/Reveal';
import SectionHeading, { Accent } from '@/components/SectionHeading';
import type { Product } from '@/components/Sections/FloatingProduct';
import ProductLayer from '@/components/Sections/ProductLayer';
import { brand } from '@/content/brand';
import { productPhotos } from '@/content/products';
import type React from 'react';
import { FaCreditCard, FaFilm } from 'react-icons/fa6';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

/** Desktop only, and only when the viewport is tall enough. The comparison card is on the left here, so the cutout tucks under it. */
const products: Product[] = [
  {
    name: 'Headphones',
    saved: '$61',
    image: productPhotos.headphones,
    className: 'hidden lg:tall:block bottom-[-12%] left-[-6vw] w-[min(32vw,60vh)] max-w-[520px]',
    coin: 'top-[50%] left-[85%]',
  },
];

const TicketOffer = ({ scrollRef: ref }: Props) => {
  return (
    <Frame aria-labelledby="ticket-title" className="overflow-hidden">
      <ProductLayer products={products} scrollRef={ref} />
      <div className="relative z-10 flex grow w-full flex-col items-center justify-center gap-8 pt-6 lg:flex-row-reverse lg:gap-16 lg:px-10">
        <div className="lg:w-1/2">
          <SectionHeading
            id="ticket-title"
            title={
              <>
                <Accent scrollRef={ref}>{brand.offer.ticket} off</Accent> every movie ticket.
              </>
            }
            lead={`Buy a ticket in ${brand.partner} and pay with your ${brand.offer.ticketCard}: ${brand.offer.ticket} comes off. Any Chase credit card, any showing, as often as you go. The welcome offer is a one-off; this one keeps going.`}
            align="left"
            scrollRef={ref}
          />
        </div>
        <Reveal direction="left" className="w-full max-w-md lg:w-1/2" scrollRef={ref}>
          <Card>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-purple-700">
              <FaFilm aria-hidden="true" /> Your ticket
            </p>
            <div className="mt-4 rounded-xl bg-purple-50 p-4 leading-tight">
              <p className="font-bold">Friday, 7:30 PM</p>
              <p className="text-sm text-slate-500">2 adults, row F, seats 9 and 10</p>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-3">
                <span className="font-bold">2 tickets</span>
                <span className="text-lg font-bold">$32.00</span>
              </li>
              <li className="flex items-center justify-between rounded-lg bg-emerald-100 px-3 py-3 ring-2 ring-emerald-500">
                <span className="flex items-center gap-2 font-bold text-emerald-700">
                  <FaCreditCard aria-hidden="true" /> Paid with Chase
                </span>
                <span className="text-lg font-bold text-emerald-700">-{brand.offer.ticket}.00</span>
              </li>
            </ul>
            <div className="mt-4 flex items-end justify-between rounded-xl bg-purple-50 px-4 py-3">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">You pay</span>
              <span className="text-3xl font-bold text-purple-700">$22.00</span>
            </div>
          </Card>
        </Reveal>
      </div>
    </Frame>
  );
};

export default TicketOffer;
