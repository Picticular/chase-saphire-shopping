import '@/styles/globals.css';
import { MotionConfig } from 'framer-motion';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div className={`${montserrat.className} h-[100%] font-light`}>
        <Component {...pageProps} />
      </div>
    </MotionConfig>
  );
}
