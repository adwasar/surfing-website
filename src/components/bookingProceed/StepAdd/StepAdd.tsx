import { FC, useEffect, useState } from 'react';

import SelectProduct from '../SelectProduct';
import SkeletonLoading from 'src/components/SkeletonLoading';

import { StepProps } from 'src/type';

interface StepAddProps extends StepProps {}
const items = [
  {
    name: 'Board leash',
    cost: 2,
    photoUrl: '/images/BookingProceed/product.png',
    toPath: '/',
  },
  {
    name: 'Board leash Board leash',
    cost: 2,
    photoUrl: '/images/BookingProceed/product.png',
    toPath: '/',
  },
  {
    name: 'Board leash1',
    cost: 2,
    photoUrl: '/images/BookingProceed/product.png',
    toPath: '/',
  },
  {
    name: 'Board leash2',
    cost: 2,
    photoUrl: '/images/BookingProceed/product.png',
    toPath: '/',
  },
  {
    name: 'Board leash3',
    cost: 2,
    photoUrl: '/images/BookingProceed/product.png',
    toPath: '/',
  },
  {
    name: 'Board leash4',
    cost: 2,
    photoUrl: '/images/BookingProceed/product.png',
    toPath: '/',
  },
  {
    name: 'Board leash5',
    cost: 2,
    photoUrl: '/images/BookingProceed/product.png',
    toPath: '/',
  },
  {
    name: 'Board leash6',
    cost: 2,
    photoUrl: '/images/BookingProceed/product.png',
    toPath: '/',
  },
  {
    name: 'Board leash7',
    cost: 2,
    photoUrl: '/images/BookingProceed/product.png',
    toPath: '/',
  },
  {
    name: 'Board leash8',
    cost: 2,
    photoUrl: '/images/BookingProceed/product.png',
    toPath: '/',
  },
  {
    name: 'Board leash9',
    cost: 2,
    photoUrl: '/images/BookingProceed/product.png',
    toPath: '/',
  },
];

const StepAdd: FC<StepAddProps> = ({ onLoadingChange }) => {
  //-----------------delete SkeletonLoading temporarily --------------
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  //-----------------delete SkeletonLoading temporarily --------------

  useEffect(() => {
    onLoadingChange(isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <SkeletonLoading style={{ height: '400px' }} isLoading={isLoading}>
      <SelectProduct items={items} />
    </SkeletonLoading>
  );
};

export default StepAdd;
