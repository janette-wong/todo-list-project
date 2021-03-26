import React from "react";
import { Link } from "react-router-dom";
import list from "../picture/list.png";
import Header from "../components/Header/Header";

const In = () => {
    return ( <
        div className = "backsignin" >
        <
        Header / >
        <
        div className = "sign-in" >
        <
        div className = "in-container" >
        <
        div className = "signin-content" >
        <
        div className = "signin-image" >
        <
        div > { " " } <
        img src = { list }
        width = "350"
        height = "450" / > { " " } <
        /div>{" "} <
        Link to = "/Signup" > Create an account < /Link>{" "} <
        /div>{" "} <
        div className = "signin-form" >
        <
        h2 className = "form-title" > Sign in < /h2>{" "} <
        form method = "POST"
        class = "register-form"
        id = "login-form" >
        <
        div className = "form-group" >
        <
        label
        for = "your_name" > { " " } <
        i class = "zmdi zmdi-account material-icons-name" > < /i>{" "} <
        /label>{" "} <
        input type = "text"
        name = "your_name"
        id = "your_name"
        placeholder = "Your Name" /
        >
        <
        /div>{" "} <
        div className = "form-group" > { " " } <
        label
        for = "your_pass" > { " " } <
        i class = "zmdi zmdi-lock" > < /i>{" "} <
        /label>{" "} <
        input type = "password"
        name = "your_pass"
        id = "your_pass"
        placeholder = "Password" /
        >
        <
        /div>{" "} <
        div className = "form-group" >
        <
        input type = "checkbox"
        name = "remember-me"
        id = "remember-me"
        class = "agree-term" /
        >
        <
        label
        for = "remember-me"
        class = "label-agree-term" > { " " } <
        span > { " " } <
        span > < /span>{" "} <
        /span>{" "}
        Remember me { " " } <
        /label>{" "} <
        /div>{" "} <
        Link to = "/list" >
        <
        div className = "form-group form-button" >
        <
        input type = "submit"
        name = "signin"
        id = "signin"
        class = "form-submit"
        value = "Log in" /
        >
        <
        /div>{" "} <
        /Link>{" "} <
        /form>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};

export default In;