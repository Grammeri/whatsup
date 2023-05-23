import React from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

export const ParentChat = () => {
    return (
        <div>
            <ChatList />
            <ChatWindow />
            <ChatInput />
        </div>
    );
};

