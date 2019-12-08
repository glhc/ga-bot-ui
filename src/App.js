import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import Login from './components/Login/Login.js';
import SignUp from './components/Login/Login.js';

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
