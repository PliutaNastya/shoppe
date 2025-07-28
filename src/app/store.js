import { shoppeApi } from "@/services/shoppeApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		[shoppeApi.reducerPath]: shoppeApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shoppeApi.middleware)
})