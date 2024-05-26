import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import productReducer from '../features/slices/productSlice'
import { productsApi } from '../features/api/productsApi'

const store = configureStore({
  reducer: {
    product: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)

export default store
