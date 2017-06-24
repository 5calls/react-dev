import * as React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>
    <Link to="/">Home</Link> <Link to="/about">About</Link>
  </div>
);

export default Navigation;
