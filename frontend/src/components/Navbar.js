import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar(props) {
    const handleOnClick = (e) => {
        props.setLoggedIn(false);
    };

    return (
        <>
          <nav>
            <h1 className="main-logo">Comp Social</h1>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/" onClick={handleOnClick}>Login / Sign up</Link></li>
            </ul>
          </nav>
        </>
    );
};

export default Navbar;
