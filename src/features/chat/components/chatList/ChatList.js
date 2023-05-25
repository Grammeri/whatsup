// ChatList.js
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './ChatList.css';

export const ChatList = ({ chats = [] }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handlePhoneNumberSubmit = (event) => {
        event.preventDefault();
        console.log(`Creating new chat with phone number: ${phoneNumber}`);

        // Start a new chat with the entered phone number (replace this with your actual logic)
        const newChatId = startNewChat(phoneNumber);

        // Navigate to the ChatPage of the new chat
        navigate(`/window/${newChatId}`);

        setPhoneNumber('');
    }

    return (
        <div className="chat-list">
            <form onSubmit={handlePhoneNumberSubmit}>
                <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    className="chat-input"
                />
                <button type="submit">Create New Chat</button>
            </form>

            {chats.map(chat => (
                <Link to={`/window/${chat.id}`} key={chat.id} className="chat-list-item">
                    <h2 className="chat-title">{chat.name}</h2>
                    <p className="chat-message">{chat.latestMessage}</p>
                </Link>
            ))}
        </div>
    );
};
