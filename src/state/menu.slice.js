import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false };

const menuSlice = createSlice({
    name: "menu",
    initialState: initialState,
    reducers: {
        toogleMenu: (state) => {
            return { open: !state.open };
        }
    }
});

export const { toogleMenu } = menuSlice.actions;

const { reducer: menuReducer } = menuSlice
export default menuReducer;