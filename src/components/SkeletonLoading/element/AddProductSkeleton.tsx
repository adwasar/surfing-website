import { FC } from 'react';
import ContentLoader from 'react-content-loader';

import SurfIcon from 'src/assets/icons/surf.svg?react';

interface AddProductSkeletonProps {}

const AddProductSkeleton: FC<AddProductSkeletonProps> = () => (
  <>
    <SurfIcon width="100%" height="70%" />
    <ContentLoader viewBox="0 0 400 200" height="30%" width="100%">
      <rect x="25" y="15" rx="5" ry="5" width="80%" height="10" />
      <rect x="25" y="45" rx="5" ry="5" width="50%" height="10" />
    </ContentLoader>
  </>
);

export default AddProductSkeleton;
