import React from "react"
import "../components/main.css"
import { NavLink } from "react-router-dom";

function NavbarUser(){
  return(
<div className="main-nav">
<NavLink classname="main-nav-logo" to="/">
  <div className="row">
  <i className="fa-sharp fa-regular fa-vault"></i>
  <h1 className="sr-only">Argent Bank</h1>
  </div>
</NavLink>
<div className="row">
<i className="fa-sharp fa-regular fa-circle-user"></i>
<i className="fa-solid fa-power-off"></i>
<i className="fa-solid fa-power-off"></i>
</div>
<div>
  <NavLink className="main-nav-item" to="/Login">
    <i className="fa fa-user-circle"></i>
    Sign In
  </NavLink>
</div>
</div>
)}
export default NavbarUser;