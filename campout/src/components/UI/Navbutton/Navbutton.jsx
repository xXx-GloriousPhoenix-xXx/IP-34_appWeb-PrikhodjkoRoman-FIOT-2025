import cl from './Navbutton.module.css'

const Navbutton = ({props}) => {
    return (
        <div className={cl.Wrapper}>
            <a 
                className={cl.Ref}
                href={props.ref}
            >{props.text}</a>
        </div>
    );
}
 
export default Navbutton;