import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";

function App() {
 return (
  <div className="App">
   <Routes>
    <Route path="/" element={<SignIn />} />
   </Routes>
  </div>
 );
}

export default App;
