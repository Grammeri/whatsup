import React, { useState, useContext, useRef } from 'react';
import './ChatPage.css';
import { useParams } from 'react-router-dom';
import { useSendMessageMutation } from '../../../../app/rtkQueryApi';
import { AuthContext } from '../../../../services/reactContext/AuthContext';

export const ChatPage = () => {
    const { idInstance, apiTokenInstance } = useContext(AuthContext);
    const [message, setMessage] = useState('');
    const { chatId } = useParams();
    const [sendMessage] = useSendMessageMutation();
    const textAreaRef = useRef(null);

    const handleInputChange = (e) => {
        setMessage(e.target.value);
        autoExpandTextArea();
    };

    const autoExpandTextArea = () => {
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (message.trim() === '') {
            return;
        }
        try {
            await sendMessage({ chatId, message, idInstance, apiTokenInstance });
            setMessage('');
            textAreaRef.current.style.height = 'auto'; // Reset TextArea height after submission
        } catch (error) {
            console.error(`Failed to send a message: ${error}`);
        }
    };

    return (
        <div className="chat-page">
            <div className="chat-window">
                <h1 className="chat-name">Chat with {chatId}</h1>
                {/* Render messages here */}
                <form onSubmit={handleSubmit} className="chat-form">
                    <div className="input-wrapper">
            <textarea
                ref={textAreaRef}
                value={message}
                onChange={handleInputChange}
                placeholder="Type a message..."
                className="chat-input"
            ></textarea>
                        <button type="submit" className="chat-send">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
