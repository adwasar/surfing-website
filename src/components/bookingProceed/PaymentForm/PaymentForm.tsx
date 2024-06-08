import { FC, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button from 'src/components/ui/Button';

import { RootState } from 'src/store';

import s from './PaymentForm.module.scss';

interface PaymentFormProps {}

const PaymentForm: FC<PaymentFormProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const total = useSelector((state: RootState) => state.invoice.total);
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const handleReady = () => {
    setIsLoading(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!elements || !stripe) {
      return;
    }

    setIsLoading(true);

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError && submitError.message) {
      setErrorMessage(submitError.message);
      setIsLoading(true);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.href },
    });

    if (error && error.message) {
      navigate('/order', {
        state: {
          data: {
            result: false,
            message: error.message,
          },
        },
      });
    } else {
      navigate('/order', {
        state: {
          data: {
            result: true,
          },
        },
      });
    }

    setIsLoading(false);
  };

  return (
    <form className={s.paymentForm} onSubmit={handleSubmit}>
      <PaymentElement onReady={handleReady} />
      <Button
        mods={['modColorPrime', 'modSize1']}
        type="submit"
        disabled={!stripe || !elements || isLoading}
      >
        {`Pay ${total}EUR`}
      </Button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default PaymentForm;
