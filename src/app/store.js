import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../state/cart.slice";
import productReducer from "../state/product.slice";
import userReducer from "../state/user.slice";
import { thunk } from "redux-thunk";
import menuReducer from "../state/menu.slice";
import sessionReducer from "../state/session.slice";

const store = configureStore({
    reducer : {
        cart : cartReducer,
        product: productReducer,
        user: userReducer,
        menu: menuReducer,
        session: sessionReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;