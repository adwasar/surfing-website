import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const paymentIntentApi = createApi({
  reducerPath: 'paymentIntentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4242/' }),
  endpoints: builder => ({
    createIntent: builder.query({
      query: requestData => ({
        url: '/create-payment-intent',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestData,
      }),
    }),
  }),
});

export const { useCreateIntentQuery } = paymentIntentApi;
