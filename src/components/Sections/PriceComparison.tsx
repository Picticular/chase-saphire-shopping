import Card from '@/components/Card';
import Frame from '@/components/Frame';
import ProductPhoto from '@/components/ProductPhoto';
import Reveal from '@/components/Reveal';
import SectionHeading, { Accent } from '@/components/SectionHeading';
import type { Product } from '@/components/Sections/FloatingProduct';
import ProductLayer from '@/components/Sections/ProductLayer';
import { brand } from '@/content/brand';
import { productPhotos } from '@/content/products';
import type React from 'react';
import { FaStore } from 'react-icons/fa6';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

const offers = [
  { store: 'Store you are on', price: '$129.99', shipping: 'Free shipping' },
  { store: 'Retailer B', price: '$118.49', shipping: 'Free shipping', best: true },
  { store: 'Retailer C', price: '$124.00', shipping: '+ $5.99 shipping' },
];

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

const PriceComparison = ({ scrollRef: ref }: Props) => {
  return (
    <Frame aria-labelledby="compare-title" className="overflow-hidden">
      <ProductLayer products={products} scrollRef={ref} />
      <div className="relative z-10 flex grow w-full flex-col items-center justify-center gap-8 pt-6 lg:flex-row-reverse lg:gap-16 lg:px-10">
        <div className="lg:w-1/2">
          <SectionHeading
            id="compare-title"
            title={
              <>
                Don't miss out on a <Accent scrollRef={ref}>better price.</Accent>
              </>
            }
            lead={`While you shop, ${brand.product} quietly checks other retailers for the same item. If someone has it for less, including shipping, we tell you before you pay. Join ${brand.stats.shoppers} shoppers already comparing.`}
            align="left"
            scrollRef={ref}
          />
        </div>
        <Reveal direction="left" className="w-full max-w-md lg:w-1/2" scrollRef={ref}>
          <Card>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-purple-700">
              <FaStore aria-hidden="true" /> Same item, other stores
            </p>
            <div className="mt-4 flex items-center gap-4 rounded-xl bg-purple-50 p-3">
              <ProductPhoto image={productPhotos.headphones} className="h-20 w-24 shrink-0" />
              <div className="leading-tight">
                <p className="font-bold">Noise-cancelling headphones</p>
                <p className="text-sm text-slate-500">Black, wireless</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {offers.map(o => (
                <li
                  key={o.store}
                  className={[
                    'flex items-center justify-between rounded-lg px-3 py-3',
                    o.best ? 'bg-emerald-100 ring-2 ring-emerald-500' : 'bg-slate-50',
                  ].join(' ')}
                >
                  <span className="leading-tight">
                    <span className="block font-bold">{o.store}</span>
                    <span className="block text-xs text-slate-500">{o.shipping}</span>
                  </span>
                  <span className="text-right leading-tight">
                    <span className={['block text-lg font-bold', o.best ? 'text-emerald-700' : ''].join(' ')}>
                      {o.price}
                    </span>
                    {o.best && (
                      <span className="block text-xs font-bold uppercase tracking-wide text-emerald-700">
                        Lowest price
                      </span>
                    )}
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

export default PriceComparison;
