import React from "react"
import "../pages/main.css";
import { NavLink } from "react-router-dom";

function EditName (){
    return (
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <NavLink to="/EditUser">
        <button className="edit-button">Edit Name</button>
        </NavLink>
      </div>
      
     ) }
      export default EditName;