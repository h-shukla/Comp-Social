import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Search from './Search';

const Navbar = (props) => {
    const handleOnClick = (e) => {
        props.setLoggedIn(false);
        props.setisLoginCurrent(true);
    };

    return (
        <>
          <nav>
            <div className="links-div">
              <h1 className="main-logo">Comp Social</h1>
              <ul className="links-ul">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/" onClick={handleOnClick}>Login / Sign up</Link></li>
              </ul>
            </div>
            <Search setShowSearchRes={props.setShowSearchRes}/>
          </nav>
        </>
    );
};

export default Navbar;
