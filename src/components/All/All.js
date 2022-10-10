import React from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Category from "../Category/Category";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Hot from "../Hot/Hot";
import SuperDeals from "../SuperDeals/SuperDeals";

const All = () => {

    return (
        <>
            <Header />
            <Home />
            <Category />
            <SuperDeals />
            <Hot />
            <Blog />
        </>
    )
}

export default All;