import { FC, useEffect, useState } from 'react';

import Button from 'src/components/ui/Button';

import s from './OrderResult.module.scss';

interface OrderResultProps {
  result: boolean;
  message: string;
}

const OrderResult: FC<OrderResultProps> = ({ result }) => {
  const [isSuccessful, setIsSuccessful] = useState(true);
  const mods = ['fontFamOpSans', 'modSize1', 'modColorPrime'];

  useEffect(() => {
    result ? setIsSuccessful(false) : setIsSuccessful(true);
  }, [result]);

  return (
    <section className={s.order}>
      <div className={s.order__header}>
        <h2 className={s.order__title}>
          {isSuccessful
            ? 'Payment successful. Check your email'
            : 'Payment was declined. Please try again'}
        </h2>
        <p className={s.order__description}>
          {isSuccessful
            ? 'We’ve sent you confirmation email. Check inbox or spam folder'
            : 'There was a problem regarding your payment. Check you card details and try again please'}
        </p>
      </div>
      <div className={s.order__buttons}>
        {isSuccessful ? (
          <Button mods={mods}>Open email</Button>
        ) : (
          <Button to="#" mods={mods}>
            Back to my order
          </Button>
        )}
        <Button mods={['link']} to="/">
          back to home
        </Button>
      </div>
    </section>
  );
};

export default OrderResult;
