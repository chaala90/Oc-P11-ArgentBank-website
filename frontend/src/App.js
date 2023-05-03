import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Login from "./pages/Login"
import User from "./pages/User"
import EditUser from "./pages/EditUser"
import Transaction from "./pages/Transaction"

import "./App.css"
function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={<User />} />
        <Route path="/EditUser" element={<EditUser />} />
        <Route path="/Transaction" element={<Transaction />} />
      </Routes>
      <Footer />
      </Router>
   </div>   
)}

export default App;
