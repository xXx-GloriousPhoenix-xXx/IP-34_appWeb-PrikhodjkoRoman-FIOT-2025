import cl from './Goal.module.css';

const Goal = () => {
    const links = [
        { text: "Посилання на репозиторій WEB-застосунку", href: "" },
        { text: "Посилання на живу сторінку WEB-застосунку", href: "" },
        { text: "Посилання на репозиторій звітного HTML-документу", href: "" },
        { text: "Посилання на живу сторінку звітного HTML-документу", href: "" }
    ]
    return (
        <div className={cl.Wrapper}>
            <h2>
                Практична робота №1
            </h2>
            <p>
                <strong>Тема:</strong> ТЕГИ ТА АТРИБУТИ HTML-ДОКУМЕНТА. СТРУКТУРНА РОЗМІТКА. GIT.GITHUB. РОБОТА З РЕПОЗИТОРІЯМИ. ОПИС ЛОГІКИ ВЛАСНОГО WEB-ЗАСТОСУНКУ.
            </p>
            <p>
                <strong>Мета:</strong> Навчитись створювати структуру HTML-документа, використовувати основні теги та атрибути, а також освоїти роботу з системою контролю версій Git та платформою GitHub для управління репозиторіями.
            </p>
            <ul>
                {
                    links.map((link, index) => {
                        return (
                            <li key={index}>
                                <a href={link.href}>
                                    {link.text}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
 
export default Goal;