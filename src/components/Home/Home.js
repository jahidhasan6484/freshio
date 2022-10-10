import React from "react";
import './Home.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';

import image14 from '../../images/14.jpg';
import image2 from '../../images/02.jpg';
// import image8 from '../../images/08.jpg';
import image4 from '../../images/04.jpg';
import image16 from '../../images/16.jpg';
import image19 from '../../images/19.jpg';

const Home = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 5"></button> */}
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <Pulse>
                    <img src={image14} className="img-fluid d-block w-100" alt="..." />
                </Pulse>
                <div className="carousel-caption">
                    <Slide top>
                        <h5>Life Of A Goose</h5>
                    </Slide>
                    <Slide bottom>
                        <p>The family Anatidae to comprises the genera Anser and Branta</p>
                        {/* <Link to="/" className="home_button"><span>read review</span></Link> */}
                    </Slide>
                </div>
            </div>
            <div className="carousel-item">
                <Pulse>
                    <img src={image2} className="img-fluid d-block w-100" alt="..." />
                </Pulse>
                <div className="carousel-caption">
                    <Slide top>
                        <h5>Star Warriors</h5>
                    </Slide>
                    <Slide bottom>
                        <p>The family Anatidae to comprises the genera Anser and Branta</p>
                        {/* <Link to="/" className="home_button"><span>read review</span></Link> */}
                    </Slide>
                </div>
            </div>
            
            <div className="carousel-item">
                <Pulse>
                    <img src={image4} className="img-fluid d-block w-100" alt="..." />
                </Pulse>
                <div className="carousel-caption">
                    <Slide top>
                        <h5>Light of Darkness</h5>
                    </Slide>
                    <Slide bottom>
                        <p>The family Anatidae to comprises the genera Anser and Branta</p>
                        {/* <Link to="/" className="home_button"><span>read review</span></Link> */}
                    </Slide>
                </div>
            </div>
            <div className="carousel-item">
                <Pulse>
                    <img src={image16} className="img-fluid d-block w-100" alt="..." />
                </Pulse>
                <div className="carousel-caption">
                    <Slide top>
                        <h5>Light of Darkness</h5>
                    </Slide>
                    <Slide bottom>
                        <p>The family Anatidae to comprises the genera Anser and Branta</p>
                        {/* <Link to="/" className="home_button"><span>read review</span></Link> */}
                    </Slide>
                </div>
            </div>
            <div className="carousel-item">
                <Pulse>
                    <img src={image19} className="img-fluid d-block w-100" alt="..." />
                </Pulse>
                <div className="carousel-caption">
                    <Slide top>
                        <h5>Light of Darkness</h5>
                    </Slide>
                    <Slide bottom>
                        <p>The family Anatidae to comprises the genera Anser and Branta</p>
                        {/* <Link to="/" className="home_button"><span>read review</span></Link> */}
                    </Slide>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    )
}

export default Home;