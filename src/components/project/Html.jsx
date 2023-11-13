import React from 'react';

// import { Link } from 'react-router-dom';
import ExperienceCard from '../../components/ExperienceCard';

const htmlData = [
    {
        id: 1,
        stack: 'HTML & CSS',
        name: 'Capon Piggery & Meat',
        siteLink: "https://chrlstian.github.io/ChristianCaponProfilePortfolio/PiggeryAndMeat.html",
        description: "My first website! I made the design and built the site using HTML and CSS to practice what I learned. I want also a piggery business and this is an inspiration for me."
    },
    {
        id: 2,
        stack: 'HTML & CSS',
        name: 'Photo Gallery',
        siteLink: "https://chrlstian.github.io/ChristianCaponProfilePortfolio/philiWonders.html",
        description: "My second site! I created the site to inpires other people how beautiful and awesome the natures in philippines."
    },
    {
        id: 3,
        stack: 'HTML & CSS & JAVASCRIPT',
        name: 'My old Portofolio',
        siteLink: 'https://chrlstian.github.io/ChristianCaponProfilePortfolio/',
        description: "I put my passion and dedication to my first portfolio which is now the old. The small project made me learn github and git to upload it live."
    },
   
];
export default function Html(props){
    const renderHtmlData = htmlData.map(item => {
        return <ExperienceCard key={item.id} item={item} lightMode={props.lightMode}/>
    })
    return(
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-8 md:pt-0 lg:p-8 lg:pt-0 xl:p-20 xl:pt-0 xl:gap-8 gap-4 p-4 max-w-7xl m-auto'>
                {renderHtmlData}
            </div>
        </>
    
    );
}