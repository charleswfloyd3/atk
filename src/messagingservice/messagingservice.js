import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './messagingservice.css'
import Typical from 'react-typical'
import NavbarMessage from '../navbarformessaging/navbarmessage';
import NavbarForms from '../navbarforforms/navbarforms';

function Messaging(props){
    let userName = "Hello "  + props.name 
    let messagescount = "You have 3 new messages!";
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
            <NavbarForms />
            <h1 className="name" >  
            <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
            userName,
            2000,
            messagescount,
            2200
                
            ]}
            />
                        <img id="airplane" src="images/airplanetransparent.png"></img>
            </h1>
            <img className="downarrow" id="bounce" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="></img>
        </div>
    )
};

export default Messaging;
