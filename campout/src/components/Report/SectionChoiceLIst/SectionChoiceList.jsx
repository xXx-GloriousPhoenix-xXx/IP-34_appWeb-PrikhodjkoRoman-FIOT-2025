import cl from './SectionChoiceList.module.css';

import SectionChoice from '../SectionChoice/SectionChoice';

const SectionChoiceList = ({ choiceList, currentChoice, onChangeChoice }) => {
    return (  
        <div className={cl.Wrapper}>
            {
                choiceList.map((choice, index) => 
                    <SectionChoice
                        key={index}
                        text={choice}
                        isActive={currentChoice === index}
                        onClick={() => onChangeChoice(index)}
                    />
                )
            }
        </div>
    );
}
 
export default SectionChoiceList;