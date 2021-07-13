import React from 'react';
import { FormControl, FormControlLabel, makeStyles, Radio, RadioGroup } from '@material-ui/core';

RadioForm.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    label: {
        marginRight: '8px',
    },
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
        justifyContent: 'center',
    },
    checked: {
        color: 'rgba(0, 0, 0, 0.54)!important',
    },
    warning: {
        color: '#C92427',
        paddingLeft: '20px',
    },
}))

function RadioForm({ name, label, value, register, error }) {
    const classes = useStyles();

    return (
        <FormControl className={classes.margin}>

            <RadioGroup
                aria-label="gender"
                row
                className={classes.textField}
                name={name}
                {...register([name].toString())}
            >
                <p className={classes.label}>{label}: </p>
                {value.map((x) => (
                    <FormControlLabel
                        value={x.title}
                        key={x.id}
                        control={
                            <Radio
                                key={x.id}
                                classes={{ checked: classes.checked }}
                            />
                        }
                        label={x.title}
                        labelPlacement="end"
                    />
                ))
                }

            </RadioGroup>
            {error && <div className={classes.warning}>{error.message}</div>}
        </FormControl>

    );
}

export default RadioForm;