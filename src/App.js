import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import "./App.css";

import StyledNavBar from './components/NavBar/NavBar.js';
import StyledLogin from './components/Login/Login.js';
import SignUp from './components/Login/Login.js';
import Home from './components/Home/Home.js';

function App() {
  return (
    <Router>
      <StyledNavBar />

      <Switch>
        <Route path='/login'>
          <StyledLogin />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
