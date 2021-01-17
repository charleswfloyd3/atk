import React,{useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import NavbarForms from "../navbarforforms/navbarforms";
import "./signup.css";

function Signup() {
  let [classStatus, setClassStatuss] = useState(false);
  let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
  let email = React.useRef(null)

  let buttonstatus = (e) => {
    e.preventDefault()
    if(email.current.value.match(mailformat)){
      setClassStatuss(true)
      console.log("hey")
    }
    else{
      setClassStatuss(false)
    } 
  }
  return (
    <div className="signindiv">
    <NavbarForms />
    <form className="signupform">
      <h1 className="companyname">A T K</h1>
      <p className="signuptitle">Sign up</p>
      <p className="or">or</p>
      <p className="browseas">browse as </p>
      <button className="guestbutton">GUEST</button>
      <input className="inputfieldemail" ref={email} placeholder="Enter email" onChange={buttonstatus}></input>
      <div className="bottomofform">
        <p className="alreadyhaveanaccount"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/login">Already have an account?</Link></p>
        <button className={classStatus ? "nextbutton2": "nextbutton2error"} >Next</button>
      </div>
    </form>
    {/* <form className="signupformpassword">
      <h1 className="companyname">A T K</h1>
      <p className="signuptitle">Sign up</p>
      <input className="inputfieldemail" placeholder="Enter password"></input>
      <div className="bottomofform">
        <p className="alreadyhaveanaccount2">Already have an account?</p>
        <button className="nextbutton3">Sign Up</button>
      </div>
    </form> */}
    </div>
  );
}

export default Signup;
