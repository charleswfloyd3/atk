import React,{useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import NavbarForms from "../navbarforforms/navbarforms";
import "./signup.css";

function Signup() {
  let [classStatus, setClassStatuss] = useState(true);
  let [classStatus2, setClassStatuss2] = useState(true);

  let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
  let email = React.useRef(null)
  let password = React.useRef(null)

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

  let SaveNewUserData = () =>{
    
  }
  let changetopassword = (e) =>{
    e.preventDefault()
    if(classStatus2 && email.current.value.match(mailformat)){
      setClassStatuss2(false)
    }
    else{
      setClassStatuss2(true)
    }
  }
  function toggle(e) {
    e.preventDefault()
    if(classStatus2){
      setClassStatuss2(false)
     email.current.value = ""
      
    }
    else{
      setClassStatuss2(true)

    }
  }
  return (
    <div className="signindiv">
    <NavbarForms />
    <form className={classStatus2 ? "signupform" : "signindivhidden"}>
      <h1 className="companyname">A T K</h1>
      <p className="signuptitle">Sign up</p>
      <p className="or">or</p>
      <p className="browseas">browse as </p>
      <button className="guestbutton">GUEST</button>
      <input className="inputfieldemail" ref={email} placeholder="Enter email" onChange={buttonstatus}></input>
      <div className="bottomofform">
        <p className="alreadyhaveanaccount"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/login">Already have an account?</Link></p>
        <button className={classStatus ? "nextbutton2": "nextbutton2error"} onClick={changetopassword}>Next</button>
      </div>
    </form>
    <form className={classStatus2 ? "signindivhidden":"signupformpassword"}>
      <h1 className="companyname">A T K</h1>
      <p className="signuptitle">Sign up</p>
      <input className="inputfieldemail" ref={password} type="password" placeholder="Enter password"></input>
              <p className="gobackbutton" onClick={toggle}>Go back</p>
      <div className="bottomofform">
        <p className="alreadyhaveanaccount2">Already have an account?</p>
        <button className="nextbutton3">Sign Up</button>
      </div>
    </form>
    </div>
  );
}

export default Signup;
