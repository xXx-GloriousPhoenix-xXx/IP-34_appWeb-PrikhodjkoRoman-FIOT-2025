import cl from './Image.module.css';

const Image = () => {
    return (
        <div className={cl.Wrapper}>
            <h2>Зображення</h2>
            <div className={cl.ImageWrapper}>
                <div className={cl.CodeImageWrapper}>
                    <img
                        src={`${process.env.PUBLIC_URL}/img/report/image/component-code.png`}
                        alt="image-component-code"
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/img/report/image/usage-code.png`}
                        alt="image-usage-code"
                    />
                </div>
                <img
                    src={`${process.env.PUBLIC_URL}/img/report/image/image.png`}
                    alt="image-image"
                />
            </div>
        </div>
    );
}
 
export default Image;