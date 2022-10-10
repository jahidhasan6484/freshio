import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../Logo/Logo";
import data from './blogData.json';

const FullBlog = () => {
    const { key } = useParams();

    const [blog, setBlog] = useState([])
    const [latestBlog, setLatestBlog] = useState([])

    useEffect(() => {
        let data_filter = data.filter(element => element.key === key)
        setBlog(data_filter);
        let data_filter2 = data.filter(element => element.key !== key)
        setLatestBlog(data_filter2);
    })
    return (
        <div className="full_blog">
            <div className="section2 container">
                <Logo />
                <div className="row content">
                    <div className="col-md-9 blog_section">
                        {
                            blog.length > 0 && blog.map((blog) => {
                                return (
                                    <div>
                                        <h3>{blog.name}</h3>
                                        <p className="blog_date">{blog.date}</p>

                                        <img className="blog_image img-fluid" src={blog.image} alt="image"></img>

                                        <p className="blog_content">{blog.content1}</p>
                                        <p className="blog_content">{blog.content11}</p>
                                        <h5>{blog.title2}</h5>
                                        <img className="blog_image img-fluid" src={blog.title2Image} alt="image"></img>
                                        <p className="blog_content">{blog.content2}</p>
                                        <p className="blog_content">{blog.content22}</p>
                                        <p className="blog_content">{blog.content33}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-3 sidebar">
                        <h6>Latest Posts</h6>

                        {
                            latestBlog && latestBlog.map((blog) => {
                                return (
                                    <div key={blog.key} className="sidebar_element">
                                        <Link to={`/blogs/${blog.key}`}>
                                            <img className="img-fluid" src={blog.image} alt={data.name}></img>
                                            <div>
                                                <p className="sidebar_title">{blog.name}</p>
                                                <p className="sidebar_date">{blog.date}</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FullBlog;