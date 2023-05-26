import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGetChatsQuery, useStartNewChatMutation } from '../../../../app/rtkQueryApi';

export const RtkQueryChatList = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();
    const { data: chats, isLoading } = useGetChatsQuery();
    const [startNewChat] = useStartNewChatMutation();

    const handlePhoneNumberSubmit = async (event) => {
        event.preventDefault();
        console.log(`Creating new chat with phone number: ${phoneNumber}`);

        try {
            const newChat = await startNewChat({ phoneNumber, message: 'Hello!' });
            navigate(`/chat/${newChat.data.id}`);
        } catch (error) {
            console.error(`Failed to start a new chat: ${error}`);
        }

        setPhoneNumber('');
    };

    if (isLoading) return <p>Loading chats...</p>;

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
