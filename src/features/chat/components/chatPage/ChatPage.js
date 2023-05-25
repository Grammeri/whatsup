// ChatPage.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {sendMessage} from "../../chatSlice";

export const ChatPage = ({ selectedChat }) => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const status = useSelector((state) => state.chat.status);
    const error = useSelector((state) => state.chat.error);

    const mockMessages = [
        { sentByMe: true, text: 'Hello there!' },
        { sentByMe: false, text: 'Hi, how can I help you?' },
        { sentByMe: true, text: 'I have a question about my order.' },
        { sentByMe: false, text: 'Sure, I can assist with that. Can you please provide your order number?' },
        // More messages...
    ];

    const handleSubmit = e => {
        e.preventDefault();
        if (message.trim() === '') {
            return;
        }
        // Dispatch sendMessage action
        dispatch(sendMessage({
            chatId: selectedChat ? selectedChat.id : 'mockChatId', // use a mock chat ID if no chat is selected
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
                {mockMessages.map((message, index) => (
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
