import React from 'react'
import './slogan.css'
import Typical from 'react-typical'

function Slogan(){
 return(
    <div className="slogandiv">
    <Typical className="slogan"
      loop={Infinity}
      wrapper="b"
      steps={[
      "the next stage of communication...",
      4000
      ]}
       
       />
    {/* <p className="comingsoon">coming soon</p> */}
    </div>
 )
};

export default Slogan;