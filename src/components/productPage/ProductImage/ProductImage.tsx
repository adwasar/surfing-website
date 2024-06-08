import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import productImage from 'src/public/images/productCard.png';
import Button from 'src/components/ui/Button';

import s from './ProductImage.module.scss';

interface ProductImageProps {}

const ProductImage: FC<ProductImageProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={s.productPage__productImg}>
      {/* GET alt item title from props item.tite */}
      <img src={productImage} alt="" />
      <div className={s.modalTrigger}>
        <Button
          // TODO make MODAL provider and modal component
          onClick={() => {
            alert('TODO make MODAL provider and MODAL component');
          }}
          mods={['']}
        >
          {t('ProductPage.See all photos')}
        </Button>
      </div>
    </div>
  );
};

export default ProductImage;
