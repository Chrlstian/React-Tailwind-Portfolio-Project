import React from 'react';
import downloadIcon from '../assets/images/download-icon.webp';
import resume from '../assets/resumePdf/christianbensoncapon.pdf';

export default function DownloadButton(){
  
  return (
    <a 
      className='flex gap-4 justify-center cursor-pointer hero-btn-1 sm:w-full lg:w-full lg:text-lg'
      download="ChristianBensonCapon.pdf" 
      href={resume} 
      target='_blank' 
      rel='noopener noreferrer' >
      
      <p>Download Resume</p>
      <img src={downloadIcon} alt="download icon" />
      
    </a>
    
  );
};



