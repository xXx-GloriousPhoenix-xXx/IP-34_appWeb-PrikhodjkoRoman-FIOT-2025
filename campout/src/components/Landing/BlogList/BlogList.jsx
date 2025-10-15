import cl from './BlogList.module.css';

import BlogItem from '../BlogItem/BlogItem';

const BlogList = ({ propList }) => {
    return (
        <div className={cl.Wrapper}>
            {
                propList.map((item, index) => <BlogItem key={index} props={item} />)
            }
        </div>
    );
}
 
export default BlogList;