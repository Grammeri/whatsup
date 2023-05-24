import React from 'react';
import { useForm } from 'react-hook-form';
import './LoginForm.css';

const LoginForm = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className="login-container">
            <div className="login-panel">
                <h2>Sign in to WhatsApp</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register('idInstance', { required: 'idInstance is required' })}
                        placeholder="idInstance"
                        className="login-input"
                    />
                    {errors.idInstance && <p className="login-error">{errors.idInstance.message}</p>}

                    <input
                        {...register('apiTokenInstance', { required: 'apiTokenInstance is required' })}
                        placeholder="apiTokenInstance"
                        className="login-input"
                    />
                    {errors.apiTokenInstance && <p className="login-error">{errors.apiTokenInstance.message}</p>}

                    <button type="submit" className="login-button">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
