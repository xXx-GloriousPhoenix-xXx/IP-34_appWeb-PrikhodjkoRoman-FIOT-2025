import cl from "./Structure.module.css";

const Structure = () => {
    return (
        <div className={cl.Wrapper}>
            <h2>Структура головної сторінки</h2>
            <ul>
                <li>Заголовок з лого та вкладинками</li>
                <li>Hero-баннер, що акцентує увагу на темі застосунку</li>
                <li>Розповідь про організацію</li>
                <li>Магазин амуніції</li>
                <li>Галерея</li>
                <li>Відгуки</li>
                <li>Блог</li>
                <li>Підвалля</li>
            </ul>
        </div>
    );
}
 
export default Structure;