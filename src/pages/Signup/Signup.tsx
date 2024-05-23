import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '../../Components/Authentication/firebase-config';
import { Link } from 'react-router-dom';
import Homebar from '../../Components/homebar';

export function SignUpPage() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, username, password);
      navigate('/signin');
    } catch (err) {
      setError("An error occurred during sign up");
    }
  };

  return (
    <>
      <Homebar />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={signUp}>
          <div>
            <label htmlFor="username">Email</label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p>{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="../Signin">Sign In</Link>
        </p>
      </div>
    </>
  );
}
