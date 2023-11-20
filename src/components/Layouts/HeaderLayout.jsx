
import { Outlet} from 'react-router-dom';

import Header from '../Header';
import Footer from '../../pages/Footer';

export default function HeaderLayout(props){

    return(
        <>
            <Header toggleMode={props.toggleMode} lightMode={props.lightMode}/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
