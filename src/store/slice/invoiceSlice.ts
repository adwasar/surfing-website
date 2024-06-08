import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DateBooking, Itemized, Location } from 'src/components/bookingProceed/Invoice';

export interface InvoiceState {
  items: Itemized[];
  location: Location;
  date: DateBooking;
  total: string;
}

const initialState: InvoiceState = {
  items: [],
  location: { name: '', toPath: '' },
  date: { begin: new Date(), end: new Date() },
  total: '',
};

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Itemized[]>) => {
      state.items = action.payload;
    },
    setLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
    setDate: (state, action: PayloadAction<DateBooking>) => {
      state.date = action.payload;
    },
    setTotal: (state, action: PayloadAction<string>) => {
      state.total = action.payload;
    },
  },
});

export const { setItems, setLocation, setDate, setTotal } = invoiceSlice.actions;

export default invoiceSlice.reducer;
