import cl from './BlogItem.module.css';

import TagList from '../TagList/TagList';

const BlogItem = ({ props }) => {
    return (
        <div className={cl.Wrapper}>
            <div className={cl.ImageWrapper}>
                <img
                    className={cl.Image}
                    src={props.src}
                    alt={props.alt}
                />
            </div>
            <TagList propList={props.tags}/>
            <div className={cl.TextWrapper}>
                <h2>{props.text.header}</h2>
                <p>{props.text.paragraph}</p>
            </div>
            <div className={cl.DateWrapper}>
                <p>{props.date}</p>
            </div>    
        </div>
    );
}
 
export default BlogItem;