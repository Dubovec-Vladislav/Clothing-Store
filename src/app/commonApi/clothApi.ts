import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CommentInterface } from "entities/comment";

export interface ImageObjectInterface {
  color: string;
  previewImg: string;
  images: string[];
}

export interface ClothingInterface {
  id: string;
  imageObjects: ImageObjectInterface[];
  name: string;
  description: string;
  price: number;
  prevPrice: number;
  sizesList: number[];
  commentsList: CommentInterface[];
  category: number;
  rating: number;
  salesIndex: number;
}

interface Pagination {
  category?: string;
  page: number;
  limit: number;
}

interface PaginationAndSorting {
  category?: string;
  page: number;
  limit: number;
  sortBy: string;
  order: string;
}

interface SearchAndPagination {
  str: string;
  page: number;
  limit: number;
}

// Define a service using a base URL and expected endpoints
export const clothApi = createApi({
  reducerPath: "clothApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64e9aa66bf99bdcc8e66deea.mockapi.io",
  }),
  endpoints: (builder) => ({
    getClothingItems: builder.query<ClothingInterface[], number | "">({
      query: (limit) => `items?page=1&limit=${limit}`,
    }),
    getClothingItemsByCategory: builder.query<ClothingInterface[], string>({
      query: (category) => `items?category=${category}`,
    }),
    getClothingItemsByCategoryAndPage: builder.query<
      ClothingInterface[],
      Pagination
    >({
      query: ({ category, page, limit }) =>
        `items?category=${category}&page=${page}&limit=${limit}`,
    }),
    getClothingItemsByCategoryAndPageAndSort: builder.query<
      ClothingInterface[],
      PaginationAndSorting
    >({
      query: ({ category, page, limit, sortBy, order }) =>
        `items?category=${category}&page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`,
    }),
    getClothingItemByID: builder.query<ClothingInterface, string>({
      query: (id) => `items/${id}`,
    }),
    getTopSellingClothing: builder.query<ClothingInterface[], number>({
      query: (limit) =>
        `items?sortBy=salesIndex&order=desc&page=1&limit=${limit}`,
    }),
    getNewClothing: builder.query<ClothingInterface[], number>({
      query: (limit) =>
        `items?sortBy=timeSinceReleaseDate&order=asc&page=1&limit=${limit}`,
    }),
    getClothingItemsBySearch: builder.query<ClothingInterface[], string>({
      query: (str) => `items?name=${str}`,
    }),
    getClothingItemsBySearchAndPage: builder.query<
      ClothingInterface[],
      SearchAndPagination
    >({
      query: ({ str, page, limit }) =>
        `items?name=${str}&page=${page}&limit=${limit}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetClothingItemsQuery,
  useGetClothingItemsByCategoryQuery,
  useGetClothingItemsByCategoryAndPageQuery,
  useGetClothingItemsByCategoryAndPageAndSortQuery,
  useGetClothingItemByIDQuery,
  useGetTopSellingClothingQuery,
  useGetNewClothingQuery,
  useGetClothingItemsBySearchQuery,
  useGetClothingItemsBySearchAndPageQuery,
} = clothApi;
