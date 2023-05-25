// ChatList.js
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './ChatList.css';
//import {startNewChat} from "../../../../utility/startNewChat";
import {useSelector} from "react-redux";


export const ChatList = ({ chats = [] }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    // Commented out for now - this will be needed when connecting to the server
    //const apiTokenInstance = useSelector(state => state.auth.apiTokenInstance);

    const handlePhoneNumberSubmit = async (event) => {
        event.preventDefault();
        console.log(`Creating new chat with phone number: ${phoneNumber}`);

        // Commented out for now - this will be needed when connecting to the server
        /*
        try {
            const newChatId = await startNewChat(apiTokenInstance, phoneNumber, "Hello!");
            navigate(`/chat/${newChatId}`);
        } catch (error) {
            console.error(`Failed to start a new chat: ${error}`);
        }
        */

        // Redirect to the chat page on submit
        navigate('/chat');

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
                <Link to={`/chat/${chat.id}`} key={chat.id} className="chat-list-item">
                    <h2 className="chat-title">{chat.name}</h2>
                    <p className="chat-message">{chat.latestMessage}</p>
                </Link>
            ))}
        </div>
    );
};
