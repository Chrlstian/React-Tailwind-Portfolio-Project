import React from 'react';

const DownloadButton = () => {
  const handleDownload = async () => {
    const pdfUrl = '../assets/resumePdf/christianbensoncapon.pdf'; // Update this with the correct path

    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'christianCapon.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading the resume', error);
    }
  };

  return (
    <button
        className='hero-btn-1 sm:w-full lg:w-full lg:text-lg'
        onClick={handleDownload}
    >
      Download Resume
    </button>
  );
};

export default DownloadButton;
