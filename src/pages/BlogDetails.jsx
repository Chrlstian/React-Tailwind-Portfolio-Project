import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";

import LikeComments from "../components/blogs/LikeComments";

import blog1 from '../assets/images/card-laptop-1.webp';
import blog2 from '../assets/images/card-laptop-2.webp';

const blogImages = [blog1, blog2];

export default function BlogDetails(props){

    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const blogData = props.blogData.find(item => item.id === parseInt(id, 10));
        setBlog(blogData);
    }, [id, props.blogData]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return(
        <>
            <div>
                <img className="border border-gray-800 md:w-full md:object-cover md:h-96" src={blogImages[id - 1]} alt="Blog" />
            </div>
            <div className="flex flex-col gap-5 p-4 md:pl-8 md:pr-8">
                <div className="m-auto xl:max-w-5xl"> 
                    <div className="flex items-center pb-5">
                        <img className='w-10 h-10 rounded-full border' src={props.blogData[0].profile} alt="Christian Benson profile"/>
                        <p className={`${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>Christian Benson <br />{props.blogData[0].month} . {blog.time}</p>
                    </div>
                    <h2 className={`font-bold pb-5 md:text-center text-2xl md:text-3xl lg:text-4xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>{blog.title}</h2>
                    <p className="indent-10 text-txt pb-4 md:text-lg">{blog.descriptionIntro}</p>
                    <h3 className={`font-bold pb-3 text-xl md:text-2xl lg:text-3xl xl:text-4xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>{blog.titleOne}</h3>
                    <p className="indent-10 text-txt pb-4 md:text-lg ">{blog.descriptionOne}</p>
                    <h3 className={`font-bold pb-3 text-xl md:text-2xl lg:text-3xl xl:text-4xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>{blog.titleTwo}</h3>
                    <p className="indent-10 text-txt pb-4 md:text-lg ">{blog.descriptionTwo}</p>
                    <h3 className={`font-bold pb-3 text-xl md:text-2xl lg:text-3xl xl:text-4xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>{blog.titleThree}</h3>
                    <p className="indent-10 text-txt pb-4 md:text-lg ">{blog.descriptionThree}</p>
                    <h3 className={`font-bold pb-3 text-xl md:text-2xl lg:text-3xl xl:text-4xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>{blog.titleFour}</h3>
                    <p className="indent-10 text-txt pb-4 md:text-lg ">{blog.descriptionFour}</p>
                    <h3 className={`font-bold pb-3 text-xl md:text-2xl lg:text-3xl xl:text-4xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>{blog.titleFive}</h3>
                    <p className="indent-10 text-txt pb-4 md:text-lg ">{blog.descriptionFive}</p>
                    <h3 className={`font-bold pb-3 text-xl md:text-2xl lg:text-3xl xl:text-4xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>{blog.titleSix}</h3>
                    <p className="indent-10 text-txt pb-4 md:text-lg ">{blog.descriptionSix}</p>
                    <h3 className={`font-bold pb-3 text-xl md:text-2xl lg:text-3xl xl:text-4xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>{blog.titleConclusion}</h3>
                    <p className="indent-10 text-txt pb-4 ">{blog.conclusion}</p>
                    <LikeComments views={blog.views} comment={blog.comments}/>
                </div>
            </div>       
        </>
    );
}