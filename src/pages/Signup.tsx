import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../App.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Logged in:', user);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error logging in:', errorCode, errorMessage);
      });
  };

  return (
    <div className="signin-container">
      <div className='heading'>
        <h2>Login</h2>
      </div>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-login">Login</button>
      </form>
      <div className="text-below">
        <p>Don't have an account? <Link to="/signup"className='signup-link'>Click here</Link> to create one!</p>
      </div>
      {/* <p>
        Don't have an account?{' '}
        <Link to="/signup" className="signup-link">Click here</Link> to create one!
      </p> */}
    </div>
  );
};

export default Signin;
