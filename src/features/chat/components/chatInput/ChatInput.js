import React, { useState } from 'react';

export const ChatInput = ({ onSubmit }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button type="submit">Send</button>
        </form>
    );
};


