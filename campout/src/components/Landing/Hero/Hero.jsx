import cl from './Hero.module.css';
import textcl from '../../../styles/text-hue.module.css';

import Button from '../../UI/Button/Button';
import ImageReference from '../../UI/Image/ImageReference/ImageReference';

const Hero = () => {
    const classCollector = [cl.Wrapper, textcl["Bright"]].join(" ");
    return (
        <section className={classCollector}>
            <ImageReference imgSrc="/img/camping-banner.png"/>
            <div className={cl.LabelWrapper}>
                <span>YOUR JOURNEY STARTS HERE</span>
                <div className={cl.TextWrapper}>
                    <h1>Explore. Camp. Repeat.</h1>
                    <p>Choose from hundreds of camping spots, shop for gear, and plan your next getaway.</p>
                </div>
                <Button
                    text="Explore Now"
                    textHueClass="Bright"
                />
            </div>
        </section>
    );
}
 
export default Hero;