import i18n from 'src/localization/i18n';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface localizationState {
  currantLang: string;
}

const defaultLanguage = localStorage.getItem('i18nextLng')?.split('-')[0];

const initialAuthState: localizationState = {
  currantLang: defaultLanguage || 'en',
};

const localizationSlice = createSlice({
  name: 'localization',
  initialState: initialAuthState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.currantLang = action.payload;
      i18n.changeLanguage(action.payload);
    },
  },
});

export const { setLang } = localizationSlice.actions;
export default localizationSlice.reducer;
