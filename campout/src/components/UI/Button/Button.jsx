import cl from './Button.module.css';
import textcl from '../../../styles/text-hue.module.css';

const Button = ({ text, textHueClass, onClick }) => {
    const classCollector = [cl.Button, textcl[textHueClass]].join(" ");
    return ( 
        <button 
            className={classCollector}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
 
export default Button;