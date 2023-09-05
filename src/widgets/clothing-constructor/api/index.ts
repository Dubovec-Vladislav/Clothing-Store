import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CommentInterface } from 'entities/comment'

export interface ImageObject {
  color: string,
  previewImg: string,
  images: string[],
}

export interface ClothingInterface {
  imageObjects: ImageObject[],
  name: string,
  description: string,
  price: number,
  prevPrice: number,
  sizeList: number[],
  commentsList: CommentInterface[],
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
    getClothingItems: builder.query<ClothingInterface, number>({
      query: (limit): string => `items?page=1&limit=${limit}`,
    }),
    getClothingItemByID: builder.query<ClothingInterface, string>({
      query: (id) => `items/${id}`,
    }),
    getTopSellingClothing: builder.query<ClothingInterface[], number>({
      query: (limit) => `items?sortBy=salesIndex&order=desc&page=1&limit=${limit}`, // Why page we need page? Because API is shit
    }),
    getNewClothing: builder.query<ClothingInterface[], number>({
      query: (limit) => `items?sortBy=timeSinceReleaseDate&order=asc&page=1&limit=${limit}`, // Why page we need page? Because API is shit
    }),
    getClothingComments: builder.query<ClothingInterface[], string>({
      query: (id) => `items/${id}/commentsList`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetClothingItemByIDQuery,
  useGetTopSellingClothingQuery,
  useGetClothingItemsQuery,
  useGetNewClothingQuery,
  useGetClothingCommentsQuery,
} = clothApi;