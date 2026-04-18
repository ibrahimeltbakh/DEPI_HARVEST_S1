import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
    let { data } = await axios.get(`https://dummyjson.com/products/${id}`)
    return data
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        item: {},
        isLoading: false,
        isError: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state) => {
            state.isLoading = true
            state.isError = null
        }).addCase(getProduct.rejected, (state) => {
            state.isLoading = false
            state.isError = "Error Fetch Product"
        })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.item = action.payload
                state.isLoading = false
                state.isError = null
            })
    }
})

export default productSlice.reducer