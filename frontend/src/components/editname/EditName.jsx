import React, { useEffect, useState } from "react"
import "../editname/editname.css";
import { NavLink } from "react-router-dom";
import { setUsername } from "../../featureRedux/userSlice"; 
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";

function EditName (){
  const loginInfos = useSelector((state) => state.user.loginInfos);
  const token = useSelector((state) => state.user.token);
  const [userName, setUserNames] = useState("");
  const dispatch = useDispatch();
  useEffect(()=>{
    getUserData()}, []);

  const getUserData = () => {
    Axios.post("http://localhost:3001/api/v1/user/profile", loginInfos, {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        const updatedUserName = response.data.body.userName;
        setUserNames(updatedUserName);
        dispatch(setUsername(updatedUserName));
      })
      .catch(function (error) {
        console.error("Token incorrect.");
        console.log(error);
      });
  };
 
    return (
      <div className="header">
        <h1>Welcome back<br />{userName}!</h1>
        <NavLink to="/EditUser">
        <button className="weight">Edit Name</button>
        </NavLink>
      </div>
      
     ) }
      export default EditName;
