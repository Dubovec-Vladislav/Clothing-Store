import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const emailsApi = createApi({
  reducerPath: 'emailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64e9aa66bf99bdcc8e66deea.mockapi.io' }),
  endpoints: (builder) => ({
    addEmail: builder.mutation({
      query: (email) => ({
        url: 'emails',
        method: 'POST',
        body: { email },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddEmailMutation } = emailsApi;