import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ClothInterface } from 'entities/cloth-card'

// Define a service using a base URL and expected endpoints
export const clothApi = createApi({
  reducerPath: 'clothApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64de1332825d19d9bfb20329.mockapi.io' }),
  endpoints: (builder) => ({
    getCloth: builder.query<ClothInterface[], string>({
      query: () => `/items`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetClothQuery } = clothApi