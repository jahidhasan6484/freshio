import {React, useState, useEffect} from "react";
import './handleCategory.css';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { Link, useParams } from "react-router-dom";

import data from '../data.json';
import categoryData from '../Category/category.json';
import Logo from "../Logo/Logo";

const HandleCategory = () => {
    const { category } = useParams();

    const [typeData, setTypeData] = useState([]);
    const [isShown, setIsShown] = useState(false);

    const [otherCategory, setOtherCategory] = useState([]);

    useEffect(() => {
        let data_filter = data.filter(element => element.type === category)
        setTypeData(data_filter)

        let data_filter2 = categoryData.filter(categ => categ.name !== category)
        setOtherCategory(data_filter2) 
        
    })

    return (
            <div className="section2 container">
                <Logo />
                
                <div className="row content">

                    <div className="col-md-10">
                    <h3 className="section_title"><Fade top>{category}</Fade></h3>
                        <div className="row">
                        {
                        typeData.length > 0 ?
                            typeData.map((data) => {

                                return (
                                    <div className="col-md-3 hot_card" onMouseEnter={() => setIsShown(data.key)}
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

                                            <div className="add_remove_btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                            :
                            <p className="sub_title">No item available now, it will update soon!</p>
                    }

                        </div>
                    </div>
                    <div className="col-md-2 sidebar">
                        <h6>More Products</h6>

                         {
                            otherCategory && otherCategory.map((data) => {
                                return (
                                    <div className="sidebar_element">
                                        <Link to={`/handleCategory/${data.key}`}>
                                            <img className="img-fluid" src={data.image} alt="image"></img>
                                            <div>
                                                <p className="sidebar_title">{data.name}</p>
                                                <p className="sidebar_date">{data.available}</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        } 
                    </div>
                </div>

            </div>

    )
}

export default HandleCategory;