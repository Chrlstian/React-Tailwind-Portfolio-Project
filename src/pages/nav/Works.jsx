import React from 'react';
import WorkCard from '../../components/WorkCard';

const work = [
    {
        id: 1,
        title: 'WordPress Developer at Edivalve',
        date: 'Sep 2019 Present',
        location: 'San Francisco, CA, United States',
        description: 'Collaborated with a team to design and develop a business website for Edivalve. Utilized HTML, CSS, and Javascript to create an interactive and user-friendly interface. Ensured the website was responsive and optimized for various devices. Integrated relevant content and visuals to represent the brand effectively.'
    },
    {
        id: 2,
        title: 'WordPress Developer at TCSC',
        date: 'Sep 2017 Past',
        location: 'San Francisco, CA, United States',
        description: 'Designed and developed a website for a tree cutting services company. Utilized HTML, CSS, Javascript to create a visually appealling and informative platform. Implemented responsive design to ensure seamless navigation on various devices. Integrated features to showcase services and enhance user engagement.'
    }

];
export default function Work(props){

    const renderWorkExp = work.map(item => (
        <WorkCard key={item.id} item={item} blogData={props.blogData} lightMode={props.lightMode}/>
    ))
  
    return(
        <>
            <h2 className={`text-center font-bold text-2xl mt-10 md:text-3xl lg:text-4xl xl:text-5xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>My Work Experience</h2>
            {renderWorkExp}
        </>
    
    );
}