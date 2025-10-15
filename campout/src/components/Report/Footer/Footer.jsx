import cl from './Footer.module.css';
import textcl from '../../../styles/text-hue.module.css';

const Footer = () => {
    return (
        <footer className={cl.Wrapper}>
            <p className={textcl.Bright}>© 2025 GloriousPhoenixEntertainment. All rights reserved.</p>
        </footer>
    );
}
 
export default Footer;