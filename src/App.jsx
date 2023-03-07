import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Investify from "./Pages/Investify";
import Profile from "./Pages/Profile";
import Savings from "./Pages/Savings";
import SideBar from "./Components/SideBar/SideBar";
import "./App.css";
import AllSavings from "./Pages/AllSavings";
import Explore from "./Components/Explore/Explore";
import Completed from "./Components/Completed/Completed";
import MyInvestments from "./Components/MyInvestments/MyInvestments";
import investments from "./Components/Invest/investments";
import Piggybank from "./Pages/Piggybank"
import Safelock from "./Pages/Safelock"
import Targets from "./Pages/Targets"
import FlexNaira from "./Pages/FlexNaira"
import savingDetails from "./Components/Card/savingDetails";

function App() {
 const [isOpen, setIsOpen] = useState(false);
 const toggle = () => setIsOpen(!isOpen);
 const [investment, setInvestment] = useState(investments);
 
 return (
  <div className="app">
   <SideBar />
   <div className="main" style={{ width: isOpen ? "85%" : "97%" }}>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/savings" element={<Savings />} />
     <Route path="/savings" element={<AllSavings />} >
     <Route path="piggy" element={<Piggybank />} />
     <Route path="safelock" element={<Safelock />} />
     <Route path="target" element={<Targets />} />
     <Route path="flex" element={<FlexNaira />} />
     </Route>
     <Route path="/investify" element={<Investify />}>
      <Route path="/investify" element={<MyInvestments />} />
      <Route path="explore" element={<Explore />} />
      <Route path="completed" element={<Completed />} />
     </Route>
     <Route path="/settings" element={<Profile />} />
     <Route path="/login" element={<SignIn />} />
     <Route path="/register" element={<SignUp />} />
    </Routes>
   </div>
  </div>
 );
}

export default App;
