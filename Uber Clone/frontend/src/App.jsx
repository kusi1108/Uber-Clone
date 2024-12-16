import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Usersignup from "./pages/Usersignup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<Usersignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
