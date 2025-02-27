import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: []};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addCartItem: (state, action) => {
            state.items.push(action.payload);
        },
        updateCartItem: (state, action) => {
            return {items: [...state.items.filter(c => Number(c.product.id) !== Number(action.payload.product.id)), action.payload]};
        },
        removeCartItem: (state, action) => {
            return {items: state.items.filter(c => Number(c.product.id) !== Number(action.payload))};
        },
        resetCart:() => {
            return initialState;
        }
    }
});

export const { addCartItem, updateCartItem, removeCartItem, resetCart } = cartSlice.actions;

const { reducer: cartReducer } = cartSlice
export default cartReducer;