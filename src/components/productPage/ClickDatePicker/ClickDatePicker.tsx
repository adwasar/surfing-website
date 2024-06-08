import { FC, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import s from './ClickDatePicker.module.scss';

type DateT = Dayjs | null;

interface ClickDatePickerProps {
  getDates: (fromDate: Date, toDate: Date) => void;
}

const ClickDatePicker: FC<ClickDatePickerProps> = ({ getDates }) => {
  const [fromValue, setFrom] = useState<DateT>(null);
  const [toValue, setTo] = useState<DateT>(null);

  //   Converting and send dates data
  const handleFromDateChange = (newValue: DateT) => {
    setFrom(newValue);
    //eslint-disable-next-line
    getDates(newValue?.toDate()!, toValue?.toDate()!);
  };
  const handleToDateChange = (newValue: DateT) => {
    setTo(newValue);
    //eslint-disable-next-line
    getDates(fromValue?.toDate()!, newValue?.toDate()!);
  };

  const datePickerStyles = {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { border: 'none' },
    '& .MuiFormLabel-root': { color: 'rgba(113, 113, 113, 1)' },
    '& .MuiButtonBase-root': { width: '50px', height: '50px' },
    '&. MuiInputAdornment-root': { flex: 1 },
    '& .MuiSvgIcon-root': { width: '15px' },
    // '& .MuiSvgIcon-root': { display: 'none' },
  };

  return (
    <div className={s.datePicker}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          sx={datePickerStyles}
          disablePast={true}
          views={['month', 'day', 'hours']}
          label="from"
          value={fromValue}
          onChange={handleFromDateChange}
        />

        <span className={s.divider} />

        <DateTimePicker
          sx={datePickerStyles}
          shouldDisableDate={value => dayjs(value).isBefore(fromValue)}
          disablePast={true}
          views={['month', 'day', 'hours']}
          label="to"
          value={toValue}
          onChange={handleToDateChange}
        />
      </LocalizationProvider>
    </div>
  );
};

export default ClickDatePicker;
