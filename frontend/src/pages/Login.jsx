import React from "react";
import { useNavigate } from "react-router-dom";
import { setUserToken, setLoginInfos } from "../featureRedux/userSlice";
import { useDispatch } from "react-redux";
import Axios from "axios";
import Formulaire from "../components/Form"

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    Axios.post("http://localhost:3001/api/v1/user/login", data)
      .then((response) => {
        dispatch(setLoginInfos(data));
        dispatch(setUserToken(response.data.body.token));
        navigate("/User");
      })
      .catch((error) => {
        console.log(error);
        console.error("Cet identifiant ou ce mot de passe est inconnu, veuillez réessayer.");
      });
  };
  return (
    <>
    <div className="main bg-dark">
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Formulaire  onSubmit={handleSubmit} />
      </div>
    </div>
    </>
  );
};

export default Login;

