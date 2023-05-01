import React from "react";
import axios from "axios";
import { URL } from "../components/Api";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Formulaire({ onSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate;
  let User={username, password};
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:3001/api/v1/user/login", User, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(User),
    });
    if (response.status === 200) {
      const { token } = response.data.body;
      localStorage.setItem("token", token);
     
      navigate("/profile");
    }
  } catch (error) {
    if (error.response.status === 401 || error.response.status === 404) {
      console.log("Error: " + error.response.data.message);
    }
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
        )}
        export default Formulaire;