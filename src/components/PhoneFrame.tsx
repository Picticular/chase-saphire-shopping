import Image, { type StaticImageData } from 'next/image';

interface Props {
  screenshot: StaticImageData;
  alt: string;
  /** iPhone gets the Dynamic Island, Android a centred punch-hole camera. */
  variant?: 'iphone' | 'android';
  className?: string;
  priority?: boolean;
}

/**
 * CSS-drawn phone bezel around an app screenshot. Sized by width; the screen keeps the
 * screenshot's aspect ratio. Screenshots come from the iPhone simulator (1206x2622).
 */
const PhoneFrame = ({ screenshot, alt, variant = 'iphone', className, priority = false }: Props) => {
  const isIphone = variant === 'iphone';

  return (
    <div
      className={[
        'relative shrink-0 bg-black shadow-[0_30px_50px_rgba(0,0,0,0.45)] ring-1 ring-white/20',
        isIphone ? 'rounded-[14%/6.5%] p-[3.2%]' : 'rounded-[10%/4.6%] p-[2.4%]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        className={['relative overflow-hidden bg-black', isIphone ? 'rounded-[11%/5%]' : 'rounded-[8%/3.7%]'].join(' ')}
      >
        <Image src={screenshot} alt={alt} className="block h-auto w-full" priority={priority} draggable={false} />
        {isIphone ? (
          <span className="absolute left-1/2 top-[1.6%] h-[3.4%] w-[32%] -translate-x-1/2 rounded-full bg-black" />
        ) : (
          // The simulator bakes the iOS status bar into the screenshot; paint an Android one over it.
          <span className="absolute inset-x-0 top-0 flex h-[5.2%] items-center justify-between bg-black px-[7%] text-[0.55em] font-semibold text-white">
            <span>9:41</span>
            <span className="absolute left-1/2 top-1/2 h-[42%] w-[5.6%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 ring-1 ring-neutral-700" />
            <span className="flex items-center gap-[0.3em]">
              <span className="inline-block h-[0.7em] w-[0.7em] rounded-[1px] bg-white [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
              <span className="inline-block h-[0.55em] w-[1.1em] rounded-[2px] bg-white" />
            </span>
          </span>
        )}
      </div>
      {isIphone ? (
        <>
          <span className="absolute -left-[1.2%] top-[17%] h-[3.5%] w-[1.2%] rounded-l-sm bg-neutral-800" />
          <span className="absolute -left-[1.2%] top-[23%] h-[6%] w-[1.2%] rounded-l-sm bg-neutral-800" />
          <span className="absolute -left-[1.2%] top-[31%] h-[6%] w-[1.2%] rounded-l-sm bg-neutral-800" />
          <span className="absolute -right-[1.2%] top-[25%] h-[9%] w-[1.2%] rounded-r-sm bg-neutral-800" />
        </>
      ) : (
        <>
          <span className="absolute -right-[1.2%] top-[20%] h-[5%] w-[1.2%] rounded-r-sm bg-neutral-700" />
          <span className="absolute -right-[1.2%] top-[27%] h-[9%] w-[1.2%] rounded-r-sm bg-neutral-700" />
        </>
      )}
    </div>
  );
};

export default PhoneFrame;
