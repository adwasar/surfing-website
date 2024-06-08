import { FC, KeyboardEvent } from 'react';

import { ReviewCardT } from '../ProductReviews/ProductReviews';

import s from './ReviewsPagination.module.scss';

interface ReviewsPaginationProps {
  data: ReviewCardT[];
  handleClick: (index: number) => void;
  currentPage: number;
}

const ReviewsPagination: FC<ReviewsPaginationProps> = ({ data, handleClick, currentPage }) => {
  // TAB navigation
  const handleKeyPress = (event: KeyboardEvent<HTMLLIElement>, index: number) => {
    if (event.key === 'Enter') {
      handleClick(index + 1);
    }
  };
  return (
    <ul className={s.productPage__pagination}>
      {data.map((_, index) => (
        <li
          tabIndex={0}
          key={index}
          onClick={() => handleClick(index + 1)}
          onKeyDown={event => handleKeyPress(event, index)}
          className={currentPage === index + 1 ? s.active : ''}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
};

export default ReviewsPagination;
