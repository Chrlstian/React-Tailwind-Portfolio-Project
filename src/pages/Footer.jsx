
export default function Footer(props){
    const currentYear = new Date().getFullYear();
    return(
        <footer className="p-8 bg-secondary md:mt-8">
            <div className='flex gap-2 justify-center pb-4'>
                <a href='https://www.facebook.com/profile.php?id=100010290396834' target='_blank' rel="noopener noreferrer"><img  className="w-7 h-7" src={require('../assets/images/facebook.png')} alt="Facebook"/></a>
                <a href='https://twitter.com/Christi13016141' target='_blank' rel="noopener noreferrer"><img  className="w-7 h-7" src={require('../assets/images/twitter.webp')} alt="Twitter"/></a>
                <a href='mailto:cbbc0000@gmail.com' target='_blank' rel="noopener noreferrer"><img  className="w-7 h-7" src={require('../assets/images/gmail.png')} alt="Gmail"/></a>
                <a href='https://github.com/Chrlstian' target='_blank' rel="noopener noreferrer"><img  className="w-7 h-7 rounded" src={require('../assets/images/github logo.webp')} alt="Github"/></a>
                <a href='https://www.linkedin.com/in/christian-benson-capon-043602243/' target='_blank' rel="noopener noreferrer"><img  className="w-7 h-7" src={require('../assets/images/linked in logo.webp')} alt="LinkIn"/></a>
            </div>
            <div className="text-center">
                <p className={`text-sm ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>&copy; {currentYear} Christian Benson. All rights reserved.</p>
            </div>
        </footer>
    );
}