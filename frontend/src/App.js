import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/headerfooter/Navbar"
import Footer from "./components/headerfooter/Footer"
import Home from "./pages/home/Home"
import ErrorPage from "./pages/error/ErrorPage"
import Login from "./pages/login/Login"
import User from "./pages/user/User"
import EditUser from "./pages/edituser/EditUser"

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
      </Routes>
      <Footer />
      </Router>
   </div>   
)}

export default App;
