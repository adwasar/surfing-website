import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Area, Guest } from 'src/type';

export const filtersApi = createApi({
  reducerPath: 'filtersApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    getAreasList: builder.query<Area[], void>({
      query: () => 'data/areas.json',
    }),
    getGuestsList: builder.query<Guest[], void>({
      query: () => 'data/guests.json',
    }),
  }),
});

export const { useGetAreasListQuery, useGetGuestsListQuery } = filtersApi;
