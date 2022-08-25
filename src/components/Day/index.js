import PropTypes from 'prop-types';
import style from './style.module.css';
import { toTwelveHour, formatDate } from '../../helper';

const Day = ({ day }) => {
  const times = [0, 6, 12, 18, 23];

  return (
    <div className={style.day}>
      <h2>{formatDate(day.date)}</h2>
      <div className={style.weather}>
        {times.map((time) => (
          <div key={time} className={style.card}>
            <h3>{day.hour[time].temp_c}</h3>
            <img src={day.hour[time].condition.icon} alt={day.hour[time].condition.text} />
            <h3>{time !== 23 ? toTwelveHour(day.hour[time].time.slice(11)) : '12 AM'}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

Day.propTypes = {
  day: PropTypes.instanceOf(Object).isRequired,
};

export default Day;
