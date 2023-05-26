// ChatPage.js
import React, { useState } from 'react';
import './ChatPage.css';
import { useParams } from 'react-router-dom';
import { useSendMessageMutation, useGetMessagesQuery } from '../../../../app/rtkQueryApi';

export const ChatPage = () => {
    const [message, setMessage] = useState('');
    const { chatId } = useParams();
    const { data: messages, isLoading, isError, error } = useGetMessagesQuery(chatId);
    const [sendMessage] = useSendMessageMutation();

    const handleSubmit = async e => {
        e.preventDefault();
        if (message.trim() === '') {
            return;
        }
        try {
            await sendMessage({ chatId, message });
            setMessage('');
        } catch (error) {
            console.error(`Failed to send a message: ${error}`);
        }
    };

    if (isLoading) {
        return <div className="chat-page">Loading...</div>;
    }

    if (isError) {
        return <div className="chat-page">Error: {error.message}</div>;
    }

    return (
        <div className="chat-page">
            <div className="chat-window">
                <h1 className="chat-name">Chat with {chatId}</h1>
                {messages && messages.map((message, index) => (
                    <p key={index} className={`chat-message ${message.sentByMe ? 'sent' : 'received'}`}>
                        {message.text}
                    </p>
                ))}
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
