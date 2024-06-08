import { FC } from 'react';

import SurfIcon from 'src/assets/icons/surf.svg?react';

import s from './ProductCardSkeleton.module.scss';

interface ProductCardSkeleton {}

const ProductCardSkeleton: FC<ProductCardSkeleton> = () => {
  return (
    <div className={s.productCardSceleton}>
      <div className={s.image}>
        <SurfIcon />
      </div>
      <span className={s.text1}></span>
      <div className={s.footer}>
        <span className={s.text2}></span>
        <span className={s.text3}></span>
      </div>
      <span className={s.favorite}></span>
    </div>
  );
};
export default ProductCardSkeleton;
