import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout, setUserFirstName} from "../featureRedux/userSlice";
import { NavLink, useNavigate } from "react-router-dom";

function SignIn() {
  const token = useSelector((state) => state.user.token);
  const userFirstName = useSelector((state) => state?.user?.firstName);
  console.log(userFirstName);
  const dispatch = useDispatch();
  /*const navigate= useNavigate();*/

  const handleSignOut = () => {
    dispatch(setLogout());
  }
  const handleSignIn = () => {
    dispatch(setUserFirstName(userFirstName));
  };

  if (token) {
    return (
      <div>
        <NavLink className="main-nav-item" to="/User">
          <i className="fa fa-user-circle"></i>
          <p className="user name">`${userFirstName}`</p>
        </NavLink>
        <NavLink className="main-nav-item" to="/" onClick={handleSignOut}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </div>
    );
  } else {
    return (
      <div>
        <NavLink className="main-nav-item" to="/Login" onClick={handleSignIn}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    );
  }
}

export default SignIn;