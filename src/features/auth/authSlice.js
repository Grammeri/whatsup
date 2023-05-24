import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    loginError: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { username, password } = action.payload;
            if (username === "You are always welcome!" && password === "No passwords required!") {
                state.isLoggedIn = true;
                state.loginError = null;
            } else {
                state.loginError = "Oops! Please enter the correct greeting.";
            }
        },
        logout: (state) => {
            state.isLoggedIn = false;
        }
    }
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer

export default authSlice.reducer;
