import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CommentInterface } from 'entities/comment'

// Define a service using a base URL and expected endpoints
export const clothCommentsApi = createApi({
  reducerPath: 'clothCommentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64e9aa66bf99bdcc8e66deea.mockapi.io' }),
  endpoints: (builder) => ({
    getCommentsById: builder.query<CommentInterface[], string>({
      query: () => `/items`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCommentsByIdQuery } = clothCommentsApi