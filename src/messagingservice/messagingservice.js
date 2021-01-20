import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function Messaging(props){
    return(
        <div>
            <h1 className="name">{props.name}</h1>
        </div>
    )
};

export default Messaging;
