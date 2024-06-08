import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import cookies from 'js-cookie';

export interface Cookie {
  name: string | null;
  email: string | null;
  token: string | null;
}

const initialState: Cookie = {
  name: cookies.get('name') || null,
  email: cookies.get('email') || null,
  token: cookies.get('token') || null,
};

const authCookieSlice = createSlice({
  name: 'cookie',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      cookies.set('name', action.payload, { expires: 7 });
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      cookies.set('email', action.payload, { expires: 7 });
      state.email = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      console.log(action);
      cookies.set('token', action.payload, { expires: 7 });
      state.token = action.payload;
    },
    setRegCookie: (state, action: PayloadAction<{ name: string; email: string }>) => {
      const { name, email } = action.payload;
      cookies.set('name', name, { expires: 7 });
      cookies.set('email', email, { expires: 7 });
      state.name = name;
      state.email = email;
    },
    removeToken: state => {
      cookies.remove('token');
      state.token = null;
    },
    removeCookie: state => {
      cookies.remove('name');
      cookies.remove('email');
      state.name = null;
      state.email = null;
    },
  },
});

export const { setName, setEmail, setRegCookie, removeCookie, setToken, removeToken } =
  authCookieSlice.actions;
export default authCookieSlice.reducer;
