import { useState, useEffect } from "react";

import cl from './Main.module.css';

import fetchContent from '../../../utils/fetchContent';

import LabList from '../LabList/LabList';
import SectionChoiceList from '../SectionChoiceLIst/SectionChoiceList';
import SectionLoader from '../SectionLoader/SectionLoader';

const Main = () => {
    const [lab, setLab] = useState(1);
    const [section, setSection] = useState(0);
    const [sectionTitles, setSectionTitles] = useState([]);
    useEffect(() => {
        fetchContent(lab)
        .then(data => {
            setSectionTitles(data);
            setSection(0);
        });
        console.log(lab);
    }, [lab]);

    return (
        <main className={cl.Wrapper}>
            <LabList
                currentLab={lab}
                onLabChange={setLab}
            />
            <div className={cl.ViewWrapper}>
                <aside className={cl.Content}>
                    <SectionChoiceList
                        choiceList={sectionTitles}
                        currentChoice={section}
                        onChangeChoice={setSection}
                    />
                </aside>
                <section className={cl.Lab}> 
                    <SectionLoader
                        currentLab={lab}
                        currentSectionId={section}
                    />
                </section>
            </div>
        </main>
    );
}
 
export default Main;