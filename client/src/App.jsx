import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import socketIO from "socket.io-client";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import LandingPage from "./components/LandingPage";
import Register from "./components/signup";
import "./App.css";
import Superchat from "./components/superchat";
import InvestorProfile from "./components/investorProfile";
import DeveloperProfile from "./components/developerDashboard";
import UserRole from "./components/user-role";
import TestForm from "./components/test-form";
import Login from "./components/test-form";
import SignUp from "./components/signup";
import ChatPage from "./components/chatpage";
// import Sidebar from "./components/sidebar";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/roles" element={<UserRole />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          {/* <Route exact path="/sidebar" element={<Sidebar />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
