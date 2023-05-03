import React from "react"
import "../pages/main.css";
import { NavLink } from "react-router-dom";
import { setUserFirstName,  setUserLastName } from "../featureRedux/userSlice"; 
import { useDispatch } from "react-redux";

function EditName ({firstName}){
  const dispatch = useDispatch();
  dispatch(setUserFirstName(firstName));
  dispatch(setUserLastName());
    return (
      <div className="header">
        <h1>Welcome back<br />{firstName}!</h1>
        <NavLink to="/EditUser">
        <button className="weight">Edit Name</button>
        </NavLink>
      </div>
      
     ) }
      export default EditName;