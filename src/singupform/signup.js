import react from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import "./signup.css";

function Signup() {
  return (
    <div className="signindiv">
    <form className="signupform">
      <h1 className="companyname">A T K</h1>
      <p className="signuptitle">Sign up</p>
      <div className="guestbrowse">
      <p className="or">or</p>
      <p className="browseas">browse as </p>
      <button className="guestbutton">GUEST</button>
      </div>
      {/* <input className="inputfieldname" placeholder="Enter your name"></input> */}
      <input className="inputfieldemail" placeholder="Enter email"></input>
      {/* <input className="inputfieldpassword" placeholder='Enter password'></input> */}
      <div className="bottomofform">
        <p className="alreadyhaveanaccount"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/login">Already have an account?</Link></p>
        <button className="nextbutton2">Next</button>
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
