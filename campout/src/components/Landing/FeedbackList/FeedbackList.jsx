import cl from './FeedbackList.module.css';
import textcl from '../../../styles/text-hue.module.css';

import FeedbackItem from '../FeedbackItem/FeedbackItem';

const FeedbackList = ({ propList, textHueClass }) => {
    const classCollector = [cl.Wrapper, textHueClass ? textcl[textHueClass] : ''].join(' ');
    return (
        <div className={classCollector}>
            {
                propList.map((item, index) =>
                    <FeedbackItem
                        key={index}
                        props={item}
                    />
                )
            }
        </div>
    );
}
 
export default FeedbackList;