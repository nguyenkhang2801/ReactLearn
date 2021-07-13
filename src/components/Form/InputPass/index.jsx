import React, { useState } from 'react';
import { makeStyles, Input, FormControl, InputLabel, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons'

InputPassword.propTypes = {

};

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        width: '100%',
        border: '0',
        margin: '0',
        display: 'inline-flex',
        padding: '0',
        position: 'relative',
        minWidth: '0',
        flexDirection: 'column',
        verticalAlign: 'top',
    },
    textField: {
        width: 'inherit',
    },
    focused: {
        color: 'white!important',
    },
    underline: {
        '&:after': {
            borderBottom: '2px solid white!important',
        }
    },
    warning: {
        color: '#C92427',
    },
}));

function InputPassword({ name, label, register, error }) {
    const classes = useStyles();

    const [show, setShow] = useState(false);

    const handleClickShowPassword = () => {
        setShow(!show);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl className={classes.margin}>
            <InputLabel
                classes={{ focused: classes.focused }}
            >{label}</InputLabel>
            <Input
                classes={{ underline: classes.underline }}
                className={classes.textField}
                name={name}
                type={show ? 'text' : 'password'}
                {...register([name].toString())}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {show ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            {error && <div className={classes.warning}>{error.message}</div>}
        </FormControl>
    )
}

export default InputPassword;