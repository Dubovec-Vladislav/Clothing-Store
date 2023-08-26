import { configureStore } from '@reduxjs/toolkit'
import { clothApi } from 'features/cloth-row'
import { commentsApi } from 'features/comment-slider'
import { emailsApi } from 'features/news-subscription'

export const store = configureStore({
  reducer: {
    [clothApi.reducerPath]: clothApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [emailsApi.reducerPath]: emailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clothApi.middleware, commentsApi.middleware, emailsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch