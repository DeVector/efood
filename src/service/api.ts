import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

type Products = {
    id: number
    price: number
}

type Adress = {
    description: string
    city: string
    zipCode: string
    number: number
    complement: string
}

type Expires = {
    month: number
    year: number
}

type Card = {
    name: string
    number: string
    code: number
    expires: Expires
}

export type Delivery = {
    receiver: string
    adress: Adress
}

export type Payment = { 
    card: Card
}

type PurchasePayLoad = {
    products: Products[]
    delivery: Delivery
    payment: Payment
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<Restaurante[], void>({
            query: () => 'restaurantes'
        }),
        getCardapio: builder.query<Restaurante, string>({
            query: (id) => `restaurantes/${id}`
        }),
        purchase: builder.mutation<any, PurchasePayLoad> ({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const { 
    useGetRestaurantsQuery, 
    useGetCardapioQuery, 
    usePurchaseMutation } = api

export default api