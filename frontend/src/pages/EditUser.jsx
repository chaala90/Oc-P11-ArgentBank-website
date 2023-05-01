import React from "react"
import "../pages/main.css"
import { NavLink } from "react-router-dom";

function EditUser({title, amount, description, key}) {
    return(
<>
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
            <input type="firstname" id="username" />
          </div>
          <div className="input-user">
            <label htmlFor="lastname">Last name:</label>
            <input type="lastname" id="username" />
          </div>
          <div className="row">
          <button className="edit-button">Save</button>
          <button className="edit-button">Cancel</button>
          </div>
        </form>
      </div>
   <div className="column">
<div className="darkField">
<div className="left">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
    <NavLink to="/Transaction">
    <i className="fa-solid fa-chevron-right"></i>
    </NavLink>
</div>
<div className="darkField">
<div className="left">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
    <NavLink to="/Transaction">
    <i className="fa-solid fa-chevron-right"></i>
    </NavLink>
</div>
<div className="darkField">
<div className="left">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
    <NavLink to="/Transaction">
    <i className="fa-solid fa-chevron-right"></i>
    </NavLink>
</div>
   </div>
   </>
    )}
    export default EditUser;