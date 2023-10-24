// SecondPage.js
import React from 'react';

const Profile = (props) => {
  // Use props.location.search to extract query parameters
  const searchParams = new URLSearchParams(props.location.search);
  const name = searchParams.get('name');
  const email = searchParams.get('email');

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;
