import { configureStore } from "@reduxjs/toolkit"

import api from '../service/api'

import cartReducer from './reducers/Cart'

const store = configureStore({
    reducer:{
        cart: cartReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store