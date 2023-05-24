import './App.css';
import LoginForm from "./features/auth/components/loginForm/LoginForm";
import {Navigate, Route, Routes} from "react-router-dom";
import {ChatInput} from "./features/chat/components/chatInput/ChatInput";
import {ChatList} from "./features/chat/components/chatList/ChatList";
import {ChatWindow} from "./features/chat/components/chatWindow/ChatWindow";
import notFound from "./assets/404.jpg"

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/input" element={<ChatInput/>}/>
            <Route path="/list" element={<ChatList/>}/>
            <Route path="/window" element={<ChatWindow/>}/>
            <Route path="/404"
                   element={<div style={{textAlign: "center"}}><img src={notFound} alt="Not Found"/></div>}/>
            <Route path="*" element={<Navigate to="/404"/>}/>
        </Routes>
    </div>
  );
}

export default App;
