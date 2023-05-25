import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import './LoginForm.css';
import {login} from "../../authSlice"
import {useNavigate} from 'react-router-dom';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            idInstance: "",
            apiTokenInstance: "",
        }
    });

    const onSubmit = async (data) => {
        console.log('Submitting form with data:', data);
        try {
            await dispatch(login(data)).unwrap();
            navigate('/list');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-panel">
                <div className={"formContent"} >
                    <h2>Sign in to WhatsApp</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={"formContent"}>
                            <input
                                {...register('idInstance', {required: 'idInstance is required'})}
                                placeholder="idInstance"
                                className="login-input"
                            />
                            {errors.idInstance && <p className="login-error">{errors.idInstance.message}</p>}

                            <input
                                {...register('apiTokenInstance', {required: 'apiTokenInstance is required'})}
                                placeholder="apiTokenInstance"
                                className="login-input"
                            />
                            {errors.apiTokenInstance && <p className="login-error">{errors.apiTokenInstance.message}</p>}

                            <button type="submit" className="login-button">Log In</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};
