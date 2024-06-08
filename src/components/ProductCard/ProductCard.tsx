import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import FavoriteIcon from 'src/assets/icons/favorite-icon.svg?react';
import FavoriteIconFill from 'src/assets/icons/favorite-icon-fill.svg?react';

import s from './ProductCard.module.scss';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    date: string;
    price: number;
    favorite: boolean;
    subCategory: string | null;
    url: string[];
  };
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { id, name, url, date, price, subCategory, favorite } = product;
  const [isFavorite, setIsFavorite] = useState(favorite);
  const { t } = useTranslation();

  const [month, start, hyphen, end] = date.split(' ');
  const translatedDate = `${t('Month.' + month)} ${start} ${hyphen} ${end}`;
  console.log(date);

  const addToFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={s.productCard}>
      <button className={s.productCard__favorite} onClick={addToFavorite}>
        {isFavorite ? <FavoriteIconFill /> : <FavoriteIcon />}
      </button>
      <Link className={s.productCard__content} to={`/product/:${id}`}>
        <img className={s.image} src={url[0]} alt={name} />
        <div className={s.content}>
          {subCategory && (
            <div className={s.productCard__subCategory}>{t('BookYourTravel.' + subCategory)}</div>
          )}
          <div className={s.productCard__information}>
            <h4 className={s.productCard__productName}>{name}</h4>
            <div className={s.productCard__footer}>
              <span className={s.date}>{translatedDate}</span>
              <span className={s.price}>
                ${price} {t('BookYourTravel.day')}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
