import React, { useState } from "react";
import "./log-in.css";
import { Link } from "react-router-dom";
import Axios from 'axios';
import Footer from "../Footer";


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

var textFromStorage;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [loginStatus, setLoginStatus] = useState('');
  
  sessionStorage.setItem('name', email);
  textFromStorage = sessionStorage.getItem('name');
  
  const login = () => {
    Axios.post("http:/localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) =>{
      if(!response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].message);
      }
    });
  };


  return (
    <>
      <form className="logincontainer">
        <input type="email" id="email" placeholder="Email" onChange = { (e) => { setEmail(e.target.value);}}/>
        <br />
        <input type="password" id="password" placeholder="Password" onChange = {(e) => { setPassword(e.target.value);}}/>
        <br />
        <Link to='/LoginDone' style={{textDecoration: 'none', color: "black"}}>
        <button type="submit" className="submit" onClick={login}>
          Log In
        </button>
        </Link>
        <div className="createnewacc">
          <Link to="/Register" style={{textDecoration: 'none', color: "black"}}>Create New Account</Link>
        </div>
        <br />
        {/* <Facebookicon />
        <Googleicon /> */}
      </form>
      <h1>{loginStatus}</h1>
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
}
export {textFromStorage};

export default Login;
