import cl from './Table.module.css';

const Table = () => {
    return (
        <div className={cl.Wrapper}>
            <h2>Таблиця</h2>
            <div className={cl.ImageWrapper}>
                <img
                    src="/img/report/table/code.png"
                    alt="table-code"
                />
                <img
                    src="/img/report/table/image.png"
                    alt="table-image"
                />
            </div>
        </div>
    );
}
 
export default Table;