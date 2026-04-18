import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./slices/cart"
import productsReducer from "./slices/products"
import productReducer from "./slices/product"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        product: productReducer,
    },
})