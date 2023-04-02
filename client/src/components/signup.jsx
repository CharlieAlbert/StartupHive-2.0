import React, { useState } from "react";
import "./signup.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import GoogleButton from "react-google-button";
import MicrosoftLogin from "react-microsoft-login";

const SignUp = ({ selectedOption }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = async () => {
    console.log("Handle signup called");
    try {
      const response = await axios.post("/api/register", {
        email,
        password,
        role: selectedOption,
      });
      console.log(response.data);
      navigate("/sidebar");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-43 login-title">
                Sign Up to continue
              </span>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="email"
                  onChange={handleEmailChange}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">Email</span>
              </div>

              <div className="wrap-input100">
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  onChange={handlePasswordChange}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">Password</span>
              </div>

              <div className="flex-sb-m w-full p-t-3 p-b-32">
                <div className="contact100-form-checkbox check">
                  <input
                    className="input-checkbox100"
                    id="ckb1"
                    type="checkbox"
                    name="remember-me"
                  />
                  <label className="label-checkbox100 " htmlFor="ckb1">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="container-login100-form-btn">
                <button
                  type="button"
                  onClick={handleSignup}
                  disabled={!email || !password}
                  className="btn btn-custom btn-lg page-scroll btn-login"
                >
                  Sign Up
                </button>
              </div>

              <div class="text-center p-t-46 p-b-20">
                <span className="txt2">OR</span>
              </div>

              <div class="login100-form-social flex-c-m signinbtn"></div>
            </form>
            <div className="login-image login100-more"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
