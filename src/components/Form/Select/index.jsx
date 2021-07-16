import React from 'react';
import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';

SelectForm.propTypes = {

};

const useStyles = makeStyles((theme) => ({
  margin: {
    width: '290px',
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
    '&:after': {
      borderBottom: '2px solid white!important',
    }
  },
  focused: {
    color: 'white!important',
  },
  warning: {
    color: '#C92427',
  },

}))

function SelectForm({ name, label, value, register, error, required }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.margin}>
      <InputLabel
        classes={{ focused: classes.focused }}
      >{label}</InputLabel>
      <Select
        classes={{ underline: classes.underline }}
        className={classes.textField}
        name={name}
        {...register([name].toString(),
          { ...required }
        )}
      >
        {
          value.map((x) => (
            <MenuItem key={x.id} value={x.title}>{x.title}</MenuItem>
          ))
        }

      </Select>
      {error && <div className={classes.warning}>{error.message}</div>}
    </FormControl>


  );
}

export default SelectForm;