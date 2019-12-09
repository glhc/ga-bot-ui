import React, {useState, useEffect} from 'react';
import {BACKEND_URL} from '../../config';

function Login(props) {
  function handleLogin(credentials) {
    fetch()
  };
  return (
    <>
      <p>Start Login Component</p>
      <form>
        <input placeholder="Email"></input>
        <input placeholder="Password" type="password"></input>
        </form>
      <p>End Login Component</p>
    </>
  );
};

export default Login;
