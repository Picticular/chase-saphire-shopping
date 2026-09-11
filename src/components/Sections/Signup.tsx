import Frame from '@/components/Frame';
import Reveal from '@/components/Reveal';
import SectionHeading, { Accent } from '@/components/SectionHeading';
import type { Product } from '@/components/Sections/FloatingProduct';
import ProductLayer from '@/components/Sections/ProductLayer';
import StoreBadges from '@/components/StoreBadges';
import { brand } from '@/content/brand';
import { productPhotos } from '@/content/products';
import type React from 'react';
import { type FormEvent, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa6';

interface Props {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

/** Desktop only, and only when the viewport is tall enough. */
const products: Product[] = [
  {
    name: 'Running shoes',
    saved: '$28',
    image: productPhotos.runningShoes,
    className: 'hidden lg:tall:block bottom-[4%] left-[-14vw] w-[min(42vw,60vh)] max-w-[900px]',
    coin: 'top-[58%] left-[78%]',
  },
  {
    name: 'Headphones',
    saved: '$61',
    image: productPhotos.headphones,
    className: 'hidden lg:tall:block top-[-8%] right-[-8vw] w-[min(24vw,50vh)] max-w-[520px]',
    coin: 'top-[62%] left-[35%]',
  },
];

const Signup = ({ scrollRef: ref }: Props) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Static export: there is no backend yet. See README "Things to know before editing".
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Frame aria-labelledby="signup-title" className="overflow-hidden">
      <ProductLayer products={products} scrollRef={ref} />
      <div className="relative z-10 flex grow w-full flex-col items-center justify-center gap-8 pt-6 pb-16 lg:px-20">
        <SectionHeading
          id="signup-title"
          title={
            <>
              Get the app and <Accent scrollRef={ref}>claim your {brand.offer.welcome}.</Accent>
            </>
          }
          lead={`${brand.partner} lives on your phone. Leave your email and we'll send a one-time link to download it and add your Chase card.`}
          scrollRef={ref}
        />
        <Reveal direction="up" delay={0.3} className="w-full max-w-lg" scrollRef={ref}>
          {submitted ? (
            <p className="rounded-2xl bg-white/10 p-6 text-center text-lg font-bold text-white" aria-live="polite">
              Thanks! Check your inbox for the download link.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="signup-email">
                Email address
              </label>
              <div className="relative grow">
                <FaEnvelope
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-purple-400"
                  aria-hidden="true"
                />
                <input
                  id="signup-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full rounded-full bg-white py-4 pl-11 pr-5 text-purple-1000 placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-purple-200 px-7 py-4 font-bold text-purple-900 transition-transform duration-150 ease-out hover:scale-[1.03] focus-visible:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Send me the link.
              </button>
            </form>
          )}
        </Reveal>
        <StoreBadges />
        <p className="max-w-3xl text-center text-xs leading-relaxed text-purple-200">{brand.legal}</p>
        <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-4 text-xs text-purple-200 sm:hidden">
          {brand.footerLinks.map(link => (
            <a key={link.label} href={link.href} className="underline">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </Frame>
  );
};

export default Signup;
