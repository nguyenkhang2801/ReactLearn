import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputPassword from './InputPass';
import InputText from './InputText';
import RadioForm from './RadioForm';
import SelectForm from './Select';
const useStyles = makeStyles(() => ({
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

  // Data Form 
  const [data, setData] = useState({});

  const { watch, register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();

  const select = [
    { id: 1, title: "Listen to music" },
    { id: 2, title: "Read book" },
    { id: 3, title: "Watch TV" },
    { id: 4, title: "Others" }
  ];

  const gender = [
    { id: 1, title: "Female" },
    { id: 2, title: "Male" }
  ];

  const handleClickSubmit = (e) => {
    setData(e);
  }

  const submit = () => {
    if (!checkSubmit)
      setCheckSubmit(true);
    // console log kết quả
    console.log("check =", !check);
    // In ra errors để check
    console.log("errors", errors);
  }

  useEffect(() => {
    const newCheck = !checkSubmit || !!errors.username || !!errors.lastname
      || !!errors.select || !!errors.gender || !!errors.email
      || !!errors.phone || !!errors.password || !!errors.confirm
    setCheck(newCheck);
    // nếu xảy ra bất kỳ 1 lỗi sẽ không hiện data, cho đến khi data đúng và bấm lại Submit
    if (newCheck)
      setCheckSubmit(false);
  }, [checkSubmit, errors.username, errors.lastname, errors.select, errors.gender,
    errors.email, errors.phone, errors.password, errors.confirm])

  // check Data
  useEffect(() => {
    console.log("Data", data);
  }, [data])

  return (
    <div id="form" className={classes.root}>
      <form name="myform" className={classes.form} onSubmit={handleSubmit(handleClickSubmit)}>
        <div className={classes.header}>SIGN UP</div>
        <InputText
          name="username"
          label="First Name"
          register={register}
          required={{
            required: 'This field is required',
          }}
          error={errors.username}
        />

        <InputText
          name="lastname"
          label="Last Name"
          register={register}
          required={{
            required: 'This field is required',
          }}
          error={errors.lastname}
        />
        <Grid className={classes.grid}>

          <SelectForm
            name="select"
            label="Hobby"
            value={select}
            register={register}
            required={{
              required: 'This field is required',
            }}
            error={errors.select}
          />

          <RadioForm
            name="gender"
            label="Gender"
            value={gender}
            register={register}
            required={{
              required: 'This field is required',
            }}
            error={errors.gender}
          />
        </Grid>
        <InputText
          name="email"
          label="Email"
          register={register}
          required={{
            required: 'This field is required',
            pattern: {
              value: /^[a-zA-Z0-9._\-]+@vinova.com.vn$/,
              message: 'Invalid email address'
            }
          }}
          error={errors.email}
        />
        <InputText
          name="phone"
          label="Phone Number"
          register={register}
          required={{
            required: 'This field is required',
            pattern: {
              value: /^[0-9]+$/,
              message: "Phone Number must be a number"
            }
          }}
          error={errors.phone}
        />
        <InputPassword
          name="password"
          label="Password"
          register={register}
          required={{
            required: 'This field is required',
            validate: {
              sameConf: (x) =>
                x !== watch("confirm")
                  ? setError("confirm", {
                    type: "manual",
                    message: "Confirm Password must be same as password"
                  })
                  : clearErrors("confirm")
            }
          }}
          error={errors.password}
        />
        <InputPassword
          name="confirm"
          label="Confirm Password"
          register={register}
          required={{
            required: 'This field is required',
            validate: {
              samePass: (x) =>
                x === watch("password")
                || "Confirm Password must be same as password"
            }
          }}
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