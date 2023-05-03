import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SignIn() {
  const token = useSelector((state) => state.user.token);
  const userFirstName = useSelector((state) => state.user.firstName);

  if (token) {
    return (
      <div>
        <NavLink className="main-nav-item" to="/">
          <i className="fa fa-user-circle"></i>
          {userFirstName}
        </NavLink>
        <NavLink className="main-nav-item" to="/Login">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </div>
    );
  } else {
    return (
      <div>
        <NavLink className="main-nav-item" to="/Login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    );
  }
}

export default SignIn;