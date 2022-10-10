import React, { useState } from "react";
import './Header.css';

import logo from '../../images/logo.svg';
import Home from "../Home/Home";
import Category from "../Category/Category";
import Hot from "../Hot/Hot";
import Blog from "../Blog/Blog";
import SuperDeals from "../SuperDeals/SuperDeals";

import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import CartUser from "./CartUser/CartUser";

const Header = () => {
    const [showColor, setShowColor] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY >= 200) {
            setShowColor(true);
        } else {
            setShowColor(false);
        }
    }

    window.addEventListener('scroll', changeBackgroundColor)





    return (
        <>
            <Fade top>
                <nav className={showColor ? "navbar active navbar-expand-lg fixed-top" : "navbar navbar-expand-lg fixed-top"}>
                    <div className="container">
                        <Link to='/'>
                            <img className="logo" src={logo} alt="Freshio"></img>
                        </Link>

                        {
                            showColor &&
                            <>
                                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <p className="hamburger ">menu</p>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Home</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Products
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#superDeals">Super Deals Of The Week</a></li>
                                                <li><a className="dropdown-item" href="#hot">What’s Hot</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#blog">Blog</a>
                                        </li>
                                    </ul>
                                    <CartUser/>
                                </div>
                            </>
                        }
                    </div>
                </nav>
            </Fade>


        </>
    )
}

export default Header;