import cl from './LabItem.module.css';

const LabItem = ({ onClick, text, isActive }) => {
    const classCollector = [cl.Button, isActive ? cl.Active : ''].join(' ');
    return (
        <button 
            onClick={onClick}
            className={classCollector}
        >
            {text}
        </button>
    );
}
 
export default LabItem;