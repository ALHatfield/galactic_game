import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link Rules to="/rules"> Rules</Link>
        <Link Game to="/game"> Game</Link>
      </div>
      <div className="top-bar-right">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>

        {children}
   </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
