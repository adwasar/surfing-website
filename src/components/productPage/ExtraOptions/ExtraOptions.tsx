import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import CustomCheckbox from 'src/components/ui/CustomCheckbox';

import s from './ExtraOptions.module.scss';

interface ExtraOptionsProps {}

const extraOptionsData = [
  'Wetsuit',
  'Surfboard leash',
  'Additional wax',
  'Traction Pad',
  'Fins',
  'Fin Key and Screws',
  'Board Bag',
  'Rash Guard',
  'Surf Earplugs',
  'Ding Repair Kit',
  'Surf Watch',
];

const ExtraOptions: FC<ExtraOptionsProps> = () => {
  const { t } = useTranslation();

  const handleChecked = (value: boolean, item: string) => {
    console.log(value, item);
  };

  return (
    <div className={s.productPage__extraOptions}>
      <h3 className={s.productPage__extraOptions__title}>{t('ProductPage.Add to list')}:</h3>
      <ul className={s.productPage__extraOptions__list}>
        {extraOptionsData.map((item, idx) => (
          <li key={idx}>
            <CustomCheckbox handleChecked={handleChecked} item={t('ProductPage.' + item)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtraOptions;
