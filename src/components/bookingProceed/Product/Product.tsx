import { FC } from 'react';

import { Itemized } from '../Invoice';

import s from './Product.module.scss';
import { useTranslation } from 'react-i18next';

interface ProductProps {
  items: Itemized[];
}

const Product: FC<ProductProps> = ({ items }) => {
  const { t } = useTranslation();

  return (
    <ul className={s.product__list}>
      {items.map(item => (
        <li key={item.type} className={s.product__item}>
          <div className={s.product__row}>
            <div className={s.product__col}>
              <div className={s.product__caption}>{t('BookingProceed.Type')}</div>
              <div className={s.product__info}>{t('BookingProceed.' + item.type)}</div>
            </div>
            <div className={s.product__col}>
              <div className={s.product__caption}>{t('BookingProceed.Amount')}</div>
              <div className={s.product__info}>{item.amount}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Product;
