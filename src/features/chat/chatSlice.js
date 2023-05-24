import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { messageApi } from '../api/greenAPI';

// Create the async thunks
export const sendMessage = createAsyncThunk(
    'chat/sendMessage',
    async ({ idInstance, apiTokenInstance, chatId, message }, thunkAPI) => {
        const response = await messageApi.sendMessage(idInstance, apiTokenInstance, chatId, message);
        return response.data;
    }
);

export const receiveMessage = createAsyncThunk(
    'chat/receiveMessage',
    async ({ idInstance, apiTokenInstance }, thunkAPI) => {
        const response = await messageApi.receiveMessage(idInstance, apiTokenInstance);
        return response.data;
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
            .addCase(sendMessage.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.messages.push(action.payload);
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(receiveMessage.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(receiveMessage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.messages.push(action.payload);
            })
            .addCase(receiveMessage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default chatSlice.reducer;
