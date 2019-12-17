import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import StyledNavBar from './StyledNavBar';

function NavBar(props) {
  /**
   * Determins whether the user is logged in based off of the session storage.
   * @returns {boolean}
   */
  function isLoggedIn() {
    if (!sessionStorage.getItem("userId")) {
      return false;
    };

    return true;
  }

  /**
   * Removes the userID and jwt token from the session storage.
   */
  function logout() {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("jwt");
  }

  return (
    <StyledNavBar className="navbar container-flex navbar-dark bg-dark fixed-top">
      <Link to="/" className="navbar-link">Home</Link>
      <h3 className="navbar-text">GA Bot</h3>
      {isLoggedIn() &&
        <div className="authentication-grouping col-3">
          <Link to="/login" className="pr-4">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      }
      {!isLoggedIn() &&
        <button onClick={() => logout()}>Logout</button>
      }
      {props.children}
    </StyledNavBar >
  );
}

export default NavBar;
