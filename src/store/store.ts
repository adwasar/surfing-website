import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slice/authSlice';
import filtersReducer from './slice/filtersSlice';
import authCookieReducer from './slice/authCookieSlice';
import invoiceReducer from './slice/invoiceSlice';
import localizationReducer from './slice/localizationSlice';
import { filtersApi } from './query/filtersApi';
import { mapSourceApi } from './query/mapSourceApi';
import { paymentIntentApi } from './query/paymentIntentApi';

const store = configureStore({
  reducer: {
    auth: authReducer,
    authCookie: authCookieReducer,
    filters: filtersReducer,
    invoice: invoiceReducer,
    localization: localizationReducer,
    [filtersApi.reducerPath]: filtersApi.reducer,
    [mapSourceApi.reducerPath]: mapSourceApi.reducer,
    [paymentIntentApi.reducerPath]: paymentIntentApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      filtersApi.middleware,
      mapSourceApi.middleware,
      paymentIntentApi.middleware
    ),
});

export default store;
