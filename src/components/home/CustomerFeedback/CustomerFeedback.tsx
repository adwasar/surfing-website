import { FC } from 'react';

import SliderCustomerFeedback from './SliderCustomerFeedback';

import s from './CustomerFeedback.module.scss';
import { useTranslation } from 'react-i18next';

interface CustomerFeedbackProps {}

const CustomerFeedback: FC<CustomerFeedbackProps> = () => {
  const { t } = useTranslation();

  return (
    <section className={s.customerFeedback}>
      <div className="container">
        <div className={s.customerFeedback__body}>
          <h2 className={s.customerFeedback__title}>
            {t('CustomerFeedback.Trusted by Thousands of Happy Customer')}
          </h2>
          <p className={s.customerFeedback__description}>
            {t(
              'CustomerFeedback.A high-performing web-based car rental system for any rent-a-car company and website'
            )}
          </p>
          <SliderCustomerFeedback />
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
