import cl from "./GearItem.module.css";

import ImageContainer from "../../UI/Image/ImageContainer/ImageContainer";

const GearItem = ({ props }) => {
    return (
        <div className={cl.Wrapper}>
            <div className={cl.ImageWrapper}>
                <ImageContainer>
                    <img
                        className={cl.Image}
                        src={props.src}
                        alt={props.alt}
                    />
                </ImageContainer>
            </div>
            <h3>{props.alt}</h3>
            <p className={cl.Price}>{props.price}</p>
            <p>{props.description}</p>
        </div>
    );
}
 
export default GearItem;