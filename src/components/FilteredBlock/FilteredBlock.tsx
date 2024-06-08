import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import dayjs, { Dayjs } from 'dayjs';

import { Filters, setAllValuesToStore } from 'src/store/slice/filtersSlice';
import { RootState } from 'src/store';
import { useGetAreasListQuery, useGetGuestsListQuery } from 'src/store/query/filtersApi';

import DropdownList from 'src/components/ui/DropDownList';
import ButtonCalendar from 'src/components/ui/ButtonCalendar';
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading';
import Button from '../ui/Button';

import { default as SearchIcon } from 'src/assets/icons/search.svg?react';
import i18n from 'src/localization/i18n';
import s from './FilteredBlock.module.scss';

interface FilteredBlockProps {}

const FilteredBlock: FC<FilteredBlockProps> = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);
  const { t } = useTranslation();

  useEffect(() => {
    console.log('state.filtres', filters);
  }, [filters]);

  const { data: areasList = [], isLoading: isLoadingAreas } = useGetAreasListQuery();
  const { data: guestsList = [], isLoading: isLoadingQuests } = useGetGuestsListQuery();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(isLoadingAreas || isLoadingQuests);
  }, [isLoadingAreas, isLoadingQuests]);

  const [values, setValues] = useState<Filters>({
    areaValue: null,
    fromDateValue: null,
    toDateValue: null,
    guestValue: null,
  });

  const handleAreaValue = (id: number) => {
    setValues(prevState => ({
      ...prevState,
      areaValue: id,
    }));
  };

  const handleFromDateValue = (value: Dayjs) => {
    setValues(prevState => ({
      ...prevState,
      fromDateValue: value,
    }));
  };

  const handleToDateValue = (value: Dayjs) => {
    setValues(prevState => ({
      ...prevState,
      toDateValue: value,
    }));
  };

  const handleGuestsValue = (id: number) => {
    setValues(prevState => ({
      ...prevState,
      guestValue: id,
    }));
  };

  const handleSearchAction = () => {
    if (!isLoading) {
      dispatch(
        setAllValuesToStore({
          areaValue: values.areaValue,
          fromDateValue: values.fromDateValue,
          toDateValue: values.toDateValue,
          guestValue: values.guestValue,
        })
      );
    }

    console.log(
      `area: ${values.areaValue}
      fromDateValue: ${values.fromDateValue}
      toDateValue: ${values.toDateValue}
      guestValue: ${values.guestValue}`
    );
  };

  return (
    <div className={`${s.filteredBlock}`}>
      <div className={s.filteredBlock__area}>
        <SkeletonLoading isLoading={isLoading}>
          <DropdownList
            text={t('FilteredBlock.Select Area')}
            placeholder={t('FilteredBlock.Choose your place')}
            data={areasList}
            action={handleAreaValue}
            key={`${i18n.language}-area`}
          />
        </SkeletonLoading>
      </div>
      <div className={s.filteredBlock__from}>
        <ButtonCalendar
          text={t('FilteredBlock.From')}
          placeholder={t('FilteredBlock.Add dates')}
          value={values.fromDateValue}
          action={handleFromDateValue}
          disableDate={dayjs()}
          defaultHour={8}
        />
      </div>
      <div className={s.filteredBlock__to}>
        <ButtonCalendar
          text={t('FilteredBlock.To')}
          placeholder={t('FilteredBlock.Add dates')}
          value={values.toDateValue}
          action={handleToDateValue}
          disableDate={values.fromDateValue}
          defaultHour={20}
        />
      </div>
      <div className={s.filteredBlock__whom}>
        <SkeletonLoading isLoading={isLoading}>
          <DropdownList
            text={t('FilteredBlock.With whom')}
            placeholder={t('FilteredBlock.Add guests')}
            data={guestsList}
            action={handleGuestsValue}
            key={`${i18n.language}-withWhom`}
          />
        </SkeletonLoading>
      </div>
      <div className={s.filteredBlock__searchButton}>
        <Button
          mods={['modSize2', 'modColorPrime']}
          onClick={handleSearchAction}
          disabled={isLoading}
        >
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
};

export default FilteredBlock;
