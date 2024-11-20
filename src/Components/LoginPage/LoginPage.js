import React from "react";
import "./LoginPage.module.css";
import eyeIcon from "../../assets/eye.png";
import bgImage from "../../assets/bg.png";

export const Login = () => {
    return (
      <div
        className="LOGIN"
        src={bgImage}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          position: "relative",
        }}
      >
        {/* Dark Overlay */}
        <div className="rectangle"></div>
  
        {/* Login Card */}
        <div className="login-card">
          <h1 className="welcome-text">Welcome back,</h1>
  
          <div className="input-group">
            <label className="input-label" htmlFor="username">
              Enter your username or email address
            </label>
            <input
              id="username"
              className="input-field"
              type="text"
              placeholder="Username or email address"
            />
          </div>
  
          <div className="input-group">
            <label className="input-label" htmlFor="password">
              Enter your password
            </label>
            <div className="password-wrapper">
              <input
                id="password"
                className="input-field"
                type="password"
                placeholder="Password"
              />
              <img
                className="eye-icon"
                src={eyeIcon}
                alt="Show Password"
              />
            </div>
            <a className="forgot-password" href="#forgot-password">
              Forgot Password?
            </a>
          </div>
  
          <button className="login-button">Log In</button>
        </div>
      </div>
    );
  };
  export default Login;  