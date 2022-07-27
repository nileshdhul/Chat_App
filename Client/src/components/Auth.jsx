import React from 'react';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import SigninImage from '../assets/signup.jpg';

const cookies =new Cookies();

const initial={
    fullName:"",
    username:"",
    password:"",
    confirmpass:"",
    phonenumber:"",
    avatarurl:""
}



const Auth = () => {
    const [form,setForm]=useState(initial);

    const[isSignup,setissignup]=useState(true);

    const switchMode=()=>{setissignup(!isSignup)}


    const handlesubmit=async(e)=>{

        e.preventDefault();

        const {fullName ,username,password,phonenumber,avatarurl}=form;
        const URL='http://localhost:5000/auth';
        const {data:{token ,userId,hashedPassword}} = await axios.post(" http://localhost:5000/auth/signup",{
            username,password,fullName,phonenumber,avatarurl, });

        cookies.set('token',token);
        cookies.set('username',username);

        cookies.set('fullname',fullName);
        cookies.set('userId',userId);

        if(isSignup){

        cookies.set('phonenumber',phonenumber);
        cookies.set('avatarURL',avatarurl);
        cookies.set('hashedpassword',hashedPassword);

        }
        window.location.reload();
       
    }

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value
        });


    }
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>

          <form onSubmit={handlesubmit}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">User Name</label>
              <input
                name="username"
                type="text"
                placeholder="User Name"
                onChange={handleChange}
                required
              />
            </div>

            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phonenumber">Phone Number</label>
                <input
                  name="phonenumber"
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarurl">Avatar Url</label>
                <input
                  name="avatarurl"
                  type="text"
                  placeholder="Avatar Url"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>

            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmpass">Confirm Password</label>
                <input
                  name="confirmpass"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
                <button>{isSignup?"Sign Up": "Sign In"}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Already have an account" : "Don't have an account"}
              <span onClick={switchMode}>
                {isSignup ? "  sign In" : "  Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={SigninImage} alt="sign in" />
      </div>
    </div>
  );
}

export default Auth