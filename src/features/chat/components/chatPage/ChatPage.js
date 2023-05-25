// ChatPage.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {sendMessage} from "../../chatSlice";

export const ChatPage = ({ selectedChat }) => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const status = useSelector((state) => state.chat.status);
    const error = useSelector((state) => state.chat.error);

    const handleSubmit = e => {
        e.preventDefault();
        if (message.trim() === '') {
            return;
        }
        // Dispatch sendMessage action
        dispatch(sendMessage({
            chatId: selectedChat.id,
            message: message
        }));
        setMessage('');
    };

    if (!selectedChat) {
        return <div className="no-chat-selected">No chat selected</div>;
    }

    return (
        <div className="chat-page">
            <div className="chat-window">
                <h1 className="chat-name">{selectedChat.name}</h1>
                {selectedChat.messages.map((message, index) => (
                    <p key={index} className={message.sentByMe ? 'chat-message sent' : 'chat-message received'}>
                        {message.text}
                    </p>
                ))}
                {status === 'failed' && <div>Error: {error}</div>}
            </div>
            <form onSubmit={handleSubmit} className="chat-form">
                <input
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="chat-input"
                />
                <button type="submit" className="chat-send">Send</button>
            </form>
        </div>
    );
};
