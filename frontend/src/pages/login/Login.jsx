import React from "react";
import Formulaire from "../../components/form/Form"

const Login = () => {

  return (
    <>
    <div className="main bg-dark">
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Formulaire/>
      </div>
    </div>
    </>
  );
};

export default Login;
