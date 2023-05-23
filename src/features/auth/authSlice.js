import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    user: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
            state.error = null;
            state.isLoading = false;
        },
        loginFailure: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
            state.error = action.payload;
            state.isLoading = false;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
