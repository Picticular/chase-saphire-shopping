import { brand } from '@/content/brand';
import { FaChrome } from 'react-icons/fa6';

interface Props {
  label?: string;
  className?: string;
}

const InstallButton = ({ label = "Add to Chrome. It's free.", className }: Props) => {
  const classNames = [
    'inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-lg font-bold text-purple-700 shadow-xl shadow-black/30 transition-transform duration-150 ease-out hover:scale-[1.03] focus-visible:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a href={brand.installUrl} className={classNames}>
      <FaChrome className="text-2xl" aria-hidden="true" />
      {label}
    </a>
  );
};

export default InstallButton;
