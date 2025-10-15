import cl from './Header.module.css'

import ImageReference from '../../UI/Image/ImageReference/ImageReference';

const Header = () => {
    return (
        <header className={cl.Wrapper}>
            <div className={cl.Intro}>
                <div>
                    <h2>Звіти з практичних робіт</h2>
                    <h2>З дисципліни «WEB-орієнтовані технології. Frontend розробки»</h2>
                </div>
                <div>
                    <p>Виконавець: Студент групи ІП-34 Приходько Роман Юрійович</p>
                </div>
            </div>
            <div className={cl.PfpWrapper}>
                <ImageReference imgSrc="/img/report/pfp.jpg"/>
            </div>
        </header>
    );
}
 
export default Header;