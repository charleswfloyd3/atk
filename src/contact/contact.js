import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from '../navbar/navbar';
import NavbarForms from '../navbarforforms/navbarforms';
import './contact.css'
import '../navbar/navbar.css'


function Contact(props) {

  return (
    <div className="contact-div">
    <NavbarForms />

  <div class="contact" id="contact">
                <p class="contactTitle">
                    Contact
                </p>
                <div class="basicinfo">
                    <p class="nameinfo">Charles Floyd</p>
                    <p class="cityinfo">Half Moon Bay, CA</p>
                    <p class="phoneinfo">(650) 218-8394</p>
                </div>
                <ul class="contactlist">

                    <button class="contactitem"><a href="mailto:charleswfloyd3@gmail.com">Email</a></button>
                    <button class="contactitem2"><a href="https://www.linkedin.com/in/charles-floyd-9a38141ba/" target="_blank">LinkedIn</a></button>
                    <button class="contactitem3"><a href="https://github.com/charleswfloyd3" target="_blank">Github</a></button>
                    <button class="contactitem4"><a href="charlesfloyd_resume.pdf" download>Resume</a></button>

                </ul>
        </div>
        </div> 
    );
}
export default Contact;
