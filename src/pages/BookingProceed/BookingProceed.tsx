import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { setDate, setItems, setLocation } from 'src/store/slice/invoiceSlice';

import StepAdd from 'src/components/bookingProceed/StepAdd/';
import StepPayment from 'src/components/bookingProceed/StepPayment/';
import StepConfirm from 'src/components/bookingProceed/StepConfirm';
import StepSummary from 'src/components/bookingProceed/StepSummary';
import Button from 'src/components/ui/Button/Button';

import { useMultiStep } from 'src/utils/';

import s from './BookingProceed.module.scss';

interface BookingProceedProps {}

const BookingProceed: FC<BookingProceedProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const { step, next } = useMultiStep([
    {
      elem: <StepConfirm onLoadingChange={setIsLoading} />,
      title: t('BookingProceed.Confirm your selection'),
      button: { name: t('BookingProceed.Continue') },
    },
    {
      elem: <StepAdd onLoadingChange={setIsLoading} />,
      title: t('BookingProceed.Add to your list'),
      button: { name: t('BookingProceed.Continue') },
    },
    {
      elem: <StepSummary onLoadingChange={setIsLoading} />,
      title: t('BookingProceed.Summary'),
      button: { name: t('BookingProceed.Proceed to payment') },
    },
    { elem: <StepPayment onLoadingChange={setIsLoading} />, title: t('BookingProceed.Payment') },
  ]);
  const dispatch = useDispatch();

  dispatch(
    setItems([
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
    ])
  );
  dispatch(setLocation({ name: 'Carrer de Pelai 11, Barcelona, Spain', toPath: '/' }));
  dispatch(
    setDate({ begin: new Date('2024-04-02T15:00:00'), end: new Date('2024-04-24T14:00:00') })
  );

  return (
    <div className={s.proceed}>
      <div className={s.proceed__container}>
        <h2 className={s.proceed__title}>{step.title}</h2>
        <div className={s.proceed__in}>
          <div className={s.proceed__step}>{step.elem}</div>
          {!isLoading ? (
            <div className={s.proceed__control}>
              {step.button ? (
                <Button mods={['modColorPrime', 'modSize1']} onClick={next} href={step.button.href}>
                  {step.button.name}
                </Button>
              ) : null}
              <Link to="/" className={s.proceed__link}>
                {t('BookingProceed.cancel selection')}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BookingProceed;
