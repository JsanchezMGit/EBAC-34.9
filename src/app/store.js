import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../state/cart.slice";
import productReducer from "../state/product.slice";
import { thunk } from "redux-thunk";

const store = configureStore({
    reducer : {
        cart : cartReducer,
        product: productReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;