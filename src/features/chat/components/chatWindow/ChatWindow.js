/*
// ChatWindow.js
import React from 'react';
import './ChatWindow.css';

export const ChatWindow = ({ selectedChat }) => {
    if (!selectedChat) {
        return <div className="no-chat-selected">No chat selected</div>;
    }

    return (
        <div className="chat-window">
            <h1 className="chat-name">{selectedChat.name}</h1>
            {selectedChat.messages.map((message, index) => (
                <p key={index} className={message.sentByMe ? 'chat-message sent' : 'chat-message received'}>
                    {message.text}
                </p>
            ))}
        </div>
    );
};
*/
