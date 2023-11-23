
import { Link } from 'react-router-dom';
import DownloadButton from '../../components/DownloadResume';

export default function Home(props) {

  return (
    <div className={`heroContainer-md ${props.lightMode ? 'bg-white' : 'bg-black'}`}>
      <div className='hero-info sm:gap-10 lg:pl-8 xl:p-20 xl:max-w'>
        <h1 className={`font-body text-4xl text-center sm:text-5xl lg:text-start lg:text-6xl ${props.lightMode ? 'text-black md:text-secondary' : 'text-gray-200' }`}>Helping people make the world a better place through quality <span className='text-pink-700'>web solutions.</span></h1>
        <p className='text-center text-txt md:text-lg'>"Hi, I'm Christian, an entry level software developer excited to build amazing things for you."</p>
        <div className='flex flex-col gap-3 sm:flex-row sm:justify-between md:flex-col lg:flex-row hero-btn-lg'>
          <Link to="projects" className='hero-btn-0 sm:w-full lg:w-full lg:text-lg text-center'><button>View Projects</button></Link>
          <DownloadButton />
        </div>
      </div>
      <div className="hidden hero-md-img">
        <img
          className="lg:w-full lg:h-65 xl:pr-20"
          src={require('../../assets/images/Hero-right-profile.webp')}
          alt='Christian Benson B. Capon'
          loading='lazy' />
      </div>
    </div>
  );
}
