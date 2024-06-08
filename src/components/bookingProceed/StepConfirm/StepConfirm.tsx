import { FC, useEffect, useState } from 'react';

import Invoice from '../Invoice/Invoice';
import SkeletonLoading from 'src/components/SkeletonLoading/SkeletonLoading';

import { StepProps } from 'src/type';

interface StepConfirmProps extends StepProps {}

const StepConfirm: FC<StepConfirmProps> = ({ onLoadingChange }) => {
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
    <SkeletonLoading type="invoice" isLoading={isLoading}>
      <Invoice
        items={[
          {
            type: 'Surfboard',
            amount: 1,
            cost: 45,
            toPath: '/product/:1',
          },
          {
            type: 'Waxing',
            amount: 1,
            cost: 2,
            toPath: '/product/:2',
          },
        ]}
        location={{ name: 'Carrer de Pelai 11, Barcelona, Spain', toPath: '/map' }}
        date={{ begin: new Date('2024-04-02T15:00:00'), end: new Date('2024-04-24T14:00:00') }}
      />
    </SkeletonLoading>
  );
};

export default StepConfirm;
