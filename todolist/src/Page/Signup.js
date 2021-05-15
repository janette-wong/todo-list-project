import React,{useState} from 'react'
import dotpaper from '../picture/dotpaper.png'
import { Link } from "react-router-dom"
import Headersignup from '../components/Header/Headersignup'
import axios from "../Util/axios";
import qs from "qs";

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState({})
  
    const signupCheck = async () =>{
        try {
          const Signup = await axios.post("/account/signup",qs.stringify({
            username: username,
            password: password,
          }))
          if(Signup.data.isSignup){
          window.location.href="/Login"
          }
        } catch (error) {
    
        }
    }
    return (
        <div className="backsignup">
            <Headersignup/>
            <div className="sign-up">
                    <div className="up-container">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">Sign up</h2>
                                <form method="POST" class="register-form" id="register-form">
                                    <div className="form-group">
                                        <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="username" id="username" onChange={(e)=>{setUsername(e.target.value)}}placeholder="Username" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="pass" id="pass" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                                    </div>
                                    <div className="form-group form-button">
                                        <Link to="/Login"><input onClick={signupCheck} type="submit" name="signup" id="signup" class="form-submit" value="Register" /></Link>
                                    </div>
                                </form>
                            </div>
                            <div className="signup-image">
                                <div><img src={dotpaper} alt="sing up image" /></div>
                                <Link to="/Login"> I am already member</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default Signup
