import React, { useState } from 'react';
import './ChatInput.css';

export const ChatInput = ({ onSubmit }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit} className="chat-form">
            <input
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="chat-input"
            />
            <button type="submit" className="chat-send">Send</button>
        </form>
    );
};
