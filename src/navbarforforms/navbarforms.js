import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './navbarforms.css'

function NavbarForms(){
    return(
        <nav className="navbar2">
            <button className="companyName2"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/about">About</Link></button>
            <button className="home_btn"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/contact">Contact</Link></button>
            <button className="contact_btn"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Home</Link></button>

        </nav>
    )
};

export default NavbarForms;
