import React, { useState } from 'react';
import { useLoginMutation, useLogoutMutation } from '../../../../app/rtkQueryApi';
import { useNavigate } from 'react-router-dom';

export const RtkQueryLoginForm = () => {
    const [idInstance, setIdInstance] = useState('1101824138');
    const [apiTokenInstance, setApiTokenInstance] = useState('f9715a604e704343afe3b1af600a699de4e931a608f94ee3a3');
    const [loginMutation, { data: loginData, error: loginError }] = useLoginMutation();
    const [logoutMutation] = useLogoutMutation();
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginMutation({ idInstance, apiTokenInstance });
            console.log(response);
            if (response.data.wid) {
                navigate('/list');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };


    if (loginError) {
        console.error('Login failed:', loginError);
    }

    const handleLogout = async () => {
        try {
            await logoutMutation();
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Id Instance"
                    value={idInstance}
                    onChange={(e) => setIdInstance(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Api Token Instance"
                    value={apiTokenInstance}
                    onChange={(e) => setApiTokenInstance(e.target.value)}
                />
                <button type="submit">Log In</button>
            </form>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
};
