import cl from "./Footer.module.css";

const Footer = ({text}) => {
    return ( 
        <footer className={cl.Wrapper}>
            <span>
                {text}
            </span>
        </footer>
    );
}
 
export default Footer;