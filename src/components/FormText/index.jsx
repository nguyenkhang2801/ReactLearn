import React from "react";
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import InputText from './InputText';

function FormText() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        validationSchema: Yup.object({
            login: Yup.string().max(10, 'Login must be shorter than 10 characters').required('Required'),
            password: Yup.string().min(6, 'Password should be longer than 6 characters').required('Required')
        }),
    })

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <header>
                Signin
            </header>
            {/* <input
                id="login"
                name="login"
                type="text"
                {...register("login", { required: "true" })}
            />
            {errors.login && <div>{errors.login.message}</div>} */}
            <InputText
                id="login"
                name="login"
                type="text"
                label="Login"
                register={register}
                error={errors.login}
            />
            <InputText
                id="password"
                type="password"
                name="password"
                label="Password"
                register={register}
                error={errors.password}
            />
            <button type="submit">Log in</button>
        </form>
    );
};

export default FormText;