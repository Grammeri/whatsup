// src/features/chat/chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chats: [],
    currentChat: null,
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChats: (state, action) => {
            state.chats = action.payload;
        },
        setCurrentChat: (state, action) => {
            state.currentChat = action.payload;
        },
        sendMessage: (state, action) => {
            const { chatId, message } = action.payload;
            const chat = state.chats.find((chat) => chat.id === chatId);
            if (chat) {
                chat.messages.push(message);
            }
        },
        // Add more actions as needed...
    },
});

export const { setChats, setCurrentChat, sendMessage } = chatSlice.actions;

export default chatSlice.reducer;

