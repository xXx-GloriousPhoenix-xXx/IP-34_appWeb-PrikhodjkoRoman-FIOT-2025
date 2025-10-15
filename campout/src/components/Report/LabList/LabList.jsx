import cl from './LabList.module.css';

import LabItem from "../LabItem/LabItem";

const LabList = ({ currentLab, onLabChange }) => {
    const labQuantity = 9;
    return (
        <div className={cl.Wrapper}>
            {
                Array.from({ length: labQuantity }, (_, i) => i + 1).map(i => 
                    <LabItem
                        key={i}
                        text={`ПР${i}`}
                        onClick={() => onLabChange(i)}
                        isActive={currentLab === i}
                    />
                )
            }
        </div>
    );
}
 
export default LabList;