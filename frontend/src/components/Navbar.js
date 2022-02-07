import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
    return (
        <>
          <nav>
            <h1 className="main-logo">Comp Social</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login">Login / Sign up</Link></li>
            </ul>
          </nav>
        </>
    );
};

export default Navbar;
