// components/Header.js
import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Header.css"

export const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // You can add more logic here if you want, such as clearing user info from state or localStorage
        navigate('/');
    }

    return ( <div className={"titleLogout"}>
        <header className="header">

                <h1>Тестовое задание Дмитрия Николаева</h1>
                <button onClick={handleLogout} className="logout-button">Logout</button>


        </header>
    </div>
    );
};

