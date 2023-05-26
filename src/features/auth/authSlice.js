/*
// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {authApi} from "./components/authApi";


const initialState = {
    idInstance: null,
    apiTokenInstance: null,
    isLoggedIn: false,
    loginError: null,
};

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        // Mocked login for development
        if (credentials.idInstance && credentials.apiTokenInstance) {
            const mockResponse = {isLoggedIn: true};
            return credentials;
        }

        // Uncomment the following for real API call
        /!*
        const response = await authApi.login(credentials.idInstance, credentials.apiTokenInstance);
        if (response.isLoggedIn) {
            return credentials;  // return credentials if login is successful
        } else {
            return thunkAPI.rejectWithValue(response.message);
        }
        *!/
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.idInstance = null;
            state.apiTokenInstance = null;
            state.isLoggedIn = false;
        },
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.idInstance = action.payload.idInstance;
            state.apiTokenInstance = action.payload.apiTokenInstance;
            state.isLoggedIn = true;
            state.loginError = null;
        },
        [login.rejected]: (state, action) => {
            state.loginError = action.payload;
        },
    },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

export default authSlice.reducer;
*/
