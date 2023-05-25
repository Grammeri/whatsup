// chatSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { messageApi } from '../../api/messageAPI';

// Create the async thunks
export const sendMessage = createAsyncThunk(
    'chat/sendMessage',
    async ({ chatId, message }, thunkAPI) => {
        try {
            const response = await messageApi.sendMessage(chatId, message);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const receiveMessage = createAsyncThunk(
    'chat/receiveMessage',
    async (_, thunkAPI) => {
        try {
            const response = await messageApi.receiveMessage();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Define the initial state
const initialState = {
    messages: [],
    status: 'idle',
    error: null
};

// Create the slice
const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.messages.push(action.payload);
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.error;
            })
            .addCase(receiveMessage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(receiveMessage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.messages = state.messages.concat(action.payload);
            })
            .addCase(receiveMessage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.error;
            });
    },
});

export const chatReducer = chatSlice.reducer
export default chatSlice.reducer;
