import { configureStore } from '@reduxjs/toolkit'
import { clothApi } from 'features/cloth-row'

export const store = configureStore({
  reducer: {
    [clothApi.reducerPath]: clothApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clothApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch