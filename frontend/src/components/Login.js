import React, { useState } from 'react';
import '../App.css';

function Login() {
    const [credintials, setCredintials] = useState({email: "", password: ""});

    const handleOnChange = (e) => {
        setCredintials({ ...credintials, [e.target.name]: e.target.value});
        console.log(credintials);
    };

    const handleLogin = async (e) => {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credintials.email, password: credintials.password })
        });
        const resJson = await response.json();
        console.log(resJson);
        setCredintials({email: "", password: ""});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("signup clicked");
    };

    return (
        <div className='login-outer'>
          <div className='login-div'>
            <div className="textfields">
              <h1>Login</h1>
              <p>Email</p>
              <input name="email" type="text" value={credintials.email} onChange={handleOnChange}/>
              <p>Password</p>
              <input name="password" type="text" value={credintials.password} onChange={handleOnChange}/>
              <br/>
              <button className="login-btn btn" onClick={handleLogin}>Login</button>
              <p className="login-p">Don't have an account?</p>
              <button className="signup-btn btn" onClick={handleSubmit}>sign up</button>
            </div>
          </div>
        </div>
    );
}

export default Login;
