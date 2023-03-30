import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import GoogleButton from "react-google-button";
import firebase from "firebase/compat/app";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/roles");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
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
                  <label className="label-checkbox100 " for="ckb1">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="container-login100-form-btn">
                <button class="btn btn-custom btn-lg page-scroll btn-login">
                  Login
                </button>
              </div>

              <div class="text-center p-t-46 p-b-20">
                <span className="txt2">OR</span>
              </div>

              <div class="login100-form-social flex-c-m signinbtn">
                <GoogleButton onClick={signInWithGoogle}/>
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
