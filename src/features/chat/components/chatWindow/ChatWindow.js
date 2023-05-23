import React from 'react';

export const ChatWindow = ({ selectedChat }) => {
    return (
        <div>
            <h1>{selectedChat.name}</h1>
            {selectedChat.messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
        </div>
    );
};


