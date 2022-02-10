import React, { useState } from 'react';
import '../App.css';

const Signup = (props) => {
    const [credintials, setCredintials] = useState({
        name: "", 
        email: "", 
        password: "",
        profiles: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: "",
            github: "",
        }
    });

    // handle the on change event
    const handleOnChange = (e) => {
        setCredintials({ ...credintials, [e.target.name]: e.target.value});
    };

    // handle signup button click
    // and login the user automatically
    const handleSignup = async (e) => {
        const data = {name: credintials.name, email: credintials.email, password: credintials.password, profiles: credintials.profiles};
        const res = await fetch('http://localhost:5000/api/createuser', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        });
        const jsonData = await res.json();
        if (jsonData.success === false) {
            setCredintials({email: "", password: ""});
            console.log('invalid credintials');
        } else {
            props.changeLoggedIn();
        }
    };

    // handle the login button for existing users
    const handleLogin = (e) => {
        e.preventDefault();
        props.changeLoginState(true);
    };

    return (
        <>
          <div className='outer'>
            <div className='inner'>
              <div className="textfields">
                <h1>Sign up</h1>
                <p>Name</p>
                <input name="name" type="text" value={credintials.name} onChange={handleOnChange}/>
                <p>Email</p>
                <input name="email" type="text" value={credintials.email} onChange={handleOnChange}/>
                <p>Password</p>
                <input name="password" type="text" value={credintials.password} onChange={handleOnChange}/>
                <br/>
                <button className="btn" onClick={handleSignup}>Signup</button>
                <p className="question-p">Already have an account? Login</p>
                <button className="login-btn btn" onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </>
    );
};

export default Signup;
