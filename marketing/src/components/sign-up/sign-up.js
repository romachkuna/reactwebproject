import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from 'axios';
import Footer from "../Footer";
//css
import "./sign-up.css";
import { PanoramaFishEyeSharp } from "@material-ui/icons";

const Facebookicon = () => (
  <input
    type={"image"}
    src={
      "https://pnggrid.com/wp-content/uploads/2021/07/Facebook-Logo-Square-768x768.png"
    }
    width={"50px"}
    height={"50px"}
    className="logobuttons"
  ></input>
);

const Googleicon = () => (
  <input
    type={"image"}
    src={
      "https://mpng.subpng.com/20180607/poh/kisspng-google-logo-computer-icons-mei-qi-5b19042809dd50.8354117915283661200404.jpg"
    }
    width={"50px"}
    height={"50px"}
    className="logobuttons"
  ></input>
);

function isPasswordMatched (pass,conf) {
  return (pass==conf);
}

function isValid(pass) {
  if(pass.length >= 20 || pass.length <= 8) {
    return false;
  };
  var passw = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/;
  if(pass.value.match(passw)) 
  { 
  return true;
  }
  else
  { 
  return false;
  }
}

function Register() {
  const [usernameReg, setUsernameReg] = useState('');
  const [lastnameReg, setLastnameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [repeatPasswordReg, setRepeatPasswordReg] = useState('');

  //isPasswordMatched(passwordReg, repeatPasswordReg);

  const register = () => {
    if(isPasswordMatched(passwordReg, repeatPasswordReg)){
    Axios.post("http://localhost:3001/register", {
      username:usernameReg,
      lastname:lastnameReg,
      email:emailReg,
      password:passwordReg,
    }).then((response)=> {
      console.log(response);
    });
  } else {
    return alert("error passwords dont match or you are missing some letters")
  }
  };

  return (
    <>
      <div className="bg-img">
        <form className="container">
          <input type="text" id="fname" placeholder="First Name" onChange={(e) =>{setUsernameReg(e.target.value)}}/>
          <br />

          <input type="text" id="lname" placeholder="Last Name" onChange={(e) =>{setLastnameReg(e.target.value)}} />
          <br />

          <input type="email" id="email" placeholder="Email" onChange={(e) =>{setEmailReg(e.target.value)}}/>
          <br />

          <input type="password" id="password" placeholder="Password" onChange={(e) =>{setPasswordReg(e.target.value)}}/>
          <br />

          <input
            type="password"
            id="confirmpassword"
            placeholder="Confirm Password"
            onChange={(e) =>{setRepeatPasswordReg(e.target.value)}}
          />
          <br />
          <Link to='/Success'>
          <button className="submit" onClick={register}>
            Sign Up
          </button>
          </Link>
          <div className="login">
            <Link to="/Login" style={{textDecoration: 'none', color: "black"}}>Log In</Link>
          </div>
          <br />
          {/* <Facebookicon />
          <Googleicon /> */}
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Register;

