import React from 'react';
import '../App.css';

function Register() {
    return (
        <div className='register-outer'>
          <div className='register-div'>
            <h2>Login</h2>
            <div className="textfields">
              <p>Email</p>
              <input type="text" placeholder="Enter your email"/>
              <p>Password</p>
              <input type="text" placeholder="Enter your password"/>
            </div>
            <button className="login-btn btn">Login</button>
            <p className="register-p">Don't have an account?</p>
            <button className="signup-btn btn">sign up</button>
          </div>
        </div>
    );
}

export default Register;
