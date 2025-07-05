import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { recipeApiSlice } from '../features/api/recipeApiSlice'

export const store = configureStore({
  reducer: {
    [recipeApiSlice.reducerPath]: recipeApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApiSlice.middleware),
})


setupListeners(store.dispatch)