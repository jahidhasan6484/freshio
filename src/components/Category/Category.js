import React from "react";
import './Category.css';
import HandleCategory from '../HandleCategory/HandleCategory'
import { Link, useNavigate } from "react-router-dom";

import c1 from '../../images/c1.webp';
import c2 from '../../images/c2.webp';
import c3 from '../../images/c3.webp';
import c4 from '../../images/c4.webp';
import c5 from '../../images/c5.webp';
import c6 from '../../images/c6.webp';
import c7 from '../../images/c7.webp';
import c8 from '../../images/c8.webp';

const Category = () => {

    let navigate = useNavigate();
    // const routeChange = () =>{ 
    //   let path = `newPath`; 
    //   navigate(path);
    // }

    const handleCategory = () => {
        console.log("CLICKED")

        navigate(<HandleCategory />)
    }
    return (
        <div className="category section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 category_card" >
                        <Link to={`/handleCategory/${"Fresh Vegitables"}`}>
                            <div>
                                <h5 onClick={() => handleCategory()}>Fresh Vegitables</h5>
                                <p>8 products</p>
                            </div>
                            <img className="category_image" src={c1}></img>
                        </Link>
                    </div>
                    <div className="col-md-3 category_card">
                        <Link to={`/handleCategory/${"Canned Goods"}`}>
                            <div>
                                <h5>Canned Goods</h5>
                                <p>10 products</p>
                            </div>
                            <img className="category_image" src={c2}></img>
                        </Link>
                    </div>
                    <div className="col-md-3 category_card">
                        <Link to={`/handleCategory/${"Meats & Seafoods"}`}>
                            <div>
                                <h5>Meats &amp; Seafoods</h5>
                                <p>8 products</p>
                            </div>
                            <img className="category_image" src={c3}></img>
                        </Link>
                    </div>
                    <div className="col-md-3 category_card">
                        <Link to={`/handleCategory/${"Fresh Fruits"}`}>
                            <div>
                                <h5>Fresh Fruits</h5>
                                <p>8 products</p>
                            </div>
                            <img className="category_image" src={c4}></img>
                        </Link>
                    </div>
                    <div className="col-md-3 category_card">
                        <Link to={`/handleCategory/${"Bread & Bakery"}`}>
                            <div>
                                <h5>Bread &amp; Bakery</h5>
                                <p>9 products</p>
                            </div>
                            <img className="category_image" src={c5}></img>
                        </Link>
                    </div>
                    <div className="col-md-3 category_card">
                        <Link to={`/handleCategory/${"Eggs & Dairy"}`}>
                            <div>
                                <h5>Eggs &amp; Dairy</h5>
                                <p>18 products</p>
                            </div>
                            <img className="category_image" src={c6}></img>
                        </Link>
                    </div>
                    <div className="col-md-3 category_card">
                    <Link to={`/handleCategory/${"Soft Drinks"}`}>
                        <div>
                            <h5>Soft Drinks</h5>
                            <p>8 products</p>
                        </div>
                        <img className="category_image" src={c7}></img>
                        </Link>
                    </div>
                    <div className="col-md-3 category_card">
                        <Link to={`/handleCategory/${"Daily Needs"}`}>
                            <div>
                                <h5>Daily Needs</h5>
                                <p>8 products</p>
                            </div>
                            <img className="category_image" src={c8}></img>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Category;