import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Go to Homepage</Link>
    </div>
  );
};

export default NotFound;