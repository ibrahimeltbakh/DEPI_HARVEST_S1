import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            let existedProduct = state.find((p) => p.id == action.payload.id)
            if (!existedProduct) {
                let newProduct = { ...action.payload, quantity: 1 }
                state.push(newProduct)
            }
            else {
                existedProduct.quantity++
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((p) => p.id != action.payload.id)
        },
        increaseQuantity: (state, action) => { },
        decreaseQuantity: (state, action) => { },
        clearCart: (state, action) => { },

    },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer