import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../../app/rtkQueryApi';
import { AuthContext } from '../../../../src/services/reactContext/AuthContext';
import './Header.css';

export const Header = () => {
    const navigate = useNavigate();
    const { setIdInstance, setApiTokenInstance } = useContext(AuthContext);
    const [logoutMutation] = useLogoutMutation();

    const handleLogout = async () => {
        try {
            await logoutMutation();
            setIdInstance(''); // Clear the idInstance in AuthContext
            setApiTokenInstance(''); // Clear the apiTokenInstance in AuthContext
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div className="titleLogout">
            <header className="header">
                <h1>Тестовое задание Дмитрия Николаева</h1>
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </header>
        </div>
    );
};
