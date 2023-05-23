// ChatWindow.js
import React from 'react';

const ChatWindow = ({ selectedChat }) => {
    return (
        <div>
            <h1>{selectedChat.name}</h1>
            {selectedChat.messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
        </div>
    );
};

export default ChatWindow;
