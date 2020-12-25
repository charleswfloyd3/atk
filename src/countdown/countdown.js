import React from 'react'
import './countdown.css'
function Signup(){


}
function Countdown(){

 return(
    <div class="secondwebpage">
        <form action="action_page.php">
                <div class="container">
                    <h2>Subscribe to our Newsletter!</h2>
                </div>
                <div class="container" >
                    <input type="text" placeholder="Name" name="name" required />
                    <input type="text" placeholder="Email address" name="mail" required />
                    <label>
                        <input type="checkbox"  name="subscribe" />Recieve Updates
                    </label>
                </div>
                
                <div class="container">
                    <input type="submit" value="Subscribe" />
                </div>
        </form>
    </div>    
 )
};

export default Countdown;