import React from 'react';
import WorkCard from '../../components/WorkCard';

// WorkCard images
import imgWorkCard1 from '../../assets/images/jertian app.png';
import imgWorkCard2 from '../../assets/images/edivalve.webp';
import imgWorkCard3 from '../../assets/images/treecuttingservices.webp';

const work = [
    {
        id: 1,
        title: 'Automation Developer at Rise Talent',
        date: 'March - August 2024',
        location: 'Chicago City',
        description: 'Collaborated with the boss to design and develop a desktop web automation application for automating twitter. Utilized HTML, CSS, Javascript, ElectronJS, Puppeteer, and NodeJs  to create an interactive and user-friendly interface. Ensured the application was responsive and optimized for various devices and work efficiently.',
        img: imgWorkCard1,
        url: 'Desktop application No Website URL'

    },
    {
        id: 2,
        title: 'WordPress Developer at Edivalve',
        date: 'Sep 2022',
        location: 'Oklahoma City',
        description: 'Collaborated with a team to design and develop a business website for Edivalve. Utilized HTML, CSS, and Javascript to create an interactive and user-friendly interface. Ensured the website was responsive and optimized for various devices. Integrated relevant content and visuals to represent the brand effectively.',
        img: imgWorkCard2,
        url: 'https://edivalve.com/'

    },
    {
        id: 3,
        title: 'WordPress Developer at TCSC',
        date: 'Nov 2022 ',
        location: 'Montreal, Canada',
        description: 'Designed and developed a website for a tree cutting services company. Utilized HTML, CSS, Javascript to create a visually appealling and informative platform. Implemented responsive design to ensure seamless navigation on various devices. Integrated features to showcase services and enhance user engagement.',
        img: imgWorkCard3,
        url: 'https://treecuttingbranchoutservices.ca/'
    }

];
export default function Work(props){

    const renderWorkExp = work.map(item => (
        <WorkCard key={item.id} item={item} lightMode={props.lightMode}/>
    ))
  
    return(
        <>
            <h2 className={`text-center font-bold text-2xl mt-10 md:mb-10 md:text-3xl lg:text-4xl xl:text-5xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>My Work Experience</h2>
            {renderWorkExp}
        </>
    
    );
}