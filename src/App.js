
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// Components

import Signin from './signinform/signin';
import Signup from './singupform/signup'
import Landingpage from './landingpage/landingpage';
import Contact from "./contact/contact";

function App(props) {

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
</Switch>

  );
}

export default App;
