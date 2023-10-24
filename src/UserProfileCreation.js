import React, { useState } from 'react';
import './UserProfileCreation.css'; 
import { useHistory } from 'react-router-dom';

function UserProfileCreation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can perform actions like sending the data to a server here
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Password:', password);
    history.push(`/profile?name=${name}&email=${email}`);
  };

  return (
    <div className="user-profile-creation-container">
      <h2>User Profile Creation New Form</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Create Profile</button>
        </div>
      </form>
    </div>
  );
}

export default UserProfileCreation;
