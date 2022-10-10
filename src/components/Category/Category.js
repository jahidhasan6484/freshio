import { React, useState, useEffect } from "react";
import './Category.css';
import { Link } from "react-router-dom";

import data from './category.json';
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
                                <div className="col-md-3 category_card" >
                                    <Link to={`/handleCategory/${category.key}`}>
                                        <div>
                                            <h5>{category.name}</h5>
                                            <p>{category.available}</p>
                                        </div>
                                        <img className="category_image" src={category.image}></img>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Category;