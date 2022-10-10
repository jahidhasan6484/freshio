import React from "react";
import './Logo.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to='/'>
        <img className="logo" src={logo} alt="Freshio"></img>
        </Link>
    )
}

export default Logo;