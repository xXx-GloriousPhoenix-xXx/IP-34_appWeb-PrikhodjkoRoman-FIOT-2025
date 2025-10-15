import cl from './StatisticList.module.css';
import textcl from '../../../styles/text-hue.module.css';

import Statistic from '../Statistic/Statistic';

const StatisticList = ({ propList, textHueClass }) => {
    const classCollector = [cl.Wrapper, textHueClass ? textcl[textHueClass] : ''].join(' ');
    return (
        <div className={classCollector}>
            {
                propList.map((item, index) =>
                    <Statistic
                        key={index}
                        props={item}
                    />
                )
            }
        </div>
    );
}
 
export default StatisticList;