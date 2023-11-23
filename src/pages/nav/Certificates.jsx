
import React, { useState, useEffect } from 'react';
import CertCard from '../../components/CertCard';
import certData from '../../data/certificatesData';
import Skeleton from '../../components/Skeleton';

const Certificates = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const renderCert = certData.map((item) => (
    <CertCard key={item.id} item={item} lightMode={props.lightMode} />
  ));


  return (
    <>
      <h2 className={`text-center font-bold text-2xl mt-10 md:mb-8 lg:mb-10 md:text-3xl lg:text-4xl xl:text-5xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>
        The Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-8 md:pt-0 lg:p-8 lg:pt-0 xl:p-20 xl:pt-0 xl:gap-8 gap-4 p-4 max-w-7xl m-auto">
        {loading ? <Skeleton /> : renderCert }
      </div>
    </>
  );
};

export default Certificates;
