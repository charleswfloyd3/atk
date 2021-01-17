import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from '../navbar/navbar';
import NavbarForms from '../navbarforforms/navbarforms';
import './contact.css'
import '../navbar/navbar.css'


function Contact(props) {

  return (
    <div className="contactwebpage">
        <nav className="navbarforcontact">
            <p className="companyNamecontact">A T K&nbsp;&nbsp;</p>
            <button className="about_btn_contact"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/about">About</Link></button>
            <button className="home_btn_contact"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Home</Link></button>

        </nav>
        <p>Contact</p>
        <p>Developer</p>
        <img className="me"></img>
        <p className="aboutme"></p>
        <div className="contactlink">
            <img className="Linkedin"></img>
            <img className="github"></img>
            <img className="email"></img>
            <img className="phone number"></img>
        </div>
    </div>

  );
}

export default Contact;
