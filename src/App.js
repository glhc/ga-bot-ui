import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./App.css";

import StyledNavBar from './components/navBar/NavBar.js';
import StyledLogin from './components/login/Login.js';
import SignUp from './components/login/Login.js';
import Home from './components/home/Home.js';

import People from './components/people/People.js';
import Profile from './components/people/Profile.js';
import Chatroom from './components/chatroom/Chatroom.js';
import ChatroomList from './components/chatroom/ChatroomList.js';
import StyledChatroom from './components/chatroom/Chatroom.js';

function App() {
  return (
    <Router>
      <StyledNavBar />

      <Switch>
        <Route path='/chatroom'>
          <Chatroom />
        </Route>
        <Route path='/profile/:id'>
          <Profile />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/chatroom'>
          <StyledChatroom />
        </Route>
        <Route path='/profile'>
          <StyledLogin />
        </Route>
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