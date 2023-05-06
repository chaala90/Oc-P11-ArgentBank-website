import React from "react"
import "../pages/main.css"
import { NavLink } from "react-router-dom";

const Accounts = [
  {
    id: 1,
    title: "Argent Bank Checking (x8349)",
    amount: "$48,098.43",
    description:"Available Balance",
  },
  {
    id: 2,
    title: "Argent Bank Savings (x6712)",
    amount: "$48,098.43",
    description:"Available Balance",
  },
  {
    id: 3,
    title: "Argent Bank Credit Card (x8349)",
    amount: "$48,098.43",
    description:"Available Balance",
  },
];
function EditUser({title, amount, description}) {
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
            <input disabled="disabled" type="firstname" id="username" />
          </div>
          <div className="input-user">
            <label htmlFor="lastname">Last name:</label>
            <input disabled="disabled" type="lastname" id="username" />
          </div>
          <div className="row">
          <button className="edit-button">Save</button>
          <button className="edit-button">Cancel</button>
          </div>
        </form>
      </div>
      <div className="column">
        {Accounts.map((account) => (
          <div className="darkField" key={account.id}>
            <div className="left">
              <h3 className="account-title">{account.title}</h3>
              <p className="account-amount">{account.amount}</p>
              <p className="account-amount-description">{account.description}</p>
            </div>
            <NavLink to="/Transaction">
              <i className="fa-solid fa-chevron-right"></i>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}
    export default EditUser;