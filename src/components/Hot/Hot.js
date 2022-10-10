import React, { useEffect, useState, useContext } from "react";
import './Hot.css';

import data from '../data.json';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { CartContext } from "../../App";

const Hot = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        arrows: false,
        dots: false,

        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 411,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    };

    const [isShown, setIsShown] = useState(false);

    const [hotData, setHotData] = useState([]);

    useEffect(() => {
        let data_filter = data.filter(element => element.category === "hotData")
        setHotData(data_filter);
    }, [])

    const [cart, setCart] = useContext(CartContext);

    const [tempCart, setTempCart] = useState(JSON.parse(localStorage.getItem('cart')))

    const handleAddToCart = (data) => {
        tempCart.push(data)
        
        localStorage.setItem('cart', JSON.stringify(tempCart))
        console.log("DATA", data);
        console.log("TEMP CART", tempCart)
    }

    return (
        <div className="section container" id="hot">
            <h3 className="section_title"><Fade top>What’s Hot!</Fade> <Fade bottom>🌶️</Fade></h3>
            <Fade bottom>
                <p className="sub_title">Find out best seller products!</p>
            </Fade>

            <Fade>
                <div className="row content">
                    <Slider {...settings}>
                        {
                            hotData.map(data => {
                                return (
                                    <div key={data.key} className="col-md-3 hot_card" onMouseEnter={() => setIsShown(data.key)}
                                        onMouseLeave={() => setIsShown("")}>

                                        {
                                            isShown === data.key ?
                                                <Flip left>
                                                    <img className="hot_image image2" src={data.image1} alt="h11"></img>
                                                </Flip>
                                                :
                                                <img className="hot_image image2" src={data.image2} alt="h11"></img>
                                        }

                                        <p className="rating">{data.rating}</p>

                                        <div className="hot_card_details">
                                            <div>
                                                <p className="hot_card_title">{data.name}</p>
                                                <p className="price">৳ {data.price} ({data.priceUnit})</p>
                                            </div>

                                            <div className="add_remove_btn" onClick={()=> handleAddToCart(data)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bag-dash" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </Fade>
        </div>
    )
}

export default Hot;