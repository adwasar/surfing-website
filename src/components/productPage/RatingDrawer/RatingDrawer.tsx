import { FC } from 'react';

import empty from 'src/assets/icons/empty-star.svg';
import full from 'src/assets/icons/full-star.svg';

interface RatingDrawerProps {
  rating: number;
  maxRating?: number;
  className: string;
}

const RatingDrawer: FC<RatingDrawerProps> = ({ rating, maxRating = 5, className }) => {
  const roundedRating = Math.round(rating);
  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    if (i < roundedRating) {
      stars.push(<img src={full} key={i}></img>);
    } else {
      stars.push(<img src={empty} key={i}></img>);
    }
  }

  return <div className={className}>{stars}</div>;
};

export default RatingDrawer;
