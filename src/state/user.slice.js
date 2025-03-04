import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        registerUser: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { registerUser } = userSlice.actions;

const { reducer: userReducer } = userSlice
export default userReducer;