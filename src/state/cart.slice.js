import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { items: []},
    reducers: {
        addCartItem: (state, action) => {
            state.items.push(action.payload);
        },
        updateCartItem: (state, action) => {
            return {items: [...state.items.filter(c => Number(c.product.id) !== Number(action.payload.product.id)), action.payload]};
        },
        removeCartItem: (state, action) => {
            return {items: state.items.filter(c => Number(c.product.id) !== Number(action.payload))};
        }
    }
});

export const { addCartItem, updateCartItem, removeCartItem } = cartSlice.actions;

const { reducer: cartReducer } = cartSlice
export default cartReducer;