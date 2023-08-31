import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CommentInterface } from 'entities/comment'

// Define a service using a base URL and expected endpoints
export const topCommentsApi = createApi({
  reducerPath: 'topCommentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64ca3494b2980cec85c315c6.mockapi.io' }),
  endpoints: (builder) => ({
    getTopComments: builder.query<CommentInterface[], string>({
      query: () => `/top-comments`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTopCommentsQuery } = topCommentsApi;