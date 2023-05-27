import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGetChatsQuery, useSendMessageMutation } from '../../../../app/rtkQueryApi';
import { AuthContext } from '../../../../services/reactContext/AuthContext'; // Import the AuthContext
import './rtkQueryChatList.css'; // Import the CSS file

export const RtkQueryChatList = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();
    const { data: chats, isLoading } = useGetChatsQuery();
    const [sendMessage] = useSendMessageMutation();
    const { idInstance, apiTokenInstance } = useContext(AuthContext); // Get values from AuthContext

    const handlePhoneNumberSubmit = async (event) => {
        event.preventDefault();
        console.log(`Creating new chat with phone number: ${phoneNumber}`);

        try {
            await sendMessage({
                chatId: phoneNumber,
                message: 'Hello! Starting a new chat.',
                idInstance,
                apiTokenInstance
            });
            navigate(`/chat/${phoneNumber}`);
        } catch (error) {
            console.error(`Failed to start a new chat: ${error}`);
        }

        setPhoneNumber('');
    };

    if (isLoading) return <p>Loading chats...</p>;

    return (
        <div className="chat-list-container">
            <form onSubmit={handlePhoneNumberSubmit} className="chat-form">
                <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    className="chat-input"
                />
                <button type="submit" className="create-chat-button">
                    Create New Chat
                </button>
            </form>

            {chats &&
                chats.map((chat) => (
                    <Link to={`/chat/${chat.id}`} key={chat.id} className="chat-list-item">
                        <h2 className="chat-title">{chat.name}</h2>
                        <p className="chat-message">{chat.latestMessage}</p>
                    </Link>
                ))}
        </div>
    );
};
