import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import SignUp from "./signup";
import "./roles.css";
import Cookies from "cookies-js";

const UserRole = () => {
  const redirect = () => {
    window.location.href = "/signup";
  };

  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  console.log(selectedOption);

  const handleCreateAccount = () => {
    navigate("/signup", { role: setSelectedOption });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`selected option is ${selectedOption}`);
        //Set cookie
        Cookies.set('role', selectedOption, {expires: 216000});
  };

  return (
    <div className="_container">
      <div className="main_content">
        <div className="_heading">Join as an Investor or a Developer</div>
        <form onSubmit={handleSubmit}>
          <div className="_roles">
            <div className="investor">
              <div className="radio-select">
                <input
                  type="radio"
                  value="investor"
                  name="role"
                  className="radio"
                  onChange={handleOptionChange}
                  checked={selectedOption === "investor"}
                />
              </div>
              <div className="_content">
                <p>I am an Investor, looking for Startups</p>
              </div>
            </div>

            <div className="developer">
              <div className="_header">
                <input
                  type="radio"
                  value="developer"
                  name="role"
                  className="radio"
                  onChange={handleOptionChange}
                  checked={selectedOption === "developer"}
                />
              </div>
              <div className="_content">
                <p>I am a Developer, looking for funds</p>
              </div>
            </div>
          </div>
        </form>
        <button
          onClick={redirect}
          disabled={!selectedOption}
          className="btn btn-custom btn-lg page-scroll"
        >
          Create Account
        </button>{" "}
        <p className="text-small">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default UserRole;
