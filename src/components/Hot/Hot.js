import React, { useState } from "react";
import './Hot.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import h1 from '../../images/h1.webp';
import h11 from '../../images/h11.webp';
import h2 from '../../images/h2.webp';
import h22 from '../../images/h22.webp';
import h3 from '../../images/h3.webp';
import h33 from '../../images/h33.webp';
import h4 from '../../images/h4.webp';
import h44 from '../../images/h44.webp';
import h5 from '../../images/h5.webp';
import h55 from '../../images/h55.webp';
import h6 from '../../images/h6.webp';
import h66 from '../../images/h66.webp';
import h7 from '../../images/h7.webp';
import h77 from '../../images/h77.webp';

import Fade from 'react-reveal/Fade';

const Hot = () => {
    var settings = {
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

    const [addRemove, setAddRemove] = useState(true);
    var products = []

    const handleAddRemove = (productName) => {
        setAddRemove(!addRemove);
        console.log(productName);
        console.log(products)
    }

    const [isShown, setIsShown] = useState(false);


    return (
        <div className="section container" id="hot">
            <h3 className="section_title"><Fade top>What’s Hot!</Fade> <Fade bottom>🌶️</Fade></h3>
            <Fade bottom>
            <p className="sub_title">Find out best seller products!</p>

            </Fade>
            
<Fade>
            <div className="row content">
                <Slider {...settings}>
                    <div className="col-md-3 hot_card" onMouseEnter={() => setIsShown("orange")}
                        onMouseLeave={() => setIsShown("")}>

                        {
                            isShown == "orange" ?
                                <Fade bottom>
                                    <img className="hot_image image2" src={h11} alt="h11"></img>
                                </Fade>
                                :
                                <img className="hot_image image2" src={h1} alt="h11"></img>
                        }

                        <p className="rating">4.5 out of 5</p>

                        <div className="hot_card_details">
                            <div>
                                <p className="hot_card_title">Fresh Orange</p>
                                <p className="price">৳ 295.00 (1 KG)</p>
                            </div>

                            <div className="add_remove_btn" onClick={() => handleAddRemove("orange")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 hot_card" onMouseEnter={() => setIsShown("mango")}
                        onMouseLeave={() => setIsShown("")}>
                        {
                            isShown == "mango" ?
                                <Fade top>
                                    <img className="hot_image image2" src={h22} alt="h11"></img>
                                </Fade>
                                :
                                <img className="hot_image image22" src={h2} alt="h1"></img>

                        }
                        <p className="rating">4.5 out of 5</p>

                        <div className="hot_card_details">
                            <div>
                                <p className="hot_card_title">Fresh Mango</p>
                                <p className="price">৳ 518.00 (1 KG)</p>
                            </div>

                            <div className="add_remove_btn" onClick={handleAddRemove}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 hot_card" onMouseEnter={() => setIsShown("apricots")}
                        onMouseLeave={() => setIsShown("")}>
                        {
                            isShown == "apricots" ?
                                <Fade top>
                                    <img className="hot_image image2" src={h33} alt="h11"></img>
                                </Fade>
                                :
                                <img className="hot_image image1" src={h3} alt="h1"></img>
                        }
                        <p className="rating">4.0 out of 5</p>

                        <div className="hot_card_details">
                            <div>
                                <p className="hot_card_title">Dried Apricots</p>
                                <p className="price">৳ 100.00 (1 KG)</p>
                            </div>

                            <div className="add_remove_btn" onClick={handleAddRemove}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 hot_card" onMouseEnter={() => setIsShown("dal")}
                        onMouseLeave={() => setIsShown("")}>
                        {
                            isShown == "dal" ?
                                <Fade bottom>
                                    <img className="hot_image image2" src={h44} alt="h11"></img>
                                </Fade>
                                :
                                <img className="hot_image image1" src={h4} alt="h1"></img>
                        }
                        <p className="rating">4.9 out of 5</p>

                        <div className="hot_card_details">
                            <div>
                                <p className="hot_card_title">Toor Dal</p>
                                <p className="price">৳ 130.00 (1 KG)</p>
                            </div>

                            <div className="add_remove_btn" onClick={handleAddRemove}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 hot_card" onMouseEnter={() => setIsShown("whiteworths")}
                        onMouseLeave={() => setIsShown("")}>
                        {
                            isShown == "whiteworths" ?
                                <Fade bottom>
                                    <img className="hot_image image2" src={h55} alt="h11"></img>
                                </Fade>
                                :
                                <img className="hot_image image1" src={h5} alt="h1"></img>
                        }
                        <p className="rating">4.0 out of 5</p>

                        <div className="hot_card_details">
                            <div>
                                <p className="hot_card_title">Whiteworths</p>
                                <p className="price">৳ 100.00 (1 KG)</p>
                            </div>

                            <div className="add_remove_btn" onClick={handleAddRemove}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 hot_card" onMouseEnter={() => setIsShown("brockley")}
                        onMouseLeave={() => setIsShown("")}>
                        {
                            isShown == "brockley" ?
                                <Fade top>
                                    <img className="hot_image image2" src={h66} alt="h11"></img>
                                </Fade>
                                :
                                <img className="hot_image image1" src={h6} alt="h1"></img>
                        }
                        <p className="rating">4.7 out of 5</p>

                        <div className="hot_card_details">
                            <div>
                                <p className="hot_card_title">Green Brockley</p>
                                <p className="price">৳ 90.00 (1 KG)</p>
                            </div>

                            <div className="add_remove_btn" onClick={() => handleAddRemove}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 hot_card" onMouseEnter={() => setIsShown("dates")}
                        onMouseLeave={() => setIsShown("")}>
                        {
                            isShown == "dates" ?
                                <Fade top>
                                    <img className="hot_image image2" src={h77} alt="h11"></img>
                                </Fade>
                                :
                                <img className="hot_image image1" src={h7} alt="h1"></img>
                        }
                        <p className="rating">4.1 out of 5</p>

                        <div className="hot_card_details">
                            <div>
                                <p className="hot_card_title">Red Dates</p>
                                <p className="price">৳ 900.00 (1 KG)</p>
                            </div>

                            <div className="add_remove_btn" onClick={(mango) => handleAddRemove}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
            </Fade>
        </div>
    )
}

export default Hot;