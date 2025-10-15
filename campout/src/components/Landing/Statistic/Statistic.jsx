import cl from './Statistic.module.css';

const Statistic = ({ props }) => {
    return (
        <div className={cl.Wrapper}>
            <h2>{props.number}</h2>
            <p>{props.parameter}</p>
        </div>
    );
}
 
export default Statistic;