/*
import { createSlice } from '@reduxjs/toolkit';



export const login = createAsyncThunk(
    'auth/login',
    async (loginData, { rejectWithValue }) => {
        try {
            const response = await authAPI.login(loginData);
            // Handle successful login
            return response.data;
        } catch (error) {
            // Handle login error
            return rejectWithValue(error.response.data);
        }
    }
);

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        const response = await authAPI.logout();
        // Handle successful logout
        return response.data;
    } catch (error) {
        // Handle logout error
        return error.response.data;
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user: null,
        error: null,
        isLoading: false,
    },
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = true;
                state.user = action.payload.user;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.isLoggedIn = false;
                state.user = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
    },
});

export const authReducer = slice.reducer
export const { setIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;
*/
export {}