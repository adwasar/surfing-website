import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { LinkPath } from 'src/type';
import s from './SelectProduct.module.scss';

interface Product {
  name: string;
  cost: number;
  photoUrl: string;
  toPath: LinkPath;
}

interface SelectProductProps {
  items: Product[];
}

const SelectProduct: FC<SelectProductProps> = ({ items }) => {
  const currency = 'EUR';
  const { t } = useTranslation();

  return (
    <div className={s.products}>
      <ul className={s.products__list}>
        {items.map(item => (
          <li key={item.name} className={s.products__item}>
            <Link to={item.toPath} className={s.product}>
              <div className={s.product__pic}>
                <img src={item.photoUrl} alt={item.name} className={s.product__img} />
              </div>
              <div className={s.product__footer}>
                <div className={s.product__name}>{item.name}</div>
                <div className={s.product__cost}>{`${item.cost}${currency}/${t(
                  'BookingProceed.day'
                )}`}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectProduct;
