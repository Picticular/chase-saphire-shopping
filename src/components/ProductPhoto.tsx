import Image, { type StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  className?: string;
  priority?: boolean;
}

// Product names are supplied by the adjacent text, so the photos are decorative.
const ProductPhoto = ({ image, className = '', priority = false }: Props) => (
  <Image src={image} alt="" className={`object-contain ${className}`} priority={priority} draggable={false} />
);

export default ProductPhoto;
