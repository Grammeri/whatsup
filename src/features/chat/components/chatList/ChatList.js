// ChatList.js
import React from 'react';
import './ChatList.css';

export const ChatList = ({ chats = [] }) => {  // Default chats to an empty array if it's undefined
    return (
        <div className="chat-list">
            {chats.map(chat => (
                <div key={chat.id} className="chat-list-item">
                    <h2 className="chat-title">{chat.name}</h2>
                    <p className="chat-message">{chat.latestMessage}</p>
                </div>
            ))}
        </div>
    );
};
