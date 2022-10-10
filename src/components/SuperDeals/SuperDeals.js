import React, { useEffect, useState } from "react";
import './SuperDeals.css';
import Timer from './Timer';

import data from '../data.json';

import Fade from 'react-reveal/Fade';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carrot from "../Carrot/Carrot";

const SuperDeals = () => {

    const [superDealsData, setSuperDealsData] = useState([]);

    useEffect(() => {
        let data_filter = data.filter(element => element.category == "superDeals")
        setSuperDealsData(data_filter)
    }, [])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        arrows: false,
        dots: false,

        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
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

    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("Oct 18,2022").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const timerDays = Math.floor(distance / (24 * 60 * 60 * 1000));
            const timerHours = Math.floor((distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60)));
            const timerMinutes = Math.floor((distance % (60 * 60 * 1000) / (1000 * 60)));
            const timerSeconds = Math.floor((distance % (60 * 1000) / (1000)));

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setDays(timerDays)
                setHours(timerHours)
                setMinutes(timerMinutes)
                setSeconds(timerSeconds)
            }
        })
    }

    useEffect(() => {
        startTimer()
    })

    return (
        <>
            <div className="section container" id="superDeals">
                <h3 className="section_title"><Fade top>Super Deals Of The Week</Fade> <Fade bottom>💥</Fade></h3>
                <Fade bottom>
                    <p className="sub_title">Special discount just for this week</p>
                </Fade>


                <Fade>
                    <div className="row content">
                        <Slider {...settings}>
                            {
                                superDealsData.map(deals => {
                                    return (
                                        <div key={deals.key} className="super_deals_card">
                                            <div className="row">
                                                <div className="col-md-6 deals_status">
                                                    <img className="deals_image" src={deals.image1} alt={deals.key}></img>
                                                    <div className="status">
                                                        <p className="sold">Sold: {deals.sold}</p>
                                                        <p className="available">Available: {deals.available}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 deals_info">
                                                    <p className="deals_rating">{deals.rating}</p>
                                                    <h6 className="deals_name">{deals.name}</h6>
                                                    <p className="deals_price">৳ {deals.price} ({deals.priceUnit})</p>
                                                    <p className="pt-5 hurry">Hurry up! Offers end ins:</p>
                                                    <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
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

            <Carrot />
        </>
    )
}

export default SuperDeals;