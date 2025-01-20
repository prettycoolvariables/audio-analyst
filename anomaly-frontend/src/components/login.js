import React, { useState } from "react";
import "./login.css";
import eyeIcon from "../assets/eye.png";
import bgImage from "../assets/bg.png";

export const Login = () => {
  // State for form fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Optional: a state to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handle the form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      // If the response is not OK, throw an error to be caught below
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      // Parse the JSON response (should contain the JWT token)
      const data = await response.json();
      localStorage.setItem("token", data.access_token);
      alert("Login successful!");
      // You can then redirect or update your app state as needed
    } catch (error) {
      alert(error.message);
    }
  };

  // Optional: Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="LOGIN"
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

      {/* Login Card (wrapped in a form) */}
      <form className="login-card" onSubmit={handleLogin}>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
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
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img
              className="eye-icon"
              src={eyeIcon}
              alt="Toggle Password"
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            />
          </div>
          <a className="forgot-password" href="#forgot-password">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
