import React from "react";
import "../pages/edituser.css";
import { NavLink,useNavigate } from "react-router-dom";
import EditedName from "../components/Editform";

const Accounts = [
  {
    id: 1,
    title: "Argent Bank Checking (x8349)",
    amount: "$48,098.43",
    description: "Available Balance",
  },
  {
    id: 2,
    title: "Argent Bank Savings (x6712)",
    amount: "$48,098.43",
    description: "Available Balance",
  },
  {
    id: 3,
    title: "Argent Bank Credit Card (x8349)",
    amount: "$48,098.43",
    description: "Available Balance",
  },
];

function EditUser({ title, amount, description }) {
    return(
<>
      <EditedName />
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