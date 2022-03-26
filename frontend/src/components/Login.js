import React, { useState } from 'react';
import '../App.css';

const Login = (props) => {
    // Setting credintials as state so we can change it later
    const [credintials, setCredintials] = useState({email: "", password: ""});

    // handle the on change event
    const handleOnChange = (e) => {
        setCredintials({...credintials, [e.target.name]: e.target.value});
    };

    // handle login button click
    // get the user data with fetch api
    const handleLogin = async (e) => {
        const data = {email: credintials.email, password: credintials.password};
        const res = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        });
        const jsonData = await res.json();
        if (jsonData.success === false) {
            setCredintials({name: "", email: "", password: ""});
            alert('invalid credintials');
        } else {
            localStorage.setItem('email', credintials.email);
            props.changeLoggedIn();
        }
    };

    // handle the submit button
    const handleSignup = (e) => {
        e.preventDefault();
        props.changeLoginState(false);
    };

    return (
        <div className='outer'>
          <div className='inner'>
            <div className="textfields">
              <h1>Log In</h1>
              <p>Email</p>
              <input name="email" type="text" value={credintials.email} onChange={handleOnChange}/>
              <p>Password</p>
              <input name="password" type="text" value={credintials.password} onChange={handleOnChange}/>
              <br/>
              <button className="btn" onClick={handleLogin}>Login</button>
              <p className="question-p">Don't have an account?</p>
              <button className="signup-btn btn" onClick={handleSignup}>sign up</button>
            </div>
          </div>
        </div>
    );
}

export default Login;
