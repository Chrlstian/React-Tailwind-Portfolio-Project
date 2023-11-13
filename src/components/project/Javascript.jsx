import React from 'react';

// import { Link } from 'react-router-dom';
import ExperienceCard from '../../components/ExperienceCard';

const jsData = [
    {
        id: 1,
        stack: 'JAVASCRIPT',
        name: 'Simple Calculator',
        siteLink: "https://chrlstian.github.io/ChristianCaponProfilePortfolio/calculator.html",
        description: "I made this app to practice using functions and numbers in JavaScript."
    },
    {
        id: 2,
        stack: 'JAVASCRIPT',
        name: 'The future Ball',
        siteLink: "https://chrlstian.github.io/ChristianCaponProfilePortfolio/fortune.html",
        description: "A simple minded AI that can predict your future. I made this app because im bored and also i'm a big fan of AI."
    },
    {
        id: 3,
        stack: 'HTML & CSS & JAVASCRIPT',
        name: 'The old Portofolio',
        siteLink: "https://chrlstian.github.io/ChristianCaponProfilePortfolio/",
        description: "I put my passion and dedication to my first portfolio which is now the old. The small project made me learn github and git to upload it live."
    },
   
];
export default function Javascript(props){
    const renderJsData = jsData.map(item => {
        return <ExperienceCard key={item.id} item={item} lightMode={props.lightMode}/>
    })
    return(
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-8 md:pt-0 lg:p-8 lg:pt-0 xl:p-20 xl:pt-0 xl:gap-8 gap-4 p-4 max-w-7xl m-auto'>
                {renderJsData}
            </div>
        </>
    
    );
}