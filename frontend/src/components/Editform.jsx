import React, { useState } from "react";
import "../components/editform.css";
import { NavLink,useNavigate } from "react-router-dom";
import { setUsername } from "../featureRedux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
function EditedName() {
    const dispatch = useDispatch();
    const Navigate=useNavigate();
    const [userName, setUserName] = useState("");
    const [updateName, setUpdateName] = useState(false);
    const token = useSelector((state) => state.user.token);
  
    const handleUpdateName = () => {
      const username = document.getElementById("username").value;
      if (username !== "") {
        setUserName(username);
        dispatch(setUsername(username));
        updateData(username);
        setUpdateName(!updateName);
        Navigate('/User');
      } else {
        console.error("Username is required.");
      }
    };
  
    const updateData = (username) => {
      const userData = {
        userName:username,
      };
      Axios.put("http://localhost:3001/api/v1/user/profile", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error updating username.");
          console.log(error);
        });
    };
    return(
<div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Edit user info</h1>
        <form>
          <div className="input-user">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
          </div>
          <div className="input-user">
            <label htmlFor="firstname">First name:</label>
            <input disabled="disabled" readOnly type="firstname" id="username" />
          </div>
          <div className="input-user">
            <label htmlFor="lastname">Last name:</label>
            <input disabled="disabled" readOnly type="lastname" id="username" />
          </div>
          <div className="row">
          <button className="edit-button" onClick={handleUpdateName}>Save</button>
          <button className="edit-button">Cancel</button>
          </div>
        </form>
      </div>
    )}
    export default EditedName;