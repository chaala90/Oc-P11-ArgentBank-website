import React from "react";
import { NavLink } from "react-router-dom";
import "../pages/errorpage.css"
function ErrorPage(){
    return(
    <div>
<i className="fa-solid fa-triangle-exclamation"></i>
<p className="oups">Oups! HTTP ERROR 404.</p>
<NavLink  to="/">
      <button className="sign-in-button">Retourner sur la page d’accueil</button>
      </NavLink>
    </div>
)}
export default ErrorPage;