import cl from './FeedbackItem.module.css';
import textcl from '../../../styles/text-hue.module.css';

import ratingToStar from "../../../utils/ratingToStars";

const FeedbackItem = ({ props }) => {
    return (
        <div className={cl.Wrapper}>
            <p className={cl.Text}>{props.text}</p>
            <div className={[cl.Detail, textcl.Bright].join(' ')}>
                <p>{ratingToStar(props.rating)}</p>
                <p>{props.author}</p>
            </div>                                                    
        </div>
    );
}
 
export default FeedbackItem;