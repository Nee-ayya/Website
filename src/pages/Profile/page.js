import React from 'react';
import { useAuth } from '../../Components/Authentication/AuthContext';
import { auth } from '../../Components/Authentication/firebase-config';
import './page.css';

const ProfilePage = () => {
  const { currentUser, creationTime } = useAuth();

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <div className="user-info">
        <p>Email: {currentUser?.email}</p>
        <p>Account Created On: {creationTime}</p>
      </div>
      <button onClick={() => auth.signOut()} className="logout-button">Logout</button>
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Games Played</th>
            <th>High Score</th>
            <th>Times Opened</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Game 1</td>
            <td>10</td>
            <td>200</td>
            <td>5</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default ProfilePage;
