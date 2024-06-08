import { FC } from 'react';
import ContentLoader from 'react-content-loader';

interface ProductPageSkeleton {}

const ProductPageSkeleton: FC<ProductPageSkeleton> = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height="732px"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="12" ry="12" width="32.2%" height="600" />
    <rect x="34%" y="0" rx="12" ry="12" width="48%" height="600" />
    <rect x="84%" y="0" rx="12" ry="12" width="16%" height="600" />
    <rect x="0" y="630" rx="12" ry="12" width="32.2%" height="100" />
    <rect x="34%" y="630" rx="12" ry="12" width="66%" height="100" />
  </ContentLoader>
);

export default ProductPageSkeleton;
