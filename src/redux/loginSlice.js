import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuth: false,
    rememberME: false,
    error: ""
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginPending: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = "";
        },
        loginFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        loginSave: (state) => {
            state.rememberME = true;
        },
        logout: (state) => {
            state.isAuth = false;
            state.rememberME = false;
        }
    }
});

const { reducer, actions } = loginSlice
export const { loginPending, loginSuccess, loginFail, loginSave , logout } = actions;
export default reducer;
