import React from 'react';
import { Redirect, Route } from 'react-router';

PrivateRoute.propTypes = {

};

function PrivateRoute({ component: Component, isLogged, ...rest }) {


  return (
    <Route {...rest} >
      {
        isLogged === true ?
          <Component /> :
          <Redirect to="/sign-in" />
      }
    </Route>
  );
}

export default PrivateRoute;