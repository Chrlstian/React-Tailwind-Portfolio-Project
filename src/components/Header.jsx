import { useState } from 'react';
import { Link } from 'react-router-dom';

import imgDarkMode from '../assets/images/light mode.webp';
import imgLightMode from '../assets/images/dark mode.webp';

export default function Header(props){

    // state to show and hide the humburger icon in the header
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return(
        <>
            <header className={props.lightMode ? 'bg-white' : 'bg-black'}>
                <div className='headerContainer'>
                    <h2 className={`font-logo text-2xl lg:text-3xl xl:text-4xl text-primary-900 font-medium ${props.lightMode ? 'text-primary' : 'text-white'}`}><Link to="/"><span className='text-pink-700'>C</span>hristian <span className='text-btnB'>B</span>enson</Link></h2>
                    <div className='flex items-center gap-5'>
                        <nav className={`text-secondary nav-hidden-mobile nav-md-block ${props.lightMode ? 'md:text-primary' : 'md:text-gray-200'}`}>
                            <Link className="hover:text-gray-400 text-xl" to='blogs'>Blogs</Link>
                            <Link className="hover:text-gray-400 text-xl" to='works-experience'>Work Experience</Link>
                            <Link className="hover:text-gray-400 text-xl" to='certificates'>Certificates</Link>
                        </nav>
                        <div className={`cursor-pointer ${props.lightMode ? 'border-black' : 'border-white'}`}>
                            <img className='w-7 h-7 rounded-full hover:border' onClick={props.toggleMode} src={props.lightMode ? imgDarkMode : imgLightMode} alt='dark and light mode sun interface' />
                        </div>
                    </div>
                    <div className='cursor-pointer md:hidden' onClick={toggleMenu}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={props.lightMode ? 'black' : 'white'}
                        >
                        {isOpen ? (
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
            
                            />
                        )}
                        </svg>
                    </div>
                </div>
                {isOpen ? (
                    <nav className={`nav ${props.lightMode ? 'text-txt' : 'text-white'}`}>
                        <Link className="hover:text-gray-700 text-xl" to='blogs'>Blogs</Link>
                        <Link className="hover:text-gray-700 text-xl" to='works-experience'>Work experience</Link>
                        <Link className="hover:text-gray-700 text-xl" to='certificates'>Certificates</Link>
                    </nav>) : null }
            
            </header>
        </>  
              
    );
}