import { createSlice } from "@reduxjs/toolkit";

const initialState = { userName: "EBAC", password: "", logged: false };

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUserLogged: (state, action) => {
            return action.payload;
        },
        setUserLoggOff: (state, action) => {
            return initialState;
        }
    }
});

export const { setUserLogged, setUserLoggOff } = userSlice.actions;

const { reducer: userReducer } = userSlice
export default userReducer;