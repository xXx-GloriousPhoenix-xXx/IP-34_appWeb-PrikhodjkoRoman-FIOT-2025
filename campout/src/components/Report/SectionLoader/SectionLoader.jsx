// import { useState, useEffect } from "react";

import cl from './SectionLoader.module.css';

import Lab1 from '../Lab1/Lab1/Lab1';

const SectionLoader = ({ currentLab, currentSectionId }) => {
    const LabList = {
        1: Lab1 //,
        // 2: Lab2,
        // 3: Lab3,
        // 4: Lab4,
        // 5: Lab5,
        // 6: Lab6,
        // 7: Lab7,
        // 8: Lab8,
        // 9: Lab9
    }
    
    const LabComponent = LabList[currentLab];    

    if (!LabComponent) {
        return <div className={cl.Wrapper}>Loading...</div>;
    }

    return (
        <div className={cl.Wrapper}>
            <LabComponent currentSectionId={currentSectionId}/>
        </div>
    );

        // const [section, setSection] = useState(null);

    // // useEffect(() => {

    // // }, [currentLab, currentSectionId]);

    // if (!section) {
    //     return <div className={cl.Wrapper}>Loading...</div>;
    // }
}
 
export default SectionLoader;