import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Invoice from '../Invoice';
import SkeletonLoading from 'src/components/SkeletonLoading/SkeletonLoading';

import { StepProps } from 'src/type';
import { RootState } from 'src/store';

interface StepSummaryProps extends StepProps {}

const StepSummary: FC<StepSummaryProps> = ({ onLoadingChange }) => {
  const invoice = useSelector((state: RootState) => state.invoice);
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
      <Invoice items={invoice.items} location={invoice.location} date={invoice.date} isTotal />
    </SkeletonLoading>
  );
};

export default StepSummary;
