import React, { useEffect, useState } from "react";
import './Blog.css';

import allBlogData from './blogData.json';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        setBlogs(allBlogData);
    }, [])

    return (
        <div className="section container" id="blog">
            <h3 className="section_title"><Fade top>From Our Blog</Fade> <Fade bottom>📜</Fade></h3>
            <Fade bottom>
                <p className="sub_title">Checkout your usefull one!</p>
            </Fade>

            <div className="row content">
                {
                    blogs.map(blog => {
                        return (
                            <div key={blog.key} className="col-md-4 blog_card">

                                <Link to={`/blogs/${blog.key}`}>
                                    <img className="blog_image" src={blog.image}></img>
                                    <p className="blog_date">{blog.date}</p>
                                    <h6 className="blog_title">{blog.name}</h6>

                                </Link>
                            </div>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default Blog;