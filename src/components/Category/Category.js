import { React, useState, useEffect } from "react";
import './Category.css';
import { Link } from "react-router-dom";

import data from './category.json';
import Cart from "../Cart/Cart";

const Category = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        setCategory(data)
    })

    return (
        <div className="category section">
            <div className="container">
                <div className="row">
                    {
                        category && category.map((category) => {
                            return (
                                <Cart categ={category} key={category.key}/>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Category;