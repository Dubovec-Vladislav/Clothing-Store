import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface ImageObject {
  color: string,
  previewImg: string,
  images: string[],
}

export interface ClothInterface {
  imageObjects: ImageObject[],
  name: string,
  description: string,
  price: number,
  prevPrice: number,
  sizeList: number[],
  category: number,
  rating: number,
  id: string,
  salesIndex: number,
}

// Define a service using a base URL and expected endpoints
export const clothApi = createApi({
  reducerPath: 'clothApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64e9aa66bf99bdcc8e66deea.mockapi.io' }),
  endpoints: (builder) => ({
    getClothItemByID: builder.query<ClothInterface, string>({
      query: (id) => `/items/${id}`,
    }),
    getTopSellingCloth: builder.query<ClothInterface[], number>({
      query: (limit) => `items?sortBy=salesIndex&order=desc&page=1&limit=${limit}`, // Why page we need page? Because API is shit
    }),
    // getClothCommentsByID: builder.query<ClothInterface, string>({
    //   query: (id) => `/items/${id}`,
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetClothItemByIDQuery, useGetTopSellingClothQuery } = clothApi;