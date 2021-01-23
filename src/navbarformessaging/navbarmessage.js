import react from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import "./navbarmessage.css"
function NavbarMessage(){
    function dropdown() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";

    } else {
      x.className = "topnav";

    }
  }
    return(
    <nav id="navbar" class="topnav">

        <a  ><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Home</Link></a>
        <a href="#about" class="about">Profile</a>
        <a href="projects" class="projects">Messages</a>
        <a href="https://github.com/charleswfloyd3" target="__" class="git">Sign Out</a>
        <a onClick={dropdown} class="dropdownbutton">&#9776;</a>
    </nav>
    )
}

export default NavbarMessage;