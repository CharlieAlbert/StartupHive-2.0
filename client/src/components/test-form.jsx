import React, { useState } from "react";
import "./signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "cookies-js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });
      const { message, token } = response.data;
      if (message === "Password does not match") {
        alert(message);
      } else if (message === "No user found") {
        console.log(message);
      } else {
        Cookies.set("authType", token, { expires: 216000 });
        console.log(response.data.token);
        navigate('/profile')
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while logging in");
    }
  };
  

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-43 login-title">
                Login to continue
              </span>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input100"></span>
                <span className="label-input100">Email</span>
              </div>

              <div className="wrap-input100">
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  onChange={(e) => setPassword(e.target.value)}
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
                  className="btn btn-custom btn-lg page-scroll btn-login"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>

              <div className="text-center p-t-46 p-b-20">
                <span className="txt2"></span>
              </div>
            </form>

            <div className="login-image login100-more"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
