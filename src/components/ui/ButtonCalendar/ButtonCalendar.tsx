import { useState, useRef, FC } from 'react';
import { useSelector } from 'react-redux';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import type { RootState } from 'src/store';
import 'dayjs/locale/en';
import 'dayjs/locale/ru';
import 'dayjs/locale/uk';

import './ButtonCalendar.scss';
import s from './ButtonCalendar.module.scss';

interface ButtonCalendarProps {
  text: string;
  placeholder: string;
  value: Dayjs | null;
  action: (value: Dayjs) => void;
  mods?: string[];
  disableDate?: Dayjs | null;
  defaultHour?: number;
}
const ButtonCalendar: FC<ButtonCalendarProps> = ({
  text,
  placeholder,
  value,
  action,
  mods = [],
  disableDate,
}) => {
  const blockRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const currantLang = useSelector((state: RootState) => state.localization.currantLang);

  const classNamesButton = [
    s.buttonCalendar__trigger,
    ...mods.map(mod => s[`buttonCalendar__trigger--${mod}`]),
  ].join(' ');
  const classNamesText = [s.trigger__text, ...mods.map(mod => s[`trigger__text--${mod}`])].join(
    ' '
  );
  const classNamesPlaceholder = [
    s.trigger__placeholder,
    ...mods.map(mod => s[`trigger__placeholder--${mod}`]),
  ].join(' ');

  const handleClickAction = (value: Dayjs) => {
    action(value);
  };
  const datePickerStyles = {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      display: 'none',
    },
  };
  const shouldDisableTime = (time: Dayjs) => {
    const hour = time.hour();
    return hour < 8 || hour > 20; // Блокуємо години до 8 ранку та після 8 вечора
  };
  return (
    <div
      className={s.buttonCalendar}
      ref={blockRef}
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <button className={classNamesButton} type="button">
        <span className={classNamesText}>{text}</span>
        <span className={classNamesPlaceholder}>
          {value ? dayjs(value).format('DD.MM.YYYY HH:00') : placeholder}
        </span>
      </button>
      <div className={`${s.calendarblock} ${isOpen ? s.active : ''}`}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={currantLang}>
          <DateTimePicker
            sx={datePickerStyles}
            disablePast={true}
            shouldDisableDate={value => dayjs(value).isBefore(disableDate)}
            shouldDisableTime={shouldDisableTime}
            views={['month', 'day', 'hours']}
            open={isOpen}
            //value={value ? value : dayjs(disableDate).hour(defaultHour)} // Встановлюємо годину за замовчуванням
            value={value}
            onChange={newValue => handleClickAction(dayjs(newValue))}
            onAccept={() => setIsOpen(false)}
            ampm={false}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};
export default ButtonCalendar;
