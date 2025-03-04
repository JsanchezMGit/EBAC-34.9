import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null };

const sessionSlice = createSlice({
    name: "session",
    initialState: initialState,
    reducers: {
        userLoggIn: (state, action) => {
            return { user: action.payload};
        },
        userLoggOff: (state, action) => {
            return initialState;
        }
    }
});

export const { userLoggIn, userLoggOff } = sessionSlice.actions;

const { reducer: sessionReducer } = sessionSlice
export default sessionReducer;