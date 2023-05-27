/*
// Logout.js
import React from 'react';
import { useLogoutMutation } from '../api';
import { useDispatch } from 'react-redux';
import { logout as logoutSlice } from '../authSlice';  // If you have this in your redux slice

const RtkQueryLogout = () => {
    const [logout, { isLoading }] = useLogoutMutation();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await logout({ idInstance: /!* from redux state *!/, apiTokenInstance: /!* from redux state *!/});
            dispatch(logoutSlice());
            // If you have any other actions that need to be taken upon logout, put them here
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <button onClick={handleLogout} disabled={isLoading}>
            Logout
        </button>
    );
};

export default RtkQueryLogout;
*/
