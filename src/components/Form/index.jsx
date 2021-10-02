import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addDataSignin } from '../../actions/signin';
import InputImage from './InputImage';
import InputText from './InputText';
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
}));

function Form() {
  const classes = useStyles();

  // định hướng trang sang địa chỉ khác
  const history = useHistory();

  const dispatch = useDispatch();

  const { watch, register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();

  const handleClickSubmit = (e) => {
    const data = { ...e, id: 1 };
    const setData = async () => {
      await dispatch(addDataSignin(data));
    }
    setData();
    dispatch({
      type: "AUTHEN_SUCCESS",
    });

    console.log(data);
  }

  const submit = () => {
    // In ra errors để check
    console.log("errors", errors);
  }

  return (
    <div id="form" className={classes.root}>
      <form name="myform" className={classes.form} onSubmit={handleSubmit(handleClickSubmit)}>
        <div className={classes.header}>SIGN UP</div>
        <InputText
          name="username" label="First Name" register={register}
          required={{
            required: 'This field is required',
          }}
          error={errors.username}
        />

        <InputText
          name="lastname" label="Last Name" register={register}
          required={{
            required: 'This field is required',
          }}
          error={errors.lastname}
        />

        <InputImage
          name="image"
          label="Image"
          register={register}
          required={{
            required: 'This field is required',
          }}
          error={errors.image}
        />

        <Button className={classes.submit} type="submit" onClick={submit}>
          Submit
        </Button>

      </form>

      <div>
        <img src={watch('image')} alt="" />
      </div>

    </div>
  );
}

export default Form;