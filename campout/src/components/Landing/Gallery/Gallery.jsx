import cl from "./Gallery.module.css";

import SectionHeader from "../SectionHeader/SectionHeader";
import ImageReference from "../../UI/Image/ImageReference/ImageReference";

const Gallery = () => {
    return (
        <section className={cl.Wrapper}>
            <SectionHeader
                headerText="Our Camping Adventures"
                paragraphText="who are in extreme love with nature and outdoor activities"
                textHueClass="Dark"
            />
            <div className={cl.Grid}>
                <div className={cl.TopLeft}>
                    <ImageReference imgSrc="img/gallery/choosing-place.webp"/>
                </div>
                <div className={cl.BottomLeft}>
                    <ImageReference imgSrc="img/gallery/tent-putting.webp"/>
                </div>
                <div className={cl.TopRight}>
                    <ImageReference imgSrc="img/gallery/campfire-making.jpg"/>
                </div>
                <div className={cl.BottomMiddle}>
                    <ImageReference imgSrc="img/gallery/camping-stove-cooking.jpg"/>
                </div>
                <div className={cl.BottomRight}>
                    <ImageReference imgSrc="img/gallery/camp-relaxing.webp"/>
                </div>
            </div>
        </section>
    );
}
 
export default Gallery;