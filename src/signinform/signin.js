import React,{useState} from 'react'
import './signin.css'
import {Link} from 'react-router-dom';
import NavbarForms from '../navbarforforms/navbarforms';

function Signin() {

  const email = React.useRef(null)
  const password = React.useRef(null)
  const Users = [{email:"user@gmail.com", password:"password", name: "user" }]

  const mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
  const [classStatus, setClassStatus] = useState(true);
  const [classStatusbtn, setClassStatusbtn] = useState(false);
  const [showpass, setshowpassstatus] = useState('password');
  const [finalbtnState, setFinalbtnState] = useState(false);

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
    if(validateEmailInfo()[0]){
      setClassStatuss()
    }
    else{
    } 
  }

  let buttonstatus = (e) => {
    e.preventDefault()
    if(validateEmailInfo()[0]){
      setClassStatusbtn(true)
    }
    else{
      setClassStatusbtn(false)
    } 
  }
  let showpassword = () =>{
    if(showpass === 'password'){
      setshowpassstatus('')
    }
    else{
      setshowpassstatus('password')
    }
  }
  let validateEmailInfo = (props) =>{
const userData =  {email: email.current.value,
      password: password.current.value} 
    for(let i=0; i < Users.length; i++){
      if(Users[i].email === userData.email){
        return [true, i]
      }
      else{
        return false
      }
    }

  }
  let validatePasswordInfo = (e) =>{
    e.preventDefault()
const userData =  {email: email.current.value,
      password: password.current.value} 
      if(Users[validateEmailInfo()[1]].password === userData.password){


        setFinalbtnState(true)
      }
      else{
      }
    }
  const preventDefaultfunction = (e) =>{
    return e.preventDefault()
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
        <input className="inputfieldemail" onChange={validatePasswordInfo} type={showpass} ref={password} placeholder='Enter password'></input>
        <input className="showpasscheckbox" type="checkbox" onClick={showpassword} ></input>
        <p className="showpass">Show Password</p>
        <p className="gobackbutton" onClick={setClassStatuss}>Go back</p>
        <div className="bottomofform">
        <p className='createaccountfinal'><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/signup">Create account</Link></p>
        <button className={finalbtnState ? "buttonhidden" : "nextbuttonfinalerror" } onClick={preventDefaultfunction}>Sign In</button>
        <button className={finalbtnState ? "nextbuttonfinal" : "buttonhidden"} ><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/messaging">Sign In</Link></button>
        </div>
     </form>
    </div>
  );
}

export default Signin;