import cl from "./Landing.module.css";

import Header from "../../components/Landing/Header/Header";
import Main from "../../components/Landing/Main/Main";
import Footer from "../../components/Landing/Footer/Footer";

const Landing = () => {
    const navbarProps = [
        { text: 'Campsites', ref: '' },
        { text: 'Shop', ref: '' },
        { text: 'Blog', ref: '' },
        { text: 'About Us', ref: '' },
        { text: 'Contact', ref: '' }
    ];
    const footerText = "Copyright © 2025 CampOut.com";
    return (
        <div className={cl.Wrapper}>
            <Header navbarProps={navbarProps}/>
            <Main/>
            <Footer text={footerText}/>
        </div>
    );
}
 
export default Landing;