import { FC, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useTranslation } from 'react-i18next';

import SearchIcon from 'src/assets/icons/search.svg?react';
import ButtonCalendar from 'src/components/ui/ButtonCalendar';
import DropdownList from 'src/components/ui/DropDownList';
import Button from 'src/components/ui/Button';

import i18n from 'src/localization/i18n';
import data from './data';

import s from './Form.module.scss';

interface FormProps {}

const Form: FC<FormProps> = () => {
  const [areaValue, setAreaValue] = useState<number | null>(null);
  const [fromDateValue, setFromDateValue] = useState<Dayjs | null>(null);
  const [toDateValue, setToDateValue] = useState<Dayjs | null>(null);

  const { t } = useTranslation();

  const handleSubmit = () => {
    const formData = {
      sportType: areaValue,
      location: areaValue,
      dateFrom: fromDateValue,
      dateTo: toDateValue,
    };

    console.log(formData);
  };

  const handleAreaValue = (id: number) => {
    setAreaValue(id);
  };

  const handleFromDateValue = (value: Dayjs) => {
    const currentDate = dayjs();
    if (value.isAfter(currentDate, 'day') || value.isSame(currentDate, 'day')) {
      if (toDateValue) {
        if (toDateValue.isAfter(value, 'day') || toDateValue.isSame(value, 'day')) {
          setFromDateValue(value);
        } else {
          setFromDateValue(toDateValue);
        }
      } else {
        setFromDateValue(value);
      }
    } else {
      setFromDateValue(currentDate);
    }
  };

  const handleToDateValue = (value: Dayjs) => {
    const currentDate = dayjs();
    if (value.isAfter(currentDate, 'day') || value.isSame(currentDate, 'day')) {
      if (fromDateValue) {
        if (value.isAfter(fromDateValue, 'day') || value.isSame(fromDateValue, 'day')) {
          setToDateValue(value);
        } else {
          const newToDateValue = fromDateValue.add(1, 'day');
          setToDateValue(newToDateValue);
        }
      } else {
        setToDateValue(value);
      }
    } else {
      setToDateValue(currentDate);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h1 className={s.form__title}>{t('Hero.Try water sport in different way')}</h1>
      <div className={s.form__select}>
        <DropdownList
          text={t('Hero.Select sport type')}
          placeholder={t('Hero.Choose your sport type')}
          data={data.sportType}
          action={handleAreaValue}
          mods={['secondary']}
          key={`${i18n.language}-sportType`}
        />
      </div>
      <div className={s.form__select}>
        <DropdownList
          text={t('Hero.Choose location')}
          placeholder={t('Hero.Choose your location')}
          data={data.location}
          action={handleAreaValue}
          mods={['secondary']}
          key={`${i18n.language}-location`}
        />
      </div>
      <div className={s.form__calendar}>
        <div className={s.form__selectDate}>
          <ButtonCalendar
            text={t('Hero.From')}
            placeholder={t('Hero.Add dates')}
            value={fromDateValue}
            action={handleFromDateValue}
            mods={['secondary']}
          />
        </div>
        <div className={s.form__divider}></div>
        <div className={s.form__selectDate}>
          <ButtonCalendar
            text={t('Hero.To')}
            placeholder={t('Hero.Add dates')}
            value={toDateValue}
            action={handleToDateValue}
            mods={['secondary']}
          />
        </div>
      </div>
      <div className={s.form__button}>
        <Button
          onClick={handleSubmit}
          to={'#'}
          mods={['modColorPrime', 'modSize1']}
          children={
            <>
              <SearchIcon /> <span className={s.form__buttonText}>{t('Hero.Search')}</span>
            </>
          }
        />
      </div>
    </form>
  );
};

export default Form;
