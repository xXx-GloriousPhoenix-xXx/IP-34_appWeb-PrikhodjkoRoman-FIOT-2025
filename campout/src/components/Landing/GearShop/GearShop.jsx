import cl from "./GearShop.module.css";

import SectionHeader from "../SectionHeader/SectionHeader";
import GearList from "../GearList/GearList";

const GearShop = ({gearProps}) => {
    return (
        <section className={cl.Wrapper}>
            <SectionHeader
                headerText="What gear we recommend for your adventure"
                paragraphText="For those who love the outdoors and eco-friendly adventures"
                textHueClass="Dark"
            />
            <GearList propList={gearProps}/>
        </section>
    );
}
 
export default GearShop;