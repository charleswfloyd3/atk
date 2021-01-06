import React from 'react'
import './newsletter.css'

function Newsletter(){
    let name = React.useRef(null)
    let email = React.useRef(null)
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let errormessage = "";
function eventHandler(e){
    e.preventDefault()

    let userData =  {name: name.current.value,
            email: email.current.value}
    if(userData.email.match(mailformat) && userData.name.length > 1){
   
    console.log(userData)
    }
    else if(userData.name.length < 1){
        return errormessage = "please enter a valid name"
    }
    else{
        return errormessage = "please enter a valid email address"
    }    
}
console.log(name)
 return(

    <div class="secondwebpage">
        <form action="action_page.php">
                <div class="container">
                    <h1>Join our Newsletter!</h1>
                </div>
                <div class="container" >
                    <input type="text" placeholder="Name" ref={name} required />
                    <input type="text" placeholder="Email address" ref={email}required />
                    <label>
                    <input type="checkbox"  name="subscribe" />Recieve Updates
                    </label>
                </div>
                
                <div class="container">
                    <h4>{errormessage}</h4>
                    <input type="submit" onClick={eventHandler} value="Subscribe" />
                </div>
        </form>
    </div>    
 )
};

export default Newsletter;