import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Dishies } from "../../pages/Profile";

type CartState ={
    items: Dishies[]
    isOpen: boolean
    isOpenDelivery: boolean
    isOpenPayment: boolean
    isOpenConfirmPay: boolean
    orderId: string | null
}

const initialState: CartState = {
    items: [],
    isOpen: false,
    isOpenDelivery: false,
    isOpenPayment: false,
    isOpenConfirmPay: false,
    orderId: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Dishies>) => {
            const game = state.items.find(item => item.id === action.payload.id)

            if (!game) {
                state.items.push(action.payload)
            } else {
                alert ('O prato já está no carrinho!')
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        openDelivery: (state) => {
            state.isOpenDelivery = true
        },
        closeDelivery: (state) => {
            state.isOpenDelivery = false
        },
        openPayment: (state) => {
            state.isOpenPayment = true
        },
        closePayment: (state) => {
            state.isOpenPayment = false
        },
        OpenConfirmPay: (state) => {
            state.isOpenConfirmPay = true
        },
        closeConfirmPay: (state) => {
            state.isOpenConfirmPay = false
        },
        setOrderId: (state, action: PayloadAction<string>) => {
            state.orderId = action.payload
        },
        clearOrderId:(state) => {
            state.orderId = null
        },

    }
})

export const { 
    add, 
    open, 
    close, 
    remove,
    openDelivery,
    closeDelivery,
    openPayment,
    closePayment,
    OpenConfirmPay,
    closeConfirmPay,
    setOrderId,
    clearOrderId
} = cartSlice.actions
export default cartSlice.reducer