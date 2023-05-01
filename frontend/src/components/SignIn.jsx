import React from "react";
import { NavLink } from "react-router-dom";

function SignIn({ token }) {
  return (
    <div>
      {token ? (
        <NavLink className="main-nav-item" to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      ) : (
        <NavLink className="main-nav-item" to="/Login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      )}
    </div>
  );
}

export default SignIn;