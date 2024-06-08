import { FC } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useTranslation } from 'react-i18next';

import { ReviewCardT } from '../ProductReviews/ProductReviews';
import RatingDrawer from '../RatingDrawer';

import s from './ReviewsCard.module.scss';

interface ReviewsCardProps {
  review: ReviewCardT;
}

const ReviewsCard: FC<ReviewsCardProps> = ({ review }) => {
  const { t } = useTranslation();

  const translateReviewCreated = (str: string) => {
    const [count] = str.split(' ');
    return t(`ProductPage.month ago`, { count: +count });
  };

  const springs = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 900 },
  });

  return (
    <animated.div style={springs} className={s.reviewsCard}>
      <div className={s.reviewsCard__head}>
        <img className={s.reviewsCard__avatar} src={review.avatar} alt="user avatar" />
        <div className={s.colspan}>
          <p className={s.reviewsCard__name}>{review.name}</p>
          <span className={s.reviewsCard__reviewCount}>
            {t(`ProductPage.userReviews`, { count: review.reviewCount })}
          </span>
        </div>
        <div>
          <RatingDrawer className={s.reviewsCard__rating} rating={review.rating} />
          <div className={s.reviewsCard__creation}>
            {translateReviewCreated(review.created as string)}
          </div>
        </div>
      </div>
      <p className={s.reviewsCard__text}>{review.text}</p>
    </animated.div>
  );
};

export default ReviewsCard;
