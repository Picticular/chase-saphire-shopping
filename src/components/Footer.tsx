import { brand } from '@/content/brand';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const containerClasses = 'flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-6 py-3';
  const classNames = [containerClasses, className].filter(Boolean).join(' ');

  const d = new Date();

  return (
    <footer className={classNames}>
      <div className="text-center text-xs text-slate-300">
        &copy; {d.getFullYear()} {brand.copyrightHolder}
      </div>
      <nav aria-label="Footer" className="hidden flex-wrap justify-center gap-x-4 text-xs text-slate-300 sm:flex">
        {brand.footerLinks.map(link => (
          <a key={link.label} href={link.href} className="hover:text-white focus-visible:text-white">
            {link.label}
          </a>
        ))}
      </nav>
      <p className="w-full text-center text-[10px] leading-tight text-slate-400">{brand.trademarkNotice}</p>
    </footer>
  );
};

export default Footer;
