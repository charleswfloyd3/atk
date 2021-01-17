
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// Components
// import Slogan from './slogan/slogan';
// import Navbar from './navbar/navbar';
// import Features from './features/features';
// import Newsletter from './newsletter/newsletter';
import Signin from './signinform/signin';
import Signup from './singupform/signup'
import Landingpage from './landingpage/landingpage';


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
</Switch>

  );
}

export default App;
