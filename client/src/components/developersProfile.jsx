import { React, useState, useEffect } from "react";
import Navigation from "./navigation2";
import "./userProfilePage.css";
import { Link } from "react-router-dom";
import Projects from "./projects";
import JsonData from "../data/data.json";
import axios from "axios";

const DeveloperProfilePage = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [investedProjects, setInvestedProjects] = useState(8);

  const [developerProfilePage, setDeveloperProfilePage] = useState({});

  const handleProfile = async () => {
    console.log("Handle profile called");
    try {
      const response = await axios.post("/api/profile", {
        firstName,
        middleName,
        lastName,
        userName,
        bio,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setDeveloperProfilePage(JsonData);
  }, []);

  return (
    <div className="container-fluid">
      <Navigation />
      <br />
      <br />
      <br />
      <br />
      <div className="row rowPadding">
        <div className="col-md-4">
          <div className="blueBox">
            <h2>
              <b>Profile</b>
            </h2>
          </div>
        </div>
        <form onClick={handleSubmit}>
          <div className="col-md-4">
            <div className="userDetails">
              <h3>Profile Details</h3>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="middleName">Middle Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="middleName"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userName">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio:</label>
                <textarea
                  className="form-control"
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <button onClick={handleProfile}>Edit</button>
              <div className="form-group">
                <label htmlFor="investedProjects">
                  Invested Projects:&nbsp;
                </label>
                {investedProjects}
              </div>
            </div>
          </div>
        </form>
        <div className="col-md-4">
          <Link to="/investor-dashboard">
            <div className="dashboard-arrow ">
              <i className="fa fa-arrow-right arrow-right"></i>
              Dashboard
            </div>
          </Link>
        </div>
      </div>
      <Projects data={developerProfilePage.Projects} />
    </div>
  );
};

export default DeveloperProfilePage;
