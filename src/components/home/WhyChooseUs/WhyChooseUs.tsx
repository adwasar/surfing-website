import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import he from 'he';

import PhoneIcon from 'src/assets/icons/phone.svg?react';
import PriceTagsIcon from 'src/assets/icons/price-tags.svg?react';
import LocationIcon from 'src/assets/icons/location.svg?react';

import s from './WhyChooseUs.module.scss';

interface Item {
  svg: ReactElement;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    svg: <PhoneIcon />,
    title: 'Customer Support',
    description:
      'Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.',
  },
  {
    svg: <PriceTagsIcon />,
    title: 'Best Price Guarantted',
    description:
      'Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.',
  },
  {
    svg: <LocationIcon />,
    title: 'Many Location',
    description:
      'Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.',
  },
];

interface WhyChooseUsProps {}

const WhyChooseUs: FC<WhyChooseUsProps> = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <h2 className={s.sectionTitle}>{he.decode(t('WhyChooseUs.Why Choose Us'))}</h2>
        <p className={s.sectionSubtitle}>
          {t(
            'WhyChooseUs.A high-performing web-based car rental system for any rent-a-car company and website'
          )}
        </p>
        <div className={s.sectionWrapper}>
          <div className={s.sectionImage}>
            <img src="/images/empty-photo.png" alt="Avatar" />
          </div>
          <div className={s.items}>
            {items.map((item, i) => (
              <div className={s.item} key={i}>
                <div className={s.iconContainer}>{item.svg}</div>
                <div className={s.textWrapper}>
                  <h3 className={s.itemTitle}>{t('WhyChooseUs.' + item.title)}</h3>
                  <p className={s.itemDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
