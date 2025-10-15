import cl from './SectionHeader.module.css';
import textcl from '../../../styles/text-hue.module.css';

const SectionHeader = ({ headerText, paragraphText, textHueClass }) => {
    const classCollector = [cl.Wrapper, textHueClass ? textcl[textHueClass] : ''].join(' ');
    return (
        <div className={classCollector}>
            <h1>{headerText}</h1>
            <p>{paragraphText}</p>
        </div>
    );
}
 
export default SectionHeader;