import { Filters } from './slice/filtersSlice';
import { Auth } from './slice/authSlice';
import { Cookie } from './slice/authCookieSlice';
import { InvoiceState } from './slice/invoiceSlice';
import { localizationState } from './slice/localizationSlice';

export interface RootState {
  auth: Auth;
  filters: Filters;
  authCookie: Cookie;
  invoice: InvoiceState;
  localization: localizationState;
}
