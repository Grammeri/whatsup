// App.js
import './App.css';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Header} from "./common/components/header/Header";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {RtkQueryLoginForm} from "./features/auth/components/loginForm/RtkQueryLogin";
import {RtkQueryChatList} from "./features/chat/components/chatList/rtkQueryChatList";
import {ChatPage} from "./features/chat/components/chatPage/rtkQueryChatPage";
import notFound from "./assets/404.jpg"



function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<RtkQueryLoginForm />} />
                        <Route path="/list" element={<RtkQueryChatList />} />
                        <Route path="/chat/:chatId" element={<ChatPage />}/>
                        <Route path="/404" element={<div style={{textAlign: "center"}}><img src={notFound} alt="Not Found"/></div>}/>
                        <Route path="*" element={<Navigate to="/"/>}/>

                    </Routes>
                </div>
            </HashRouter>
        </Provider>
    );
}

export default App;
