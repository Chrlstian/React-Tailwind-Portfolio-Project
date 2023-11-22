
import { Outlet} from 'react-router-dom';

import Header from '../Header';
import Footer from '../../pages/Footer';

export default function HeaderLayout(props){

    return(
        <>
            <div className='text-gray-200 text-center bg-red-700 p-2'>The website is under development. You can still browse the site. Thank you</div>
            <Header toggleMode={props.toggleMode} lightMode={props.lightMode}/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
