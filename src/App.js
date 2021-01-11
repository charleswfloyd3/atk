
import React, {useState} from 'react';
import './App.css';
import Slogan from './slogan/slogan'
import Navbar from './navbar/navbar'
import Features from './features/features'
import Newsletter from './newsletter/newsletter'




function App(props) {

  return (
    <div className="divv">
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
  );
}

export default App;
