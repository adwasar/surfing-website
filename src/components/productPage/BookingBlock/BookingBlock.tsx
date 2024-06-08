import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SectionTitle from 'src/components/ui/SectionTitle';
import Button from 'src/components/ui/Button';
import HoverDatePicker from '../HoverDatePicker';
import CustomSelect from '../CustomSelect';

import { amount, locations } from './const';

import s from './BookingBlock.module.scss';

type SelectedDatesState = {
  fromDate: Date | null;
  toDate: Date | null;
};

interface BookingBlockProps {}

const selectedDatesInitialState = {
  fromDate: null,
  toDate: null,
};

const selectStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    height: '100%',
    fontSize: '14px',
    '& fieldset': {
      border: 'none',
    },
    '& legend': {
      display: 'none',
    },
    '& .MuiSelect-select': {
      padding: 0,
    },
  },
};

const BookingBlock: FC<BookingBlockProps> = () => {
  const [selectedDates, setSelectedDates] = useState<SelectedDatesState>(selectedDatesInitialState);
  const [selectedOptions, setOptions] = useState({ amount: '', location: '' });
  const navigate = useNavigate();

  const { t } = useTranslation();

  const submitProceed = () => {
    const { fromDate, toDate } = selectedDates;
    const { location, amount } = selectedOptions;

    const bookingOrder = {
      extraOptions: [''],
      location: location,
      amount: amount,
      bookingDate: {
        from: fromDate,
        to: toDate,
      },
    };
    console.log(bookingOrder);
    navigate('/proceed');
  };

  const handleGetDates = (fromDate: Date, toDate: Date) => setSelectedDates({ fromDate, toDate });
  const handleGetSelectValues = (value: string, type: string) =>
    setOptions(prev => ({ ...prev, [type]: value }));

  return (
    <div className={`${s.productPage__productBooking} ${s.bordered}`}>
      <SectionTitle text={t('ProductPage.Ready to book?')} />

      <div className={s.productPage__gridBooking}>
        <CustomSelect
          data={locations}
          getSelectValues={handleGetSelectValues}
          label={t('ProductPage.Choose location')}
          stylesOptions={selectStyles}
          type="location"
        />

        <HoverDatePicker getDates={handleGetDates} />
        {/* <ClickDatePicker getDates={handleGetDates}/> */}

        <CustomSelect
          data={amount}
          getSelectValues={handleGetSelectValues}
          label={t('ProductPage.How much you need')}
          stylesOptions={selectStyles}
          type="amount"
        />

        <Button mods={['modColorPrime', 'modSize1']} onClick={submitProceed}>
          {t('ProductPage.Proceed with selection')}
        </Button>
      </div>
    </div>
  );
};

export default BookingBlock;
