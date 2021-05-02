
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// Components

import Signin from './signinform/signin';
import Signup from './singupform/signup'
import Landingpage from './landingpage/landingpage';
import Contact from "./contact/contact";
import Messaging from "./messagingservice/messagingservice"
import About from './about/about';

function App(props) {
  const Users = [{email:"williamfloyd@gmail.com", password:"password", name: "Guest" }]

  return (

 <Switch>
    <Route exact path="/">
      <Landingpage />
    </Route>
    <Route path="/login">
      <Signin />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
        <Route path="/about">
      <About />
    </Route>
    <Route path="/messaging">
      <Messaging name={Users[0].name}/>
    </Route>
</Switch>

  );
}

export default App;
