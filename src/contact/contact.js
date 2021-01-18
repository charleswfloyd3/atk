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
        <p className="contacttitle">Lead Developer</p>
        <img className="me" src="images/me.jpg"></img>
        <p className="aboutme">Full stack software engineer living in Silicon Valley building ATK Messaging's 
        infrastructure using React Js and Django. - Charles Floyd

        </p>
        <p className="contact">Contact</p>
        <div className="contactlink">
            <li><img className="linkedin" src="images/linkednin.png"></img></li>
            <li><img className="github" src="images/github.png"></img></li>
            <li><img className="email" src="images/gmail.png"></img></li>
            <li><img className="phone number" src="images/iphone.png"></img></li>
        </div>
    </div>

  );
}

export default Contact;
