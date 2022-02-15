import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Search(props) {

    const handleOnClick = (e) => {
        props.setShowSearchRes(true);
    };

    return (
        <>
          <div className="search">
            <input name="search" type="text" placeholder="Search for users"/>
            <button className="btn" onClick={handleOnClick}><Link to="/searchres">Search</Link></button>
          </div>
        </>
    );
};

export default Search;
