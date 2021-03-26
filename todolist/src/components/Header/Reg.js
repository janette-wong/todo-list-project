import React from 'react'
import {Link} from "react-router-dom"

const Reg = () => {
    return (
        <div>
            <div className="login">
                <form className="signin" >       
                <h2 className="signinHead">Sign in to LIST</h2>
                <label >username:</label>
                <input type="text"placeholder="Username or Email" className="username" />
                <label >password:</label>
                <input type="password" placeholder="Password" className="password"/>  
                           
                <br/><Link to="/list" className="Loginbutton">login</Link>
                <Link to="/Signup" className="Loginbutton">Signup</Link>
                
                </form>

            </div> 
        </div>
    )
}

export default Reg;
