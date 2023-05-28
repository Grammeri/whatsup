import React, { useState, useContext, useEffect, useRef } from "react";
import "./ChatPage.css";
import { useParams } from "react-router-dom";
import {
  useSendMessageMutation,
  useReceiveNotificationQuery,
  useDeleteNotificationMutation,
} from "../../../../app/rtkQueryApi";
import { AuthContext } from "../../../../services/reactContext/AuthContext";

export const ChatPage = () => {
  const { idInstance, apiTokenInstance } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const { chatId } = useParams();
  const [messages, setMessages] = useState([]);
  const [sendMessage, { isError: sendError, isLoading: sendLoading }] =
    useSendMessageMutation();
  const textAreaRef = useRef(null);

  const {
    data: receivedMessage,
    error: receiveError,
    isLoading: receiveLoading,
  } = useReceiveNotificationQuery({ idInstance, apiTokenInstance });
  const [deleteNotification, { isSuccess, isError: deleteError }] =
    useDeleteNotificationMutation();

  useEffect(() => {
    if (receivedMessage) {
      setMessages((prev) => [
        ...prev,
        { ...receivedMessage, sender: "received" },
      ]);
      deleteNotification({
        idInstance,
        apiTokenInstance,
        receiptId: receivedMessage.receiptId,
      });
    }
    if (receiveError) {
      console.error("Failed to receive message:", receiveError);
    }
    if (deleteError) {
      console.error("Failed to delete message:", deleteError);
    }
  }, [receivedMessage, receiveError, deleteError]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    autoExpandTextArea();
  };

  const autoExpandTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      return;
    }
    try {
      await sendMessage({ chatId, message, idInstance, apiTokenInstance });
      setMessages((prev) => [...prev, { body: message, sender: "sent" }]);
      setMessage("");
      textAreaRef.current.style.height = "auto"; // Reset TextArea height after submission
    } catch (error) {
      console.error(`Failed to send a message: ${error}`);
    }
  };

  if (sendLoading || receiveLoading) {
    return <div>Loading...</div>; // Adjust this to your loading component
  }

  return (
    <AuthContext.Consumer>
      {(authContext) => (
        <div className="chat-page">
          <div className="chat-window">
            <h1 className="chat-name">Chat with {chatId}</h1>

            {sendError && <div>An error occurred while sending a message</div>}
            {receiveError && (
              <div>An error occurred while receiving a message</div>
            )}
            {deleteError && (
              <div>An error occurred while deleting a message</div>
            )}

            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`chat-message ${message.sender}`}>
                  <p>
                    {message.instanceData && message.instanceData.body
                      ? message.instanceData.body
                      : "No Message"}
                  </p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="chat-form">
              <div className="input-wrapper">
                <textarea
                  ref={textAreaRef}
                  value={message}
                  onChange={handleInputChange}
                  placeholder="Type a message..."
                  className="chat-input"
                ></textarea>
                <button type="submit" className="chat-send">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AuthContext.Consumer>
  );
};
