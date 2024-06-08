import { FC } from 'react';

import chatIcon from 'src/assets/icons/chat-icon.svg';
import SectionTitle from 'src/components/ui/SectionTitle';

import s from './ProductAbout.module.scss';
import { useTranslation } from 'react-i18next';

interface ProductAboutProps {}

const productListData: ListItemT[] = [
  { fieldName: 'Name', fieldValue: 'Aqua Glide Pro' },
  { fieldName: 'Length', fieldValue: '173 cm' },
  { fieldName: 'Width', fieldValue: '50 cm' },
  { fieldName: 'Thickness', fieldValue: '20 cm' },
  { fieldName: 'Type', fieldValue: 'Surf board' },
  { fieldName: 'Volume', fieldValue: '173 cm' },
  { fieldName: 'Tail shape', fieldValue: 'Square' },
  { fieldName: 'Nose shape', fieldValue: 'Pointed' },
  { fieldName: 'Material', fieldValue: 'Plastic' },
  { fieldName: 'Rails', fieldValue: 'Soft' },
  { fieldName: 'Rocker', fieldValue: 'High nose rocker' },
];

type ListItemT = {
  fieldName: string;
  fieldValue: string;
};

const ProductAbout: FC<ProductAboutProps> = () => {
  const { t } = useTranslation();

  const translateFieldValue = (str: string) => {
    if (str.includes('cm')) {
      return str.replace('cm', t('ProductPage.cm'));
    }
    return t('ProductPage.' + str);
  };

  return (
    <div className={s.productPage__productInfo}>
      <div className={s.productPage__productInfo__about}>
        <SectionTitle text={t('ProductPage.About the gear')} />
        <ul className={s.infoList}>
          {productListData.map((item, idx) => (
            <li key={idx}>
              <h4>{t('ProductPage.' + item.fieldName)}</h4>
              <p className={s.bordered}>{translateFieldValue(item.fieldValue)}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={s.productPage__productInfo__description}>
        <SectionTitle text={t('ProductPage.Description')} />
        <p className={s.bordered}>{t('ProductPage.DescriptionP')}</p>
      </div>
      <div className={s.productPage__productInfo__buttonGroup}>
        <button onClick={() => alert('open chat')} className={s.primary__btn}>
          <img src={chatIcon} alt="Get help about the gear" />
          {t('ProductPage.Get help about the gear')}
        </button>
        {/* <Button
          onClick={() => alert('open chat')}
          mods={['modColorPrime', 'modSize1', `${style.primary__btn}`]}
    
          children={
            <>
              <img src={chatIcon} alt="Get help about the gear" />
              Get help about the gear
            </>
          }
        ></Button> */}
        <button className={s.default__btn}>{t('ProductPage.Contact support')}</button>
        <button className={s.default__btn}>{t('ProductPage.View full shop')}</button>
      </div>
    </div>
  );
};

export default ProductAbout;
