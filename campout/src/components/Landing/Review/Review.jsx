import cl from './Review.module.css';

import FeedbackList from '../FeedbackList/FeedbackList';
import StatisticList from '../StatisticList/StatisticList';
import SectionHeader from '../SectionHeader/SectionHeader';

const Review = ({ feedbackProps, statisticProps }) => {
    return (
        <section className={cl.Wrapper}>
            <SectionHeader
                headerText="What campers say about us"
                paragraphText="who are in extreme love with outdoor adventures"
                textHueClass="Bright"
            />
            <FeedbackList
                    propList={feedbackProps}
                    textHueClass="Dark"
                />
                <StatisticList
                    propList={statisticProps}
                    textHueClass="Bright"
                />
        </section>
    )
}
 
export default Review;