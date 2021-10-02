import React from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import PrivateRoute from '../routers/PrivateRoute';

function HomePage() {

    const isLogin = useSelector(state => state.auth);

    return (
        <div className="App">
            <Router>
                <div>

                    <Switch>
                        <Route exact path="/sign-in" component={SignIn} />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} isLogged={isLogin} />
                        <Route exact path="/">
                            <Redirect to="/sign-in" />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default HomePage;
