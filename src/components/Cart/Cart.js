import React from "react";
import { Link } from "react-router-dom";
import './Cart.css';

const Cart = (props) => {
    const { categ } = props;
    return (
        <div className="col-md-3 category_card" >
            <Link to={`/handleCategory/${categ.key}`}>
                <div>
                    <h5>{categ.name}</h5>
                    <p>{categ.available}</p>
                </div>
                <img className="category_image" src={categ.image}></img>
            </Link>
        </div>
    )
}

export default Cart;

