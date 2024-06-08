import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs, { Dayjs } from 'dayjs';
import { useTranslation } from 'react-i18next';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import type { RootState } from 'src/store';
import s from './HoverDatePicker.module.scss';

type DateT = Dayjs | null;

interface HoverDatePickerProps {
  getDates: (fromDate: Date, toDate: Date) => void;
}

const datePickerStyles = {
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { border: 'none' },
  '& .MuiButtonBase-root': { display: 'none' },
  '& .MuiInputBase-input': { padding: 0, fontSize: '14px', cursor: 'pointer' },
};

const HoverDatePicker: FC<HoverDatePickerProps> = ({ getDates }) => {
  const [fromValue, setFrom] = useState<DateT>(dayjs());
  const [toValue, setTo] = useState<DateT>(dayjs().add(1, 'day'));
  const [showCalendar, setShowCalendar] = useState({ from: false, to: false });
  const { t } = useTranslation();
  const currantLang = useSelector((state: RootState) => state.localization.currantLang);

  //   Converting and send dates data
  const handleFromDateChange = (newValue: DateT) => {
    setFrom(newValue);
    if (newValue && toValue) {
      getDates(newValue.toDate(), toValue.toDate());
    } else if (newValue) {
      getDates(newValue.toDate(), new Date());
    } else if (toValue) {
      getDates(new Date(), toValue.toDate());
    }
  };

  const handleToDateChange = (newValue: DateT) => {
    setTo(newValue);
    if (fromValue && newValue) {
      getDates(fromValue.toDate(), newValue.toDate());
    } else if (fromValue) {
      getDates(fromValue.toDate(), new Date());
    } else if (newValue) {
      getDates(new Date(), newValue.toDate());
    }
  };

  const onOpenHandler = (calendar: string) => () => {
    setShowCalendar(prevState => ({ ...prevState, [calendar]: true }));
  };
  const onCloseHandler = (calendar: string) => () => {
    setShowCalendar(prevState => ({ ...prevState, [calendar]: false }));
  };
  const disableNotWorkingHours = (date: Dayjs) => {
    const hour = date.hour();
    return hour < 8 || hour > 20;
  };

  return (
    <div className={s.datePicker}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={currantLang}>
        <div
          className={s.datePicker__wrapper}
          onMouseEnter={onOpenHandler('from')}
          onMouseLeave={onCloseHandler('from')}
        >
          <div className={s.datePicker__label}>{t('ProductPage.from')}</div>
          <DateTimePicker
            format="DD MMMM HH:00" //  1 April 10:00
            // format="DD MMMM " //  1 April
            views={['day', 'month', 'hours']}
            //
            ampm={false}
            disablePast={true}
            label={false}
            //
            open={showCalendar.from}
            sx={datePickerStyles}
            value={fromValue}
            onChange={handleFromDateChange}
            onClose={onCloseHandler('from')}
            shouldDisableTime={disableNotWorkingHours}
          />
        </div>
        <span className={s.divider} />
        <div
          className={s.datePicker__wrapper}
          onMouseEnter={onOpenHandler('to')}
          onMouseLeave={onCloseHandler('to')}
        >
          <div className={s.datePicker__label}>{t('ProductPage.to')}</div>
          <DateTimePicker
            format="DD MMMM HH:00"
            // format="DD MMMM " //  1 April
            views={['day', 'month', 'hours']}
            //
            ampm={false}
            label={false}
            disablePast={true}
            //
            sx={datePickerStyles}
            value={toValue}
            open={showCalendar.to}
            //
            onChange={handleToDateChange}
            onClose={onCloseHandler('to')}
            shouldDisableDate={value => dayjs(value).isBefore(fromValue)}
            shouldDisableTime={disableNotWorkingHours}
          />
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default HoverDatePicker;
