import React, { useState } from 'react';
import "./ChatPage.css"
// import { useSelector, useDispatch } from 'react-redux';  // Commented for now, uncomment when ready to use Redux
// import {sendMessage} from "../../chatSlice"; // Commented for now, uncomment when ready to connect to server

export const ChatPage = ({ selectedChat }) => {
    const [message, setMessage] = useState('');
    const [mockMessages, setMockMessages] = useState([
        { sentByMe: true, text: 'Hello there!' },
        { sentByMe: false, text: 'Hi, how can I help you?' },
        { sentByMe: true, text: 'I have a question about my order.' },
        { sentByMe: false, text: 'Sure, I can assist with that. Can you please provide your order number?' },
        // More messages...
    ]);

    const handleSubmit = e => {
        e.preventDefault();
        if (message.trim() === '') {
            return;
        }
        // Add the new message to the mockMessages array
        setMockMessages(prevMessages => [...prevMessages, { sentByMe: true, text: message }]);
        setMessage('');

        // Dispatch sendMessage action - for server interaction, uncomment when ready
        /*
        dispatch(sendMessage({
            chatId: selectedChat ? selectedChat.id : 'mockChatId',
            message: message
        }));
        */
    };

    if (!selectedChat) {
        return <div className="no-chat-selected">No chat selected</div>;
    }

    return (
        <div className="chat-page">
            <div className="chat-window">
                <h1 className="chat-name">{selectedChat.name}</h1>
                {mockMessages.map((message, index) => (
                    <p key={index} className={`chat-message ${message.sentByMe ? 'sent' : 'received'}`}>
                        {message.text}
                    </p>
                ))}

                {/* Commented for now, uncomment when ready to display errors from Redux */}
                {/* status === 'failed' && <div>Error: {error}</div> */}
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
