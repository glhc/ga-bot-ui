import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {
  return (
    <>
      <p> NavBar Component </p>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      
      {props.children}
    </>
  );
}

export default NavBar;
