import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Investify from "./Pages/Investify";
import Profile from "./Pages/Profile";
import Savings from "./Pages/Savings";
import SideBar from "./Components/SideBar/SideBar";
import "./App.css"

function App() {
 return (
  <SideBar>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/savings" element={<Savings />} />
    <Route path="/investify" element={<Investify />} />
    <Route path="/settings" element={<Profile />} />
    <Route path="/login" element={<SignIn />} />
    <Route path="/register" element={<SignUp />} />
   </Routes>
  </SideBar>
 );
}

export default App;
