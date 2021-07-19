import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import './App.scss';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';

function App() {

  const isLogin = useSelector(state => state.signin.auth);

  return (
    <div className="App">
      <Router>
        <div>

          <Switch>
            <Route exact path="/sign-in">
              <SignIn />
            </Route>
            <Route exact path="/dashboard">
              {isLogin ? <Dashboard /> : <Redirect to="/sign-in" />}
            </Route>
            <Route exact path="/">
              <Redirect to="/sign-in" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
