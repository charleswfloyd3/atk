import React, {useState} from 'react';
import './newsletter.css'


function Newsletter(props){
    let name = React.useRef(null)
    let email = React.useRef(null)
    let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
    let [nameErrorMessage, setErrorMessageName] = useState("");
    let [emailErrorMessage, setErrorMessageEmail] = useState("");
    let [classStatus, setClassStatus] = useState(true);

    const toggle = () =>{
        setClassStatus(false)
    }
    function eventHandler(props){
        let userData =  {name: name.current.value,
                email: email.current.value}
        if(userData.email.match(mailformat) && userData.name.length > 2){
        console.log(userData)
        toggle()
        props.preventDefault()
        

        }

    }   
    let handleChangeforname = (e) =>{
        e.preventDefault()

        let userData =  {name: name.current.value,
                email:  email.current.value}
        if(userData.name.length < 3){
            setErrorMessageName("please enter a valid name")
        }
        else{
            setErrorMessageName("")
            
        }

    }
    let handleChangeforemail = (e) =>{
        let userData =  {name: name.current.value,
                email:  email.current.value}  
        console.log(userData.email.match(mailformat))

        if(userData.email.match(mailformat) == null){
            setErrorMessageEmail(" please enter a valid email address")
        }

        else{
            setErrorMessageEmail("")


        }
        e.preventDefault()

    }

 return(
    <div className="newsletterdiv">
        <form action="action_page.php" className={classStatus ? "secondwebpage" : 'secondwebpagehidden'} >
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
                    <h4 className="errormessage">{emailErrorMessage}</h4>
                    <input type="submit" onClick={eventHandler}  value="Subscribe" />
                </div>
        </form>
        <div className={classStatus ? "secondwebpagehidden" : 'secondwebpage'}>
            <div className="successbox">
                <p className="successmessage">Success!</p>
                <img className="paperairplane" src="/images/paper.png"></img>
                <p className='senttime'>You subscribed on {new Date().toLocaleString()}</p>
                <p className="messagewillbecomingsoon">Your email will be arriving in a couple minutes!</p>
            </div>
        </div>
  
    </div>

 )
};

export default Newsletter;

