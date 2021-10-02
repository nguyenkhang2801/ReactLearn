import { FormControl, Input, InputLabel, makeStyles } from '@material-ui/core';
import React from 'react';

InputImage.propTypes = {

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

function InputImage({ name, label, register, error, required }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.margin}>
      <InputLabel
        classes={{ focused: classes.focused }}
      >{label}</InputLabel>
      <Input
        classes={{ underline: classes.underline }}
        className={classes.textField}
        name={name}
        type="file"
        {...register([name].toString(),
          { ...required }
        )}

      />
      {error && <div className={classes.warning}>{error.message}</div>}
    </FormControl>
  )
}

export default InputImage;