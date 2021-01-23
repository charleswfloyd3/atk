import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './messagingservice.css'
import Typical from 'react-typical'
import NavbarMessage from '../navbarformessaging/navbarmessage';

function Messaging(props){
    let userName = "" 
    let messagescount = "";
    // const GuestorUser = (props) =>{
    //      if(finalbtnState){
    //          return [userName = "Hello " + props.name,  messagescount = " You have 3 new messages!"]
    //     }
    //     else{
    //         return [userName = "Hello Guest",  messagescount = " You have 0 new messages."]    

    //     }
    // }
    // let userNameforjsx = GuestorUser[0]
    // let mesageCountforjsx = GuestorUser[1]

    return(
        <div className="messagingapp">
            <NavbarMessage />
            <h1 className="name" >  
            <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
            userName,
            4000,
            messagescount,
            4000
                
            ]}
            />
            </h1>
            
        </div>
    )
};

export default Messaging;
