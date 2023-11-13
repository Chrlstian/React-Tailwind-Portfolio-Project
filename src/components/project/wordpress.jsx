import React from 'react';

// import { Link } from 'react-router-dom';
import ExperienceCard from '../../components/ExperienceCard';

const wordPressData = [
    {
        id: 1,
        stack: 'WORDPRESS',
        name: 'edivalve.com',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    {
        id: 2,
        stack: 'WORDPRESS',
        name: 'treecuttingbranchoutservices.ca',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    {
        id: 3,
        stack: 'WORDPRESS',
        name: 'nationalerc.us',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    {
        id: 4,
        stack: 'WORDPRESS',
        name: 'howtofindyoursoul.com',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    {
        id: 5,
        stack: 'WORDPRESS',
        name: 'mycars.jp',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    {
        id: 6,
        stack: 'WORDPRESS',
        name: 'youdidit.ca',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    {
        id: 7,
        stack: 'WORDPRESS',
        name: 'notonyouriphone.com',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    
];
export default function Wordpress(props){
    const renderWordPressData = wordPressData.map(item => {
        return <ExperienceCard key={item.id} item={item} lightMode={props.lightMode}/>
    })
    return(
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-8 md:pt-0 lg:p-8 lg:pt-0 xl:p-20 xl:pt-0 xl:gap-8 gap-4 p-4 max-w-7xl m-auto'>
                {renderWordPressData}
            </div>
        </>
    
    );
}