import React, { useEffect } from "react"
import "../pages/main.css";
import { NavLink } from "react-router-dom";
import { setUserFirstName,  setUserLastName } from "../featureRedux/userSlice"; 
import { useDispatch, useSelector } from "react-redux";

function EditName ({firstName}){
  const userFirstName = useSelector((state) => state?.user?.firstName);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setUserFirstName(firstName));
    dispatch(setUserLastName());
  }, [dispatch, firstName]);
 
    return (
      <div className="header">
        <h1>Welcome back<br />{`${userFirstName}`}!</h1>
        <NavLink to="/EditUser">
        <button className="weight">Edit Name</button>
        </NavLink>
      </div>
      
     ) }
      export default EditName;