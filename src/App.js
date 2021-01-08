import './App.css';
import Slogan from './slogan/slogan'
import Navbar from './navbar/navbar'
import Features from './features/features'
import SignUp from './newsletter/newsletter'
function App() {
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
        <SignUp />
      </div>
    </div>
  );
}

export default App;
