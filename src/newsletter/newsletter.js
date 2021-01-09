import React, {useState} from 'react';
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
    let handleChangeforname = (e) =>{
        let userData =  {name: name.current.value,
                email:  email.current.value}
        if(userData.name.length <= 2 && userData.email.match(mailformat) !== null ){
            setErrorMessageName("please enter a valid name")
        }
        else{
            setErrorMessageName(" ")
            
        }
        e.preventDefault()

    }
    let handleChangeforemail = (e) =>{
        let userData =  {name: name.current.value,
                email:  email.current.value}  

        if(userData.email.match(mailformat) == null && userData.name.length >= 2){
            setErrorMessageEmail(" please enter a valid email address")
        }
        else{
            setErrorMessageEmail("")


        }
        e.preventDefault()

    }
 return(
    <div className="secondwebpage" >
        <form action="action_page.php" >
                <div className="container">
                    <h1>Join our Newsletter!</h1>
                </div>
                <div className="container" >
                    <input type="text" placeholder="Name" ref={name} onChange={handleChangeforname} required />
                    <input type="text" placeholder="Email address" ref={email} onChange={handleChangeforemail} required />
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

export default Newsletter;