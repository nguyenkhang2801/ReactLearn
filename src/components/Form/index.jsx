import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputText from './InputText';
import InputPassword from './InputPass';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import SelectForm from './Select';
import RadioForm from './RadioForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Grid, Typography } from '@material-ui/core';
import { useState } from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        background: '#ade4f1',
    },
    form: {
        width: '600px',
        padding: '20px 50px',
        background: '#62C3DE',
        borderRadius: '10px',
    },
    header: {
        width: '100%',
        textAlign: 'center',
        fontSize: 'xx-large',
    },
    submit: {
        marginTop: '10px',
        width: '100%',
        padding: '8px 22px',
        fontSize: '0.9375rem',
        color: 'white !important',
        background: '#033e4b !important',
    },
    grid: {
        justifyContent: 'space-between',
        display: 'flex',
    },
    content: {
        paddingLeft: '10px',
        color: 'gray',
    }
}));

function Form() {
    const classes = useStyles();
    // check phím submit
    const [checkSubmit, setCheckSubmit] = useState(false);

    // Show DATA SUBMIT
    const [check, setCheck] = useState();

    const schema = yup.object().shape({

        username: yup.string().required("This field is required"),
        lastname: yup.string().required("This field is required"),
        select: yup.string().required("This field is required"),
        gender: yup.string().required("This field is required"),
        // email form: <sth>@<sth>.<sth>
        // email: yup.string().email("Invalid email address").required("This field is required"),

        // email form: <sth>@vinova.com.vn
        email: yup
            .string()
            .matches(/[a-zA-Z0-9._\-]+@vinova.com.vn$/, "Invalid email address")
            .required("This field is required"),

        phone: yup
            .number()
            .required("This field is required")
            .typeError("Phone Number must be a number")
            .positive("Phone Number must be a number")
            .integer(),

        password: yup
            .string()
            .oneOf([yup.ref("confirm"), null], "")
            .required("This field is required"),

        confirm: yup
            .string()
            .oneOf([yup.ref("password"), null], "Confirm Password must be same as password")
            .required("This field is required"),
    })

    const { watch, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const select = [{ id: 1, title: "Listen to music" }, { id: 2, title: "Read book" }, { id: 3, title: "Watch TV" }, { id: 4, title: "Others" }];

    const gender = [{ id: 1, title: "Female" }, { id: 2, title: "Male" }];

    const handleClickSubmit = (e) => {
        console.log(e);
    }

    const submit = () => {
        if (!checkSubmit)
            setCheckSubmit(true);
    }

    useEffect(() => {
        setCheck(!checkSubmit || !!errors.username || !!errors.lastname
            || !!errors.select || !!errors.gender || !!errors.email
            || !!errors.phone || !!errors.password || !!errors.confirm);
        //console log kết quả
        console.log("hidden = ", check);

    }, [checkSubmit, errors.username, errors.lastname, errors.select, errors.gender,
        errors.email, errors.phone, errors.password, errors.confirm])

    return (
        <div id="form" className={classes.root}>
            <form name="myform" className={classes.form} onSubmit={handleSubmit(handleClickSubmit)}>
                <div className={classes.header}>SIGN UP</div>
                <InputText
                    name="username"
                    label="First Name"
                    register={register}
                    error={errors.username}
                />

                <InputText
                    name="lastname"
                    label="Last Name"
                    register={register}
                    error={errors.lastname}
                />
                <Grid className={classes.grid}>

                    {/* chỗ này chưa tốt hay gặp lỗi, phải hoàn thiện */}

                    <SelectForm
                        name="select"
                        label="Hobby"
                        value={select}
                        register={register}
                        error={errors.select}
                    />

                    <RadioForm
                        name="gender"
                        label="Gender"
                        value={gender}
                        register={register}
                        error={errors.gender}
                    />
                </Grid>
                <InputText
                    name="email"
                    label="Email"
                    register={register}
                    error={errors.email}
                />
                <InputText
                    name="phone"
                    label="Phone Number"
                    register={register}
                    error={errors.phone}
                />
                <InputPassword
                    name="password"
                    label="Password"
                    register={register}
                    error={errors.password}
                />
                <InputPassword
                    name="confirm"
                    label="Confirm Password"
                    register={register}
                    error={errors.confirm}
                />
                <Button className={classes.submit} type="submit" onClick={submit}>Submit</Button>

                <br />
                <br />
                <div hidden={check}>
                    <Typography style={{
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }} >DATA SUBMIT</Typography>
                    <Typography>
                        First Name:
                        <span className={classes.content}>
                            {watch('username')}
                        </span>
                    </Typography>
                    <Typography>
                        Last Name:
                        <span className={classes.content}>
                            {watch('lastname')}
                        </span>
                    </Typography>
                    <Typography>
                        Hobby:
                        <span className={classes.content}>
                            {watch('select')}
                        </span>
                    </Typography>
                    <Typography>
                        Gender:
                        <span className={classes.content}>
                            {watch('gender')}
                        </span>
                    </Typography>
                    <Typography>
                        Email:
                        <span className={classes.content}>
                            {watch('email')}
                        </span>
                    </Typography>
                    <Typography>
                        Phone:
                        <span className={classes.content}>
                            {watch('phone')}
                        </span>
                    </Typography>
                    <Typography>
                        Password:
                        <span className={classes.content}>
                            {watch('password')}
                        </span>
                    </Typography>
                    <Typography>
                        Confirm Password:
                        <span className={classes.content}>
                            {watch('confirm')}
                        </span>
                    </Typography>
                </div>
            </form>

        </div>
    );
}

export default Form;