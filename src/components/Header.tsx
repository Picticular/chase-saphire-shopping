import chaseLogoWhite from '@/assets/chase-logo-white.svg';
import { brand } from '@/content/brand';
import Image from 'next/image';
import { FaEnvelopeOpenText } from 'react-icons/fa';

interface Props {
  id: string;
}

const Header = ({ id }: Props) => {
  return (
    <header id={id}>
      <div className="flex items-center justify-between py-5 px-7 text-white">
        <h1 className="flex items-center gap-3">
          <a
            href={brand.homeUrl}
            aria-label={`Visit the ${brand.issuer} website`}
            className="inline-block opacity-80 transition-opacity duration-150 ease-in hover:opacity-100 focus-visible:opacity-100"
          >
            <Image src={chaseLogoWhite} alt={brand.issuer} className="h-6 w-auto" priority />
          </a>
          <span className="hidden text-sm font-bold uppercase tracking-wide opacity-80 sm:inline">
            {brand.shortName}
          </span>
        </h1>
        <div className="flex items-center gap-5">
          <a
            href={brand.appUrl}
            className="hidden rounded-full bg-white px-4 py-1.5 text-sm font-bold text-purple-700 transition-opacity duration-150 ease-in hover:opacity-90 focus-visible:opacity-90 sm:inline-block"
          >
            Get the app
          </a>
          <a
            href={brand.contactUrl}
            aria-label="Contact us with questions"
            className="inline-block opacity-60 transition-opacity duration-150 ease-in hover:opacity-100 focus-visible:opacity-100"
          >
            <FaEnvelopeOpenText className="text-xl" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
