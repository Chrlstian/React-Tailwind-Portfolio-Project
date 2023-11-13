import React from 'react';

// import { Link } from 'react-router-dom';
import ExperienceCard from '../../components/ExperienceCard';

const mernData = [
    {
        id: 1,
        stack: 'JS, REACT, & TAILWIND',
        name: 'Capon Piggery & Meat',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    {
        id: 2,
        stack: 'JS',
        name: 'Photo Gallery',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
    {
        id: 3,
        stack: 'JS',
        name: 'My old Portofolio',
        description: 'Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
    },
   
];
export default function Html(props){
    const renderMernData = mernData.map(item => {
        return <ExperienceCard key={item.id} item={item} lightMode={props.lightMode}/>
    })
    return(
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-8 md:pt-0 lg:p-8 lg:pt-0 xl:p-20 xl:pt-0 xl:gap-8 gap-4 p-4 max-w-7xl m-auto'>
                {renderMernData}
            </div>
        </>
    
    );
}