import React from "react"
import '../account/account.css';
import { NavLink } from "react-router-dom";
function Account({title,amount,description}){
    return (
        <>
   <h2 className="sr-only">Accounts</h2>
      <div className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <NavLink to="/Transaction">
          <button className="transaction-button">View transactions</button>
          </NavLink>
        </div>
      </div>
      </>
)}
export default Account;