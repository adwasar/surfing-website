import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import s from './Metrics.module.scss';

interface MetricsProps {}

interface MetricCard {
  title: string;
  text: string;
}

const Metrics: FC<MetricsProps> = () => {
  const { t } = useTranslation();

  const cards: MetricCard[] = useMemo(
    () => [
      { text: '5000+', title: t('LocationsSection.Total Listings in the System') },
      { text: '35', title: t('LocationsSection.Countries') },
      { text: '15' + t('LocationsSection.thousandShort'), title: t('LocationsSection.Users') },
    ],
    [t]
  );

  return (
    <div className={s.metrics}>
      <h3 className={s.title}>{t('LocationsSection.Insights and Performance Metrics')}</h3>
      <div className={s.cards}>
        {cards.map((card, i) => (
          <div key={i} className={s.card}>
            <h4 className={s.cardTitle}>{card.title}</h4>
            <p className={s.cardText}>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
