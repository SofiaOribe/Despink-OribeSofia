import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../database/data'

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => `categories.json`,
    }),
    getProducts: builder.query({
      query: () => `products.json`,
    }),
    getProductsByCategory: builder.query({
      query: categoryId =>
        `products.json?orderBy=""category/_id"&equalTo="${categoryId}"`,
      transformResponse: response => {
        console.log(response)
        const responseTransformed = Object.values(response)
        return responseTransformed
      },
    }),
    getProductById: builder.query({
      query: productId => `products.json?orderBy="_id"&equalTo="${productId}"`,
      transformResponse: response => {
        const responseTransformed = Object.values(response)
        if (responseTransformed.length) return responseTransformed[0]
        return null
      },
    }),
  }),
})
export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
} = productsApi
