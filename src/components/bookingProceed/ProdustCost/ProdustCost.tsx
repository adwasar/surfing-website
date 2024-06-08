import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Itemized } from '../Invoice';

import s from './ProdustCost.module.scss';

interface ProdustCostProps {
  items: Itemized[];
}

const ProdustCost: FC<ProdustCostProps> = ({ items }) => {
  const currency = 'EUR';
  const { t } = useTranslation();

  return (
    <ul className={s.product__list}>
      {items.map(item => (
        <li key={item.type} className={`${s.product__item} ${s['product__item--cost']}`}>
          <span className={s.product__cost}>{`${t('BookingProceed.Cost per day')}: ${
            item.cost
          }${currency}`}</span>
          <Link to={item.toPath} className={s.product__link}>
            {t('BookingProceed.' + item.type)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProdustCost;
