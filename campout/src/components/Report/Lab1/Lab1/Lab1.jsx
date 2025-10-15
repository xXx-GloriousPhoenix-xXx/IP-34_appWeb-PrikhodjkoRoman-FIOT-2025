import Goal from "../Goal/Goal";
import BusinessLogic from "../BusinessLogic/BusinessLogic.jsx";
import Structure from "../Structure/Structure";
import Table from "../Table/Table";
import Image from "../Image/Image";
import List from "../List/List";
import Conclusion from "../Conclusion/Conclusion";

const Lab1 = ({ currentSectionId }) => {
    const sectionComponents = {
        0: Goal,
        1: BusinessLogic,
        2: Structure,
        3: Table,
        4: Image,
        5: List,
        6: Conclusion
    };

    const SectionComponent = sectionComponents[currentSectionId];

    return (
        <SectionComponent />
    );
}
 
export default Lab1;