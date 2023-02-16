import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
 return (
  <div className="App">
   <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/register" element={<SignUp />} />
   </Routes>
  </div>
 );
}

export default App;
