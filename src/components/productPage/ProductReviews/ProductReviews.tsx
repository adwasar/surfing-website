import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import SectionTitle from 'src/components/ui/SectionTitle';
import ReviewsPagination from '../ReviewsPagination';
import ReviewsCard from '../ReviewsCard';

import reviewAvatar from 'src/public/images/user-avatar.png';

import s from './ProductReviews.module.scss';

export type ReviewCardT = {
  id: number;
  avatar: string;
  name: string;
  reviewCount: number;
  rating: number;
  created: Date | string;
  text: string;
};

interface ProductReviewsProps {}

const reviewsData: ReviewCardT[] = [
  {
    id: 1,
    avatar: reviewAvatar,
    name: 'Cathenna',
    rating: 5,
    reviewCount: 1,
    created: '0 month ago',
    text: 'I’m really happy to collaborate with Roomy, I’ve started a year ago and it’s really comfortable to communicate with them. Only thing market went down a bit, but generally the service is good',
  },
  {
    id: 2,
    avatar: reviewAvatar,
    name: 'Cathenna',
    rating: 3,
    reviewCount: 2,
    created: '1 month ago',
    text: 'I’m really happy to collaborate with Roomy, I’ve started a year ago and it’s really comfortable to communicate with them. Only thing market went down a bit, but generally the service is good',
  },
  {
    id: 3,
    avatar: reviewAvatar,
    name: 'Cathenna',
    rating: 2,
    reviewCount: 3,
    created: '2 month ago',
    text: 'I’m really happy to collaborate with Roomy, I’ve started a year ago and it’s really comfortable to communicate with them. Only thing market went down a bit, but generally the service is good',
  },
  {
    id: 33,
    avatar: reviewAvatar,
    name: 'Cathenna',
    rating: 2,
    reviewCount: 9,
    created: '3 month ago',
    text: 'I’m really happy to collaborate with Roomy, I’ve started a year ago and it’s really comfortable to communicate with them. Only thing market went down a bit, but generally the service is good',
  },
  {
    id: 4,
    avatar: reviewAvatar,
    name: 'Cathenna',
    rating: 4,
    reviewCount: 81,
    created: '9 month ago',
    text: 'I’m really happy to collaborate with Roomy, I’ve started a year ago and it’s really comfortable to communicate with them. Only thing market went down a bit, but generally the service is good',
  },
  {
    id: 43,
    avatar: reviewAvatar,
    name: 'Cathenna',
    rating: 4,
    reviewCount: 2,
    created: '152 month ago',
    text: 'I’m really happy to collaborate with Roomy, I’ve started a year ago and it’s really comfortable to communicate with them. Only thing market went down a bit, but generally the service is good',
  },
];

const ProductReviews: FC<ProductReviewsProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber: number) => setCurrentPage(pageNumber);

  const { t } = useTranslation();

  const reviewsPerPage = 1;
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewsData.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <div className={`${s.productPage__productReviews} ${s.bordered}`}>
      <SectionTitle text={t('ProductPage.Reviews about the gear')} />

      {currentReviews.map(review => (
        <ReviewsCard key={currentPage} review={review} />
      ))}

      <span className={s.divider} />

      <ReviewsPagination currentPage={currentPage} data={reviewsData} handleClick={handleClick} />
    </div>
  );
};

export default ProductReviews;
