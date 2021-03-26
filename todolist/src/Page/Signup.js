import React from 'react'
import dotpaper from '../picture/dotpaper.png'
import { Link } from "react-router-dom"
import Header from '../components/Header/Header'
const Signup = () => {
    return (
        <div className="backsignup">
            <Header />
            <div className="sign-up">
                    <div className="up-container">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">Sign up</h2>
                                <form method="POST" class="register-form" id="register-form">
                                    <div className="form-group">
                                        <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="name" id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email"><i class="zmdi zmdi-email"></i></label>
                                        <input type="email" name="email" id="email" placeholder="Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="pass" id="pass" placeholder="Password" />
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
                                        <input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
                                    </div>
                                </form>
                            </div>
                            <div className="signup-image">
                                <div><img src={dotpaper} alt="sing up image" /></div>
                                <Link to="/In"> I am already member</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Signup
