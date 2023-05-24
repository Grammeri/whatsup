import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('idInstance', { required: 'idInstance is required' })}
                placeholder="idInstance"
            />
            {errors.idInstance && <p>{errors.idInstance.message}</p>}

            <input
                {...register('apiTokenInstance', { required: 'apiTokenInstance is required' })}
                placeholder="apiTokenInstance"
            />
            {errors.apiTokenInstance && <p>{errors.apiTokenInstance.message}</p>}

            <button type="submit">Log In</button>
        </form>
    );
};

export default LoginForm;
