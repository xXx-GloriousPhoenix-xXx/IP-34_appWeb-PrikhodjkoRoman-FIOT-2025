import cl from './Navbar.module.css';

import Navbutton from '../Navbutton/Navbutton';

const Navbar = ({navbarButtonPropList}) => {
    return (
        <div className={cl.Wrapper}>
            { navbarButtonPropList.map((buttonProp, index) => 
                <Navbutton key={index} props={buttonProp} />
            )}
        </div>
    );
}
 
export default Navbar;