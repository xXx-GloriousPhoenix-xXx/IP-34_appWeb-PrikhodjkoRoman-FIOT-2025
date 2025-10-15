import cl from './ImageContainer.module.css';

const ImageContainer = ({children}) => {
    return (
        <div className={cl.Wrapper}>
            {children}
        </div>
    );
}
 
export default ImageContainer;