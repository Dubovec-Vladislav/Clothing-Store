import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ClothInterface } from 'entities/cloth-card'

// Define a service using a base URL and expected endpoints
export const filteringClothApi = createApi({
  reducerPath: 'filteringClothApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64de1332825d19d9bfb20329.mockapi.io' }),
  endpoints: (builder) => ({
    getNewCloth: builder.query<ClothInterface[], string>({
      query: () => `/new-items`,
    }),
    getTopSellingCloth: builder.query<ClothInterface[], string>({
      query: () => `/top-selling-items`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewClothQuery, useGetTopSellingClothQuery } = filteringClothApi;