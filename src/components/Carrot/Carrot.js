import React from "react";
import './Carrot.css';

const Carrot = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 carrot">
                    <img className="img-fluid" src="https://htmldemo.net/mixy/mixy/assets/images/banners/img1_banner2_mixy4.webp" alt="carrot1"></img>
                </div>
                <div className="col-md-4 carrot2 carrot">
                    <div className="carrot_content">
                        <h6>Fresh Juice 🥤</h6>
                        <h1 className="carrot_title">🥕 CARROT 🥕</h1>
                        <h6>Fresh Juice | 100% Natural</h6>
                        <button className="btn btn-success mt-5">Discover Now</button>
                    </div>
                </div>
                <div className="col-md-4 carrot">
                    <img className="img-fluid" src="https://htmldemo.net/mixy/mixy/assets/images/banners/img3_banner2_mixy4.webp" alt="carrot3"></img>
                </div>
            </div>
        </div>
    )
}

export default Carrot;