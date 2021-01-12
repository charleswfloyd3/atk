
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
// Components
import Slogan from './slogan/slogan';
import Navbar from './navbar/navbar';
import Features from './features/features';
import Newsletter from './newsletter/newsletter';
import Signin from './signinform/signin';


function App(props) {

  return (

      <div className="landingpage">
          <div  className="topdiv">
              <Navbar />
              <Slogan />
          </div>

          <div className="bottomdiv">
              <Features />
          </div>

          <div className="countdown">
              <Newsletter />
          </div>
      </div>

//  <Switch>
//           <Route>

//           </Route>
//           <Route path="/login">
//             <Signin />
//           </Route>
//         </Switch>
  );
}

export default App;
