import { FC, useState } from 'react';

import ProductNav from 'src/components/productPage/ProductNav';
import ProductImage from 'src/components/productPage/ProductImage';
import ProductAbout from 'src/components/productPage/ProductAbout';
import ExtraOptions from 'src/components/productPage/ExtraOptions/ExtraOptions';
import ProductReviews from 'src/components/productPage/ProductReviews';
import BookingBlock from 'src/components/productPage/BookingBlock';
import SkeletonLoading from 'src/components/SkeletonLoading';

import s from './Product.module.scss';

interface ProductProps {}

const Product: FC<ProductProps> = () => {
  const [isLoading, setIsLoading] = useState(true);

  //! temporary mock request
  setTimeout(() => setIsLoading(false), 2000);

  return (
    <div className={s.productPage}>
      <div className="container">
        <ProductNav />
        <SkeletonLoading type="product-page" isLoading={isLoading}>
          <div className={s.productPage__gridLayout}>
            <ProductImage />
            <ProductAbout />
            <ExtraOptions />
            <ProductReviews />
            <BookingBlock />
          </div>
        </SkeletonLoading>
      </div>
    </div>
  );
};

export default Product;
