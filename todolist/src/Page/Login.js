import React,{useState} from "react";
import { Link } from "react-router-dom";
import list from "../picture/list.png";
import Headersignup from "../components/Header/Headersignup";
import axios from "../Util/axios";
import qs from "qs";

const In = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState({})
  

  const loginCheck = async (e) =>{
    try {
      e.preventDefault()
      const login = await axios.post("/account/login",qs.stringify({
        username: username,
        password: password,
      }))
      if(login.data.isLogin){
      window.location.href="/List/" +username
      }
    } catch (error) {
    console.log(error);
    }  
  }
    return (
    <div className="backsignin">
      <Headersignup />
      <div className="sign-in">
        <div className="in-container">
          <div className="signin-content">
            <div className="signin-image">
              <div>
            
                <img src={list} width="350" height="450" />{" "}
              </div>
              <Link to="/Signup"> Create an account </Link>{" "}
            </div>
            <div className="signin-form">
              <h2 className="form-title"> Sign in </h2>{" "}
              <form className="register-form" id="login-form" onSubmit={loginCheck}>
                <div className="form-group">
                  <label for="your_name">
              
                    <i className="zmdi zmdi-account material-icons-name"> </i>{" "}
                  </label>
                  <input
                    type="text"
                    name="your_name"
                    id="your_name"
                    onChange={(e)=>{setUsername(e.target.value)}}
                    placeholder="Your Name"
                  />
                </div>{" "}
                <div className="form-group">
                  {" "}
                  <label for="your_pass">
                    {" "}
                    <i className="zmdi zmdi-lock"> </i>{" "}
                  </label>{" "}
                  <input
                    type="password"
                    name="your_pass"
                    id="your_pass"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    placeholder="Password"
                  />
                </div>{" "}
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="agree-term"
                  />
                  <label for="remember-me" className="label-agree-term">
                    {" "}
                    <span>
                      {" "}
                      <span> </span>{" "}
                    </span>{" "}
                    Remember me{" "}
                  </label>{" "}
                </div>{" "}
                
                  <div className="form-group form-button">
                    <input 
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Log in"
                    />
                  </div>{" "}
               
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default In;
