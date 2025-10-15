import cl from './List.module.css';

const List = () => {
    return (
        <div className={cl.Wrapper}>
            <h2>Список</h2>
            <div className={cl.ImageWrapper}>
                <img src="/img/report/link/code.png" alt="link-code" />
                <img src="/img/report/link/image.png" alt="link-image" />
            </div>
        </div>
    );
}
 
export default List;