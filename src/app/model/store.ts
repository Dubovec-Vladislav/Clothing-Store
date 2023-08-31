import { configureStore } from '@reduxjs/toolkit'
import { filteringClothApi } from 'pages/main'
import { topCommentsApi } from 'features/comment-slider'
import { emailsApi } from 'features/news-subscription'
import { clothApi } from 'widgets/clothes-constructor'

export const store = configureStore({
  reducer: {
    [filteringClothApi.reducerPath]: filteringClothApi.reducer,
    [topCommentsApi.reducerPath]: topCommentsApi.reducer,
    [emailsApi.reducerPath]: emailsApi.reducer,
    [clothApi.reducerPath]: clothApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filteringClothApi.middleware, topCommentsApi.middleware, emailsApi.middleware, clothApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;