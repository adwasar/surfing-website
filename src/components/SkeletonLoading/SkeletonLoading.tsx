import { CSSProperties, FC, ReactNode } from 'react';

import ImageSkeleton from './element/ImageSkeleton';
import DefaultSkeleton from './element/DefaultSkeleton';
import InvoiceSkeleton from './element/InvoiceSkeleton';
import ProductCardSkeleton from './element/ProductCardSkeleton';
import ProductPageSkeleton from './element/ProductPageSkeleton';

type ContentType = 'image' | 'invoice' | 'product-cards' | 'product-page';

interface SkeletonLoadingProps {
  type?: ContentType;
  isLoading: boolean;
  children: ReactNode;
  style?: CSSProperties;
}

const SkeletonLoading: FC<SkeletonLoadingProps> = ({ type, isLoading, children, style }) => {
  if (isLoading) {
    switch (type) {
      case 'image':
        return <ImageSkeleton />;
      case 'invoice':
        return <InvoiceSkeleton />;
      case 'product-cards':
        return [...Array(12)].map((_, i) => <ProductCardSkeleton key={i} />);
      case 'product-page':
        return <ProductPageSkeleton />;
      default:
        return <DefaultSkeleton style={style} />;
    }
  }
  return <>{children}</>;
};

export default SkeletonLoading;
