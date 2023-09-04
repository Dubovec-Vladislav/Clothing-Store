import { configureStore } from '@reduxjs/toolkit'
import { clothApi } from 'widgets/clothes-constructor'
import { topCommentsApi } from 'widgets/comment-slider'
import { emailsApi } from 'widgets/news-subscription'

export const store = configureStore({
  reducer: {
    [clothApi.reducerPath]: clothApi.reducer,
    [topCommentsApi.reducerPath]: topCommentsApi.reducer,
    [emailsApi.reducerPath]: emailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clothApi.middleware, topCommentsApi.middleware, emailsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;