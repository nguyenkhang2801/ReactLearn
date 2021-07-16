import React from 'react';
import { makeStyles, Input, FormControl, InputLabel } from '@material-ui/core';

InputText.propTypes = {
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
  error: {
    '&:after': {
      borderBottomColor: '#f44336!important',
    }
  },
  errorLabel: {
    '&:after': {
      color: '#f44336!important',
    }
  },
  warning: {
    color: '#C92427',
  },
}))

function InputText({ name, label, register, error, required }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.margin}>
      <InputLabel
        classes={{ focused: classes.focused, error: classes.errorLabel }}
      >{label}</InputLabel>
      <Input

        classes={{ underline: classes.underline, error: classes.error }}
        className={classes.textField}
        name={name}
        {...register([name].toString(),
          { ...required }
        )}

      />
      {error && <div className={classes.warning}>{error.message}</div>}
    </FormControl>
  )


}

export default InputText;