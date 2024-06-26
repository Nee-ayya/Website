"use client";
import React, { useState } from 'react';
// import Homebar from "../../Components/homebar";
import signUp from "../../Components/Authentication/signup";
import { useNavigate, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './page.css'
import '../../App.css'

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
        console.error("Passwords do not match");
    //   setError("Passwords do not match");
      return;
    }

    try {
      const { result, error } = await signUp(username, password);

      if (error) {
        console.error("Error signing up:", error);
        setError(error.message);
      } else {
        // Handle successful sign up
        if (result) {
          console.log("User signed up successfully:", result.user);
          // Notify the user and navigate to the home page
          alert("Sign up successful! Navigating to the home page...");
          navigate('/');
        } else {
          console.error("Error signing up:", error);
        //   setError("An error occurred during sign up");
        }
      }
    } catch (error) {
      console.error("Error signing up:", error);
    //   setError("An error occurred during sign up");
    }
  };

  return (
    <div className="signup-container">
        <div className="heading">
            <h2> Sign Up </h2>
        </div>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">
                Email
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginBottom: '-10px' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: '-10px' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ marginBottom: '7px' }}
              />
              {error && <p>{error}</p>}
            </div>
            <button
              type="submit"
              className="btn-signup"
              style={{ marginLeft: 'center', marginRight: 'auto', display: 'block' }}>
              Submit
            </button>
          </form>
          <div className='text-below'>
            <p style={{ textAlign: 'center' }}>
                Already have an account? {' '}
                <Link to="../login" className='login-link'>Click here</Link> {' '}
                to sign in!
            </p>
          </div>
            
        </div>
    );
}