import { configureStore } from "@reduxjs/toolkit"

import dishiesReducer from './reducers/Dish'

const store = configureStore({
    reducer:{
        dishies: dishiesReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store