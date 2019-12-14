import React, { useState, useEffect } from "react";
import {BACKEND_URL} from "../../config";
import StyledLogin from './StyledLogin.js';

/*
 * Provides the interface for a user to login
 * @todo what endpoint does the login form need to go to? Guessing '/login'
 */
function Login(props) {
  
  /* Create a state */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  /*
   * Will use the fetch API to send data away
   * (Unless we decide the <form> element will do it natively
   */
  function handleLogin(event) {
    event.preventDefault();
    const credentials = {
      "auth": {
        "email": email,
        "password": password
      }
    };
    const fetchOptions = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(credentials),
      headers: {"Content-Type": "application/json; charset=utf-8"}
    };
    
    fetch(BACKEND_URL + '/user_token', fetchOptions)
      .then(response => response.json())
      .then(response => handleAuthResponse(response));
  };

  /*
   * If http code is 201, store JWT token in sessionStorage.
   * If http code is 404, show error
   */
  function handleAuthResponse(data) {
    console.log('Auth response:');
    console.log(data);
  };

/* sets the state variable when an input field changes */
  function handleChange(event) {
    switch (event.target.type) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        console.log('input field type not recognised as usernamne or password');
        console.log('input type:', event.target.type, 'type:', typeof event.target.type);
    }
  };
  
  return (
    <StyledLogin>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <div className="form-group">
          <label>Email address</label>
          <input name="something"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </StyledLogin>
  );
}

export default Login;
