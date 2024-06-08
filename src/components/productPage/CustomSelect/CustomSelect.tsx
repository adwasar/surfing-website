import { FC, ChangeEvent, useState } from 'react';
import { MenuItem, TextField } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

import s from './CustomSelect.module.scss';

type SelectTypesT = 'location' | 'amount';

interface CustomSelectProps {
  label: string;
  data: { id: number; value: string; label: string }[];
  stylesOptions: SxProps<Theme>;
  getSelectValues: (value: string, type: SelectTypesT) => void;
  type: SelectTypesT;
}

const CustomSelect: FC<CustomSelectProps> = ({
  stylesOptions,
  data,
  label,
  type,
  getSelectValues,
}) => {
  const [selectValues, setSelectValue] = useState(data[0].value);

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const selectData = event.target.value;
    setSelectValue(selectData);
    getSelectValues(selectData, type);
  };

  return (
    <div className={s.selectContainer}>
      <div className={s.selectContainer__label}>{label}</div>
      <TextField
        fullWidth
        SelectProps={{ IconComponent: () => null }}
        id="outlined-select-location"
        select
        label={false}
        sx={stylesOptions}
        value={selectValues}
        onChange={handleChangeValue}
      >
        {data.map(item => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default CustomSelect;
