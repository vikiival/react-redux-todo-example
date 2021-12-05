import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginNotFound() {
  return (
    <div>
      <h1>Please log in first to see your profile</h1>
      <Link to="/login">Click here to Log In</Link>
    </div>
  );
}
