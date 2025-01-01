import React, { useState } from "react";
import "./Signup.css";
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from "./util";
import { useNavigate } from "react-router-dom";
import Navbar from "../others/Navbar";
import Footer from "../others/Footer";


const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError('Email and Password are required.');
    }
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginInfo)
      });
      const result = await response.json();
      const { success, message, error, jwtToken, name } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message || "An error occurred.";
        handleError(details);
      } else {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={loginInfo.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={loginInfo.password}
            />
          </div>
          <button type="submit" className="signup-button">
            Login
          </button>
          <p className="login-link">
            Don't have an account? <a href="/signup">Signup</a>
          </p>
        </form>
        <ToastContainer />
      </div>
      <div style={{marginTop: '500px'}}>
        <Footer />
      </div>
    </>
  );
};

console.log("Rendering Home");


export default Login;
