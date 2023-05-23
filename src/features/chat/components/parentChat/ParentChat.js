// src/features/chat/components/Chat.js
import React from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

const Chat = () => {
    return (
        <div>
            <ChatList />
            <ChatWindow />
            <ChatInput />
        </div>
    );
};

export default Chat;
