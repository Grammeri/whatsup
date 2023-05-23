import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("username", { required: "Username is required" })}
                placeholder="Username"
            />
            {errors.username && <p>{errors.username.message}</p>}

            <input
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit">Log In</button>
        </form>
    );
};

export default LoginForm;
