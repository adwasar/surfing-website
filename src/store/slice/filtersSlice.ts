import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';

export interface Filters {
  areaValue: number | null;
  fromDateValue: Dayjs | null;
  toDateValue: Dayjs | null;
  guestValue: number | null;
}

const initialState: Filters = {
  areaValue: null,
  fromDateValue: null,
  toDateValue: null,
  guestValue: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setAreaValueToStore: (state, action) => {
      state.areaValue = action.payload;
    },
    setFromDateValueToStore: (state, action) => {
      state.fromDateValue = action.payload;
    },
    setToDateValueToStore: (state, action) => {
      state.toDateValue = action.payload;
    },
    setGuestValueToStore: (state, action) => {
      state.guestValue = action.payload;
    },
    setAllValuesToStore: (state, action: PayloadAction<Filters>) => {
      const { areaValue, fromDateValue, toDateValue, guestValue } = action.payload;
      state.areaValue = areaValue;
      state.fromDateValue = fromDateValue;
      state.toDateValue = toDateValue;
      state.guestValue = guestValue;
    },
  },
});

export const {
  setAreaValueToStore,
  setFromDateValueToStore,
  setToDateValueToStore,
  setGuestValueToStore,
  setAllValuesToStore,
} = filtersSlice.actions;

export default filtersSlice.reducer;
