import React, {useState} from 'react';
import SignUp from '../signup/signup'
import SubscribeSuccess from '../SubscribeSuccess/subscribe.js'
import '../signup/signup.css'

function Newsletter(props) {
    let [messageStatus, setmessageStatus] = useState("pending")

    return(
        // <div >
        //     {props.messageStatus === "pending" && <SignUp status={messageStatus} setStatus={setmessageStatus} n={name}/>}
        //     {props.messageStatus === "sent" && <SubscribeSuccess status={messageStatus} setStatus={setmessageStatus}/>}
        // </div>

            <SignUp status={messageStatus} setStatus={setmessageStatus}/>
  
    )
}

export default Newsletter;