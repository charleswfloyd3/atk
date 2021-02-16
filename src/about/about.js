import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from '../navbar/navbar';
import NavbarForms from '../navbarforforms/navbarforms';
import './about.css'
import '../navbar/navbar.css'


function About(props) {

  return (
    <div className="contact-div">
    <NavbarForms />

  <div class="about" id="contact">
                <p class="contactTitle">
                    About
                </p>
                <div class="basicinfo1">
                    <p class="nameinfo1">A T K&nbsp; is an open source decentralized messaging platform founded on effortless encrypted messaging. One of A T K 's defining charactersitics is it's dedication to offering as customizable UI. UI features, libraries, and packages will be offered on A T K 's identification free store. New features can be added by independent developers, always of course being first vetted by staff. Core encryption and comnpression will always been soley handled by A T K staff. No need to reinvent the wheel, we've done it for you.</p>
                </div>

        </div>
        </div> 
    );
}
export default About;
