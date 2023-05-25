// App.js
import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {ChatList} from "./features/chat/components/chatList/ChatList";
import {ChatPage} from "./features/chat/components/chatPage/ChatPage";
import notFound from "./assets/404.jpg"
import {Header} from "./common/components/header/Header";
import {LoginForm} from "./features/auth/components/loginForm/LoginForm";

function App() {
    // Mock selected chat
    const selectedChat = {
        id: 'mockChatId',
        name: 'Mock Chat',
        messages: [
            { sentByMe: true, text: 'Hello there!' },
            { sentByMe: false, text: 'Hi, how can I help you?' },
            { sentByMe: true, text: 'I have a question about my order.' },
            { sentByMe: false, text: 'Sure, I can assist with that. Can you please provide your order number?' },
            // More messages...
        ]
    };

    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<LoginForm/>}/>
                    <Route path="/list" element={<ChatList/>}/>
                    {/* When ready to implement real chat data, use this line instead */}
                    {/* <Route path="/chat/:chatId" element={<ChatPage />}/> */}
                    {/* Using mock data for now */}
                    <Route path="/chat" element={<ChatPage selectedChat={selectedChat}/>}/>
                    <Route path="/404" element={<div style={{textAlign: "center"}}><img src={notFound} alt="Not Found"/></div>}/>
                    <Route path="*" element={<Navigate to="/404"/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
