import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import SkeletonLoading from 'src/components/SkeletonLoading';
import PaymentForm from '../PaymentForm';

import { useCreateIntentQuery } from 'src/store/query/paymentIntentApi';

import { RootState } from 'src/store';
import { StepProps } from 'src/type';

interface StepPaymentProps extends StepProps {}

const stripePromise = loadStripe(import.meta.env.VITE_APP_SPRITE_ACCESS_TOKEN);

const StepPayment: FC<StepPaymentProps> = ({ onLoadingChange }) => {
  const total = useSelector((state: RootState) => state.invoice.total);
  //-----------------delete SkeletonLoading temporarily --------------
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);
  //-----------------delete SkeletonLoading temporarily --------------
  const requestData = {
    amount: parseInt(total) * 100, // конвертируем в центы
    currency: 'eur',
  };
  const { data: clientSecret, isLoading } = useCreateIntentQuery(requestData);

  useEffect(() => {
    onLoadingChange(isLoading);
    console.log('stripe Intent data', clientSecret);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const options = {
    // passing the client secret obtained from the server
    locale: 'en',
  };

  return (
    <SkeletonLoading type="invoice" isLoading={isLoading}>
      <Elements
        stripe={stripePromise}
        options={{
          ...clientSecret,
          ...options,
        }}
      >
        <PaymentForm />
      </Elements>
    </SkeletonLoading>
  );
};

export default StepPayment;
