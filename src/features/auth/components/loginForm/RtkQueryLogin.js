import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container } from 'react-bootstrap';
import { useLoginMutation, useLogoutMutation } from '../../../../app/rtkQueryApi';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../services/reactContext/AuthContext';
import './RtkQueryLogin.css'; // Import the CSS file

export const RtkQueryLoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { idInstance, apiTokenInstance, setIdInstance, setApiTokenInstance } = useContext(AuthContext);
    const [loginMutation, { error: loginError }] = useLoginMutation();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const result = await loginMutation({ idInstance: data.idInstance, apiTokenInstance: data.apiTokenInstance });
            console.log('Login successful, setting context values');
            setIdInstance(data.idInstance);
            setApiTokenInstance(data.apiTokenInstance);
            navigate('/list');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };


    return (
        <AuthContext.Provider value={{ idInstance, apiTokenInstance, setIdInstance, setApiTokenInstance }}>
            <Container className="login-container">
                <div className="login-panel">
                    <div className="formContent">
                        <h2>Sign in to WhatsApp</h2>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group controlId="idInstance">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Id Instance"
                                    {...register('idInstance', { required: true })}
                                    isInvalid={errors.idInstance}
                                    className="login-input"
                                />
                                {errors.idInstance && <Form.Control.Feedback type="invalid" style={{"display":"flex", "justify-content":"center", "color":"red"}}>Id Instance is required</Form.Control.Feedback>}
                            </Form.Group>

                            <Form.Group controlId="apiTokenInstance">
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Api Token Instance"
                                    {...register('apiTokenInstance', { required: true })}
                                    isInvalid={errors.apiTokenInstance}
                                    className="login-input apiTokenInstance"
                                />
                                {errors.apiTokenInstance && (
                                    <Form.Control.Feedback type="invalid" style={{"display":"flex", "justify-content":"center", "color":"red"}}>Api Token Instance is required</Form.Control.Feedback>
                                )}
                            </Form.Group>

                            <div className="buttons">
                                <Button variant="primary" type="submit" className="login-button">
                                    Log In
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
                {loginError && <div className="error-message">Login failed: {loginError.message}</div>}
            </Container>
        </AuthContext.Provider>
    );
};
