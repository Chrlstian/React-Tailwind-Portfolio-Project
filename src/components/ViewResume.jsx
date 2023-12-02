
// import downloadIcon from '../assets/images/download-icon.webp';
import resume from '../assets/resumePdf/christianbensoncapon.pdf';
import React from 'react';

export default function ViewResume(){
   
    const openResume = window.open = resume;

  return (
    <a href={openResume} target="_blank" rel='noopener noreferrer' className='flex gap-4 justify-center cursor-pointer hero-btn-1 sm:w-full lg:w-full lg:text-lg'>
      View Resume
      {/* <img src={downloadIcon} alt="download icon" /> */}
    </a>
  );
};






