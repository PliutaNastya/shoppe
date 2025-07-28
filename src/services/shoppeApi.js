import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shoppeApi = createApi({
	reducerPath: 'shoppeApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://shoppe-backend-519h.onrender.com/api' }),
	endpoints: builder => ({
		getLatestProducts: builder.query({
			query: (limit = 6) => `products?sort=latest&limit=${limit}`
		}),
		getAllProducts: builder.query({
			query: () => 'products'
		})
	})
})

export const {useGetLatestProductsQuery, useGetAllProductsQuery} = shoppeApi