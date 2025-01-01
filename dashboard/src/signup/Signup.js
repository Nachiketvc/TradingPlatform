import React, { useState } from "react";
import "./Signup.css";
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from "./util";
import { useNavigate } from "react-router-dom";
import Navbar from '../others/Navbar';
import Footer from "../others/Footer";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });


  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return handleError('Name, Email, and Password are required.');
    }
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login')
        }, 1000)
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details)
      }
      else if (!success) {
        handleError(message);
      }
      console.log(result);
    }
    catch (err) {
      handleError(err);

    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSignup}>
          <h2>Signup</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={signupInfo.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={signupInfo.email}
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
              value={signupInfo.password}
            />
          </div>
          <button type="submit" className="signup-button">
            Signup
          </button>
          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
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

export default Signup;

