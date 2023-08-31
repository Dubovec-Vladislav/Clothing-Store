import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { ClothInterface } from 'entities/cloth-card'

interface ImageObject {
  color: string,
  previewImg: string,
  images: string[],
}

interface UpdatingClothInterface {
  imageObjects: ImageObject[],
  name: string,
  price: number,
  prevPrice: number,
  sizes: number[],
  category: number,
  rating: number,
  id: string,
}

// Define a service using a base URL and expected endpoints
export const clothApi = createApi({
  reducerPath: 'clothApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64e9aa66bf99bdcc8e66deea.mockapi.io' }),
  endpoints: (builder) => ({
    getClothByID: builder.query<UpdatingClothInterface, string>({
      query: (id) => `/items/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetClothByIDQuery } = clothApi;