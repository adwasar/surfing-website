import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { setTotal } from 'src/store/slice/invoiceSlice';

import InvoiceItem from '../InvoiceItem';
import Product from '../Product/';
import ProdustCost from '../ProdustCost';

import { formatDateDMonth, periodDays, periodHours, remainingHours } from 'src/utils';

import { DateBooking, Itemized, Location } from './type';

import s from './Invoice.module.scss';

interface InvoiceProps {
  items: Itemized[];
  location: Location;
  date: DateBooking;
  isTotal?: boolean;
}

interface DatesPeriodProps {
  begin: Date;
  end: Date;
}

const DatesPeriod: FC<DatesPeriodProps> = ({ begin, end }) => {
  const { t } = useTranslation();

  const [beginDay, beginMonth] = formatDateDMonth(begin).split(' ');
  const [endDay, endMonth] = formatDateDMonth(end).split(' ');

  const translatedDateBegin = `${beginDay} ${t('MonthGenitive.' + beginMonth)}`;
  const translatedDateEnd = `${endDay} ${t('MonthGenitive.' + endMonth)}`;

  return (
    <>
      {`${t('BookingProceed.from')} ${translatedDateBegin}, `}
      <strong>{`${begin.getHours()}:00 `}</strong>
      {`${t('BookingProceed.to')} ${translatedDateEnd}, `}
      <strong>{`${end.getHours()}:00 `}</strong>
    </>
  );
};

const Invoice: FC<InvoiceProps> = ({ items, location, date, isTotal }) => {
  const dispatch = useDispatch();
  const currency = 'EUR';
  const totalCost = items.reduce((sum, item) => sum + item.cost, 0);
  const total = (
    totalCost * periodDays(date.begin, date.end) +
    totalCost * (24 / remainingHours(date.begin, date.end))
  ).toFixed(2);
  dispatch(setTotal(total));
  const { t } = useTranslation();

  return (
    <div className={s.invoice}>
      <ul className={s.invoice__list}>
        <li className={s.invoice__item}>
          <Product items={items} />
        </li>
        <li className={s.invoice__item}>
          <InvoiceItem
            caption={t('BookingProceed.Location')}
            info={location.name}
            link={{ name: t('BookingProceed.Open map'), to: location.toPath }}
          />
        </li>
        <li className={s.invoice__item}>
          <InvoiceItem
            caption={t('BookingProceed.Dates')}
            info={<DatesPeriod begin={date.begin} end={date.end} />}
          />
        </li>
        {isTotal ? (
          <>
            <li className={s.invoice__item}>
              <InvoiceItem
                caption={t('BookingProceed.Summary')}
                info={`${t('BookingProceed.Renting time')}:
                  ${periodDays(date.begin, date.end)} ${t('BookingProceed.days')}
                  ${remainingHours(date.begin, date.end)} ${t('BookingProceed.hours')} (
                  ${periodHours(date.begin, date.end)} ${t('BookingProceed.hours')})`}
              />
            </li>
            <li className={s.invoice__item}>
              <ProdustCost items={items} />
            </li>
          </>
        ) : null}
      </ul>
      {isTotal ? (
        <div className={s.invoice__total}>{`${t(
          'BookingProceed.Total'
        )}: ${total}${currency}`}</div>
      ) : null}
    </div>
  );
};

export default Invoice;
