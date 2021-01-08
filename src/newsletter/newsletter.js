import { render } from '@testing-library/react';
import React, {useState} from 'react';
import { DeactivationsContext } from 'twilio/lib/rest/messaging/v1/deactivation';
import './newsletter.css'


function Newsletter(){
    let name = React.useRef(null)
    let email = React.useRef(null)
    let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
    let [nameErrorMessage, setErrorMessageName] = useState("");
    let [emailErrorMessage, setErrorMessageEmail] = useState("");
    
    function eventHandler(e){
        let userData =  {name: name.current.value,
                email: email.current.value}
        if(userData.email.match(mailformat) && userData.name.length > 2){
        console.log(userData)
        e.preventDefault()
        }
    }
    let handleChange = () =>{
        let userData =  {name: name.current.value,
                email:  email.current.value}
        if(name.current.value.length <= 2){
            setErrorMessageName("please enter a valid name")
        }
        else{
            setErrorMessageName(" ")
        }
        if(userData.email.length > 1){
            setErrorMessageEmail("yup")
        }
        if(emailErrorMessage !== ""){
            setErrorMessageEmail("please enter a valid email address")
            
        }
        else{
            setErrorMessageEmail("")

        }
    }
 return(
    <div className="secondwebpage" >
        <form action="action_page.php">
                <div className="container">
                    <h1>Join our Newsletter!</h1>
                </div>
                <div className="container" >
                    <input type="text" placeholder="Name" ref={name} onChange={handleChange} required />
                    <input type="text" placeholder="Email address" ref={email} onChange={handleChange} required />
                    <label>
                    <input type="checkbox"  name="subscribe" />Recieve Updates
                    </label>
                </div>
                
                <div className="container">
                    <h4>{nameErrorMessage}{emailErrorMessage}</h4>
                    <input type="submit" onClick={eventHandler} value="Subscribe" />
                </div>
        </form>
    </div>    
 )
};
let Success = () => {
    <div>
        hey
    </div>
}
function SignUp(display){
    if(display == "visible"){
    return Newsletter();
    }
    else{
        return Success();
    }
}
export default SignUp;