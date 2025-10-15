import cl from './ImageReference.module.css'

const ImageReference = ({imgSrc}) => {
    return ( 
        <div
            className={cl.Wrapper}
            style={{backgroundImage: `url(${imgSrc})`}}
        >
        </div>
    );
}
 
export default ImageReference;


