import React from 'react';

const ChatList = ({ chats }) => {
    return (
        <div>
            {chats.map(chat => (
                <div key={chat.id}>
                    <h2>{chat.name}</h2>
                    <p>{chat.latestMessage}</p>
                </div>
            ))}
        </div>
    );
};

export default ChatList;
