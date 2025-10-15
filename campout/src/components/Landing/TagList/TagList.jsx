import cl from './TagList.module.css';

import TagItem from '../TagItem/TagItem';

const TagList = ({ propList }) => {
    return (
        <div className={cl.Wrapper}>
            {
                propList.map((item, index) => <TagItem key={index} props={item} />)
            }
        </div>
    );
}
 
export default TagList;