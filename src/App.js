import React, { useState } from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import './App.scss';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';

function App() {
  const [check, setCheck] = useState(false);

  const handleCheck = (e) => {
    setCheck(e);
  }

  return (
    <div className="App">
      <Router>
        <div>

          <Switch>
            <Route exact path="/sign-in">
              <SignIn onCheck={handleCheck} />
            </Route>
            <Route exact path="/dashboard">
              {check ? <Dashboard /> : <Redirect to="/sign-in" />}
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
