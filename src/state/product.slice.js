import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IDLE, LOADING, SUCCEEDED, FAILED } from "./status";

export const initialStateProduct = {
    status: IDLE,
    products: []
}

const baseURL = "https://fakestoreapi.com";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    try {
        const response = await axios.get(`${baseURL}/products`);
        return response.data;
    } catch (error) {
        console.error(`Ocurrio un error al intentar obtener los productos`, error);
        throw error;
    }
}, 'get');

const productSlice = createSlice({
    name:"product",
    initialState: initialStateProduct,
    reducers: {
    },    
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = LOADING;
                console.log(`Loading`);
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = SUCCEEDED;
                state.products = action.payload;
                console.log(`Fulfilled`);
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = FAILED;
                console.log(`Rejected`);
            })
    }
});

const { reducer: productReducer } = productSlice
export default productReducer;