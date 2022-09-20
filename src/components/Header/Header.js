import React, { useState } from "react";
import './Header.css';

import logo from '../../images/logo.svg';
import Home from "../Home/Home";
import Category from "../Category/Category";
import Hot from "../Hot/Hot";
import Blog from "../Blog/Blog";
import SuperDeals from "../SuperDeals/SuperDeals";

import Fade from 'react-reveal/Fade';

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
                <nav class={showColor ? "navbar active navbar-expand-lg fixed-top" : "navbar navbar-expand-lg fixed-top"}>
                    <div class="container">
                        <img className="logo" src={logo} alt="Freshio"></img>
                        {
                            showColor &&
                            <>
                                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <p className="hamburger ">menu</p>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Shop</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Products
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#superDeals">Super Deals Of The Week</a></li>
                                                <li><a class="dropdown-item" href="#">Fruits &amp; Vegetables</a></li>
                                                <li><a class="dropdown-item" href="#">Breakfast &amp; Dairy</a></li>
                                                <li><a class="dropdown-item" href="#">New Arrivals</a></li>
                                                <li><a class="dropdown-item" href="#hot">What’s Hot</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#blog">Blog</a>
                                        </li>
                                    </ul>
                                    <div class="cart_user_section">
                                        <div className="cart_section">

                                            <p>0</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                            </svg>
                                            <p>৳ 00.00</p>

                                        </div>
                                        <div className="sign_in_section">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </nav>
            </Fade>

            <Home />

            <Category />
            <SuperDeals />

            <Hot />

            <Blog />
        </>
    )
}

export default Header;