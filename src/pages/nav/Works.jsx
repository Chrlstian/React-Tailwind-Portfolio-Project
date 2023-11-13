import React from 'react';
import ExperienceCard from '../../components/ExperienceCard';

const wordExpData = [
    {
        id: 1,
        stack: 'WORDPRESS',
        name: 'High speed internet',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    {
        id: 2,
        stack: 'HTML',
        name: 'Fully equipped kitchen',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    {
        id: 3,
        stack: 'JAVASCRIPT',
        name: 'Huge parking space',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    {
        id: 4,
        stack: 'REACT & TAILWIND',
        name: 'Global Standard',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    {
        id: 5,
        stack: 'WORDPRESS',
        name: 'Full security cameras',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    {
        id: 6,
        stack: 'CSS',
        name: 'Conference rooms',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    }
];
export default function Works(props){
    const renderExpData = wordExpData.map(item => {
        return <ExperienceCard key={item.id} item={item} lightMode={props.lightMode}/>
    })
    return(
        <>
            <div className='p-4 mt-5 md:p-8 lg:p-8 xl:p-20 xl:pt-8 xl:pb-8 xl:text-center'>
                <h2 className={`text-2xl pb-4 font-bold md:text-3xl lg:text-4xl xl:text-5xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>What we are offeering to creative people.</h2>
                <p className='text-txt md:text-lg'>Some unique features that are only prevalent in our specialized services</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-8 md:pt-0 lg:p-8 lg:pt-0 xl:p-20 xl:pt-0 xl:gap-8 gap-4 p-4 max-w-7xl m-auto'>
                {renderExpData}
            </div>
        </>
    
    );
}