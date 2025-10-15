import cl from "./TagItem.module.css";

const TagItem = ({ props }) => {
    return (
        <div className={cl.Wrapper}>
            <a 
                href={props.link}
                className={cl.Tag}
            >
                {props.text}
            </a>
        </div>
    );
}
 
export default TagItem;