import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { UserDataMarker } from 'src/components/bookingMap/type';
import { Filters } from '../slice/filtersSlice';

export const mapSourceApi = createApi({
  reducerPath: 'mapSourceApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    getMapSource: builder.query<UserDataMarker[], Filters>({
      query: filters => ({
        url: 'data/map-source.json',
        params: filters,
      }),
      transformResponse: (response: UserDataMarker[], _, arg) => {
        if (arg.areaValue && arg.areaValue !== 1) {
          return response.filter(item => item.idArea === arg.areaValue);
        }
        return response;
      },
    }),
  }),
});

export const { useGetMapSourceQuery } = mapSourceApi;
