import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
            <p className="companyName">A T K&nbsp;&nbsp;</p>
            <button className="signin_btn"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/login">Log In</Link></button>
            <button className="signup_btn"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/signup">Sign Up</Link></button>

        </nav>
    )
};

export default Navbar;
