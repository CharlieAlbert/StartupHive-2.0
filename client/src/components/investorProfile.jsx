import { React, useState, useEffect } from "react";
import Navigation from "./navigation2";
import "./userProfilePage.css";
import { Link } from "react-router-dom";
import Projects from "./projects";
import JsonData from "../data/data.json";
import axios from "axios";
import Cookies from "cookies-js";

const InvestorProfilePage = () => {
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [investedProjects, setInvestedProjects] = useState(8);

  const [investorProfilePage, setInvestorProfilePage] = useState({});

  const handleFirstChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleMiddleChange = (e) => {
    setMiddleName(e.target.value);
  };

  const handleLastChange = (e) => {
    setLastName(e.target.value);
  };

  const handleUserChange = (e) => {
    setUserName(e.target.value);
  };

  const handleBio = (e) => {
    setBio(e.target.value);
  };

  const handleProfile = async (e) => {
    e.preventDefault();
    console.log("Handle profile called");
    try {
      const response = await axios.post("/api/profile", {
        firstname,
        middlename,
        lastname,
        username,
        bio,
      });
      console.log(response.data);
      alert("Submitted😂");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setInvestorProfilePage(JsonData);
  }, []);

  var fname;
  var lname;
  var mname;
  var uname;
  var email;
  var userbio;

  const editProfile = () => {
    Cookies.set("fname", firstname, { expires: 216000 });
    Cookies.set("lname", lastname, { expires: 216000 });
    Cookies.set("mname", middlename, { expires: 216000 });
    Cookies.set("username", username, { expires: 216000 });
    Cookies.set("email", email, { expires: 216000 });
    Cookies.set("bio", bio, { expires: 216000 });
    window.location.href='/investorProfile';
  };

    fname = Cookies.get("fname");
    lname = Cookies.get("lname");
    mname = Cookies.get("mname");
    email = Cookies.get("email");
    userbio = Cookies.get("bio");
    uname = Cookies.get("username");

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
        <form onSubmit={handleProfile}>
          <div className="col-md-4">
            <div className="userDetails">
              <h3>Profile Details</h3>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstname}
                  onChange={handleFirstChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="middleName">Middle Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="middleName"
                  value={middlename}
                  onChange={handleMiddleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastname}
                  onChange={handleLastChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userName">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  value={username}
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio:</label>
                <textarea
                  className="form-control"
                  id="bio"
                  value={bio}
                  onChange={handleBio}
                />
              </div>
              <div className="form-group">
                <label htmlFor="investedProjects">
                  Invested Projects:&nbsp;
                </label>
                {investedProjects}
              </div>
              <button type="submit" onClick={editProfile}>
                Edit Profile
              </button>
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
          <div className="userDetails">
            <span>
              <b>FirstName:</b> {fname}
            </span>
            <br />
            <br />
            <span>
              <b>MiddleName:</b> {mname}
            </span>
            <br />
            <br />
            <span>
              <b>LastName:</b> {lname}
            </span>
            <br />
            <br />
            <span>
              <b>username:</b> {uname}
            </span>
            <br />
            <br />
            <span>
              <b>Bio:</b> {userbio}
            </span>
            <br />
            <br />
            <span>
              <b>Email:</b> {email}
            </span>
            <br />
            <br />
            <span>
              <b>Invested Projects:</b> {8}
            </span>
            <br />
            <br />
          </div>
        </div>
      </div>
      <Projects data={investorProfilePage.Projects} />
    </div>
  );
};

export default InvestorProfilePage;
