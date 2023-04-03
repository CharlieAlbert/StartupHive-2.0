import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import socketIO from "socket.io-client";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import LandingPage from "./components/LandingPage";
import Register from "./components/signup";
// import "./App.css";
import Superchat from "./components/superchat";
import InvestorProfile from "./components/investorProfile";
import DeveloperProfile from "./components/developerDashboard";
import UserRole from "./components/user-role";
import TestForm from "./components/test-form";
import Login from "./components/test-form";
import SignUp from "./components/signup";
import ChatRoom from "./components/ChatRoom";
import DeveloperDashboard from "./components/developerDashboard";
import InvestorDashboard from "./components/investorDashboad";
import ProfilePage from "./components/test_profile";
import UserProfile from "./components/userDashboard";
import UIDashboard from "./components/dashboard";

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
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/chat" element={<ChatRoom />} />
          <Route exact path="/dashboard" element={<InvestorDashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
