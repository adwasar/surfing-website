import { FC } from 'react';

import Button from 'src/components/ui/Button';
import arrowLeft from 'src/assets/icons/arrow-left.svg';

import s from './ProductNav.module.scss';

interface ProductNavProps {}

const ProductNav: FC<ProductNavProps> = () => {
  return (
    <div className={s.productPage__navigation}>
      <Button to="/booking" mods={[]}>
        <img src={arrowLeft} alt="Back to booking" />
      </Button>
    </div>
  );
};

export default ProductNav;
