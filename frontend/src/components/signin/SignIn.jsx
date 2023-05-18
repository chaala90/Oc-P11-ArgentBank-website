import React, { useEffect } from "react";
import "../signin/signin.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogout, setUsername } from "../../featureRedux/userSlice";
import { NavLink } from "react-router-dom";

function SignIn() {
  const token = useSelector((state) => state.user.token);
  const username = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      dispatch(setUsername(username));
    }
  }, [username, dispatch]);

  const handleSignOut = () => {
    dispatch(setLogout());
  };

  if (token) {
    return (
      <div className="rownav">
        <NavLink className="main-nav-item" to="/User">
          <p className="usernamep">{username}</p>
          <i className="fa fa-user-circle"></i>
        </NavLink>
        <NavLink className="main-nav-item" to="/" onClick={handleSignOut}>
          <i className="fa fa-sign-out"></i>
          <p className="sign-out-container">Sign Out</p>
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