import FloatingProduct, { type Product } from '@/components/Sections/FloatingProduct';
import type React from 'react';

interface Props {
  products: Product[];
  className?: string;
  scrollRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Decorative layer of product cutouts behind a section's content. Put it inside a
 * `<Frame className="overflow-hidden">` and give the content `relative z-10`.
 */
const ProductLayer = ({ products, className = 'absolute inset-0', scrollRef }: Props) => (
  <div className={`pointer-events-none ${className}`} aria-hidden="true">
    {products.map((product, index) => (
      <FloatingProduct key={product.name} {...product} index={index} scrollRef={scrollRef} />
    ))}
  </div>
);

export default ProductLayer;
