import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import store from '../store';

Dashboard.propTypes = {

};

const useStyles = makeStyles({
  root: {
    padding: '50px',
  },
  header: {
    textAlign: 'center',
  },
  noidung: {
    padding: '0 200px',
  },
  content: {
    paddingLeft: '10px',
    color: 'gray',
  },
})

function Dashboard(props) {

  const classes = useStyles();

  const dispatch = useDispatch();

  const data = store.getState().signin;
  console.log(data);

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>This is DashBoard</h1>
      <div className={classes.noidung}>
        <Typography style={{
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
        }} >DATA SUBMIT</Typography>
        <Typography>
          First Name:
          <span className={classes.content}>
            {data.username}
          </span>
        </Typography>
        <Typography>
          Last Name:
          <span className={classes.content}>
            {data.lastname}
          </span>
        </Typography>
        <Typography>
          Hobby:
          <span className={classes.content}>
            {data.select}
          </span>
        </Typography>
        <Typography>
          Gender:
          <span className={classes.content}>
            {data.gender}
          </span>
        </Typography>
        <Typography>
          Email:
          <span className={classes.content}>
            {data.email}
          </span>
        </Typography>
        <Typography>
          Phone:
          <span className={classes.content}>
            {data.phone}
          </span>
        </Typography>
        <Typography>
          Password:
          <span className={classes.content}>
            {data.password}
          </span>
        </Typography>
        <Typography>
          Confirm Password:
          <span className={classes.content}>
            {data.confirm}
          </span>
        </Typography>
      </div>

      <Button
        size='large'
        variant='outlined'
        color='primary'
        onClick={() => {
          dispatch({
            type: "AUTHEN_FAILED"
          })
        }}>
        Logout
      </Button>
    </div>
  );
}

export default Dashboard;