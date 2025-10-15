import cl from './SectionChoice.module.css';

const SectionChoice = ({ text, isActive, onClick }) => {
    const classCollector = [cl.Wrapper, isActive ? cl.Active : ''].join(' ');
    return (
        <div 
            className={classCollector}
            onClick={onClick}

        >
            {text}
        </div>
    );
}
 
export default SectionChoice;