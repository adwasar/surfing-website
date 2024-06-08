import { FC } from 'react';

import s from '../SkeletonLoading.module.scss';

interface ImageSkeletonProps {}

const ImageSkeleton: FC<ImageSkeletonProps> = () => {
  return <div className={`${s.skeleton} ${s['skeleton--img']}`}></div>;
};

export default ImageSkeleton;
