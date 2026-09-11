import appStoreBadge from '@/assets/app-store-badge.svg';
import googlePlayBadge from '@/assets/google-play-badge.png';
import { brand } from '@/content/brand';
import Image from 'next/image';

interface Props {
  className?: string;
}

/**
 * Official App Store and Google Play badges, unmodified per both stores' guidelines.
 * Google's PNG ships with ~16% transparent padding, so it is drawn taller with negative
 * margins to land at the same visible height as Apple's.
 */
const StoreBadges = ({ className }: Props) => {
  const classNames = ['flex flex-wrap items-center justify-center gap-4', className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <a
        href={brand.appStoreUrl}
        className="rounded-lg transition-transform duration-150 ease-out hover:scale-[1.03] focus-visible:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <Image src={appStoreBadge} alt="Download on the App Store" className="h-12 w-auto" priority />
      </a>
      <a
        href={brand.playStoreUrl}
        className="-m-[0.73rem] rounded-lg transition-transform duration-150 ease-out hover:scale-[1.03] focus-visible:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white"
      >
        <Image src={googlePlayBadge} alt="Get it on Google Play" className="h-[4.46rem] w-auto" priority />
      </a>
    </div>
  );
};

export default StoreBadges;
