import React from "react";
import './Header.css';

import logo from '../../images/logo.svg';
import Home from "../Home/Home";
import Category from "../Category/Category";

const Header = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container">
               <img className="logo" src={logo} alt="Freshio"></img>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Super Deals</a></li>

                                <li><a class="dropdown-item" href="#">New Arrivals</a></li>
                            </ul>
                        </li> */}
                        {/* <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li> */}
                    </ul>
                    <form class="d-flex" role="search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        <Home />

        <Category />
        </>
    )
}

export default Header;