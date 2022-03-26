import React, { useState } from 'react';
import '../App.css';

const Home = () => {
    const [profiles, setProfiles] = useState({});

    // get user profiles from api
    const getProfiles = async (e) => {
        const email = localStorage.getItem('email');
        const reqJson = {email: email};
        const res = await fetch('http://localhost:5000/api/getprofiles', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(reqJson)
        });
        const jsonData = await res.json();
        if (jsonData.success === false) {
            alert('check console');
        } else {
            setProfiles(jsonData);
            console.log(profiles);
        }
    };

    getProfiles();

    return(
        <>
          <h1>Home page</h1>
        </>
    );
}

export default Home;
