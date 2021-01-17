import React,{useState} from 'react'
import './signin.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import NavbarForms from '../navbarforforms/navbarforms';

function Signin() {
  
  let email = React.useRef(null)
  let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
  let [classStatus, setClassStatus] = useState(true);
  let [classStatusbtn, setClassStatusbtn] = useState(false);

  let setClassStatuss = () =>{
    if(classStatus === false){
      setClassStatus(true)
      email.current.value = ""
    }
    else{
      setClassStatus(false)
    }
  }
  let Next = (e) => {
    e.preventDefault()
    if(email.current.value.match(mailformat)){
      setClassStatuss()
    }
    else{
    } 
  }

  let buttonstatus = (e) => {
    e.preventDefault()
    if(email.current.value.match(mailformat)){
      setClassStatusbtn(true)
      console.log("hey")
    }
    else{
      setClassStatusbtn(false)
    } 
  }
  return (
    <div className="signindiv">
      <NavbarForms />
    <form className={classStatus ? "signinformemail" : "signindivhidden"}>
        <h1 className="companyname">A T K</h1>
        <p className="signintitle">Sign in</p>
        <input className="inputfieldemail" placeholder='Enter email' ref={email} onChange={buttonstatus}></input>
        <div className="bottomofform">
        <p className='createaccount'><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/signup">Create account</Link></p>
        <button className={classStatusbtn ? "nextbutton": "nextbutton3error"}onClick={Next}>Next</button>
        </div>
    </form>
     <form className={classStatus ? "signindivhidden" : "signinformpassword"}>
        <h1 className="companyname">A T K</h1>
        <p className="signintitle">Sign in</p>
        <input className="inputfieldemail" placeholder='Enter password'></input>
        <p className="gobackbutton" onClick={setClassStatuss}>Go back</p>
        <div className="bottomofform">
        <p className='createaccountfinal'><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/signup">Create account</Link></p>
        <button className="nextbuttonfinal" >Sign In</button>
        </div>
     </form>
    </div>
  );
}

export default Signin;