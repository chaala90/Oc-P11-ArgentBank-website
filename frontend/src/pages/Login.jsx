import React, {useState} from "react";
import Formulaire from "../components/Form"
import { useNavigate } from "react-router-dom";
/*import { useDispatch } from "react-redux";*/

const Login = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (token) => {
    setToken(token);
    navigate("/Profile");
  };
  return (
    <>
    <div className="main bg-dark">
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Formulaire onSignIn={handleSignIn} />
      </div>
    </div>
    </>
  );
};

export default Login;

