import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';

const Auth = () => {
    const handleLogin = (data) => {
        console.log(data);
        // Call your login API here
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={handleLogin} />
        </div>
    );
};

export default Auth;
