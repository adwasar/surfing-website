import { FC } from 'react';
import ContentLoader from 'react-content-loader';

import SurfIcon from 'src/assets/icons/surf.svg?react';

interface InvoiceSkeletonProps {}

const InvoiceSkeleton: FC<InvoiceSkeletonProps> = () => (
  <ContentLoader viewBox="0 0 400 200" height="100%" width="100%">
    <SurfIcon width="30px" height="30px" />
    <rect x="25" y="15" rx="5" ry="5" width="30%" height="10" />
    <rect x="45%" y="15" rx="5" ry="5" width="30" height="10" />
    <rect x="25" y="45" rx="5" ry="5" width="30%" height="10" />
    <rect x="45%" y="45" rx="5" ry="5" width="30" height="10" />
    <rect x="25" y="75" rx="5" ry="5" width="90%" height="10" />
    <rect x="25" y="105" rx="5" ry="5" width="70%" height="10" />
    <rect x="85%" y="105" rx="5" ry="5" width="30" height="10" />
    <rect x="25" y="135" rx="5" ry="5" width="90%" height="10" />
    <rect x="25" y="165" rx="5" ry="5" width="30%" height="10" />
  </ContentLoader>
);

export default InvoiceSkeleton;
