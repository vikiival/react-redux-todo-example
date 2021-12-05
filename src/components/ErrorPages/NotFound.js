import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>ERROR 404</h1>
      <Link to="/">Back to main Page</Link>
    </div>
  );
}
