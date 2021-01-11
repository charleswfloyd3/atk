import react from 'react'
import './signin.css'

function SignIn() {
  return (
    <div>
    <form className="signinformemail">
        <h1 className="companyname">A T K</h1>
        <p className="signintitle">Sign in</p>
        <input className="inputfieldemail" placeholder='Enter email'></input>
        {/* <input className="inputfieldpassword" placeholder='Enter password'></input> */}
        <div className="bottomofform">
        <p className='createaccount'>Create account</p>
        <button className="nextbutton">Next</button>
        </div>
    </form>
    <form className="signinformpassword">
        <h1 className="companyname">A T K</h1>
        <p className="signintitle">Sign in</p>
        <input className="inputfieldemail" placeholder='Enter password'></input>
        {/* <input className="inputfieldpassword" placeholder='Enter password'></input> */}
        <div className="bottomofform">
        <p className='createaccount'>Create account</p>
        <button className="nextbutton">Sign In</button>
        </div>
    </form>
    </div>
  );
}

export default SignIn;