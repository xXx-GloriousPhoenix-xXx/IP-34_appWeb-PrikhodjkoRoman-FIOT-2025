import cl from "./GearList.module.css";

import GearItem from "../GearItem/GearItem";

const GearList = ({ propList }) => {
    return (
        <div className={cl.Wrapper}>
            {
                propList.map((item, index) => 
                    <GearItem
                        key={index}
                        props={item}
                    />
                )
            }
        </div>        
    );
}
 
export default GearList;