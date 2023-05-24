// App.js
import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {ChatInput} from "./features/chat/components/chatInput/ChatInput";
import {ChatList} from "./features/chat/components/chatList/ChatList";
import {ChatPage} from "./features/chat/components/chatPage/ChatPage";
import notFound from "./assets/404.jpg"
import {Header} from "./common/components/header/Header";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<LoginForm/>}/>
                    <Route path="/list" element={<ChatList/>}/>
                    <Route path="/window/:chatId" element={<ChatPage/>}/>
                    <Route path="/404"
                           element={<div style={{textAlign: "center"}}><img src={notFound} alt="Not Found"/></div>}/>
                    <Route path="*" element={<Navigate to="/404"/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
