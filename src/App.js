import './App.css';
import Slogan from './slogan/slogan'
import Navbar from './navbar/navbar'
import Features from './features/features'
import SignUp from './signup/signup'
import SubscribeSuccess from './SubscribeSuccess/subscribe'
import React, {useState} from 'react';

function App() {
const [messageStatus, setmessageStatus] = useState("pending")

  return (
    <div className="divv">
      <div  className="topdiv">
          < Navbar />
          <Slogan />
    </div>
      <div className="bottomdiv">
        <Features />
      </div>
      <div className="countdown">
        {messageStatus === "pending" && <SignUp />}
        {messageStatus === "sent" && <SubscribeSuccess />}

      </div>
    </div>
  );
}

export default App;
