import PropTypes from 'prop-types';
import style from './style.module.css';
import { toTwelveHour, formatDate } from '../../helper';

const Day = ({ props }) => {
  const { day, unit } = props;
  const times = [0, 6, 12, 18, 23];

  return (
    <div className={style.day}>
      <h2>{formatDate(day.date)}</h2>
      <div className={style.weather}>
        {times.map((time) => (
          <div key={time} className={style.card}>
            <h3>
              {unit.isAmerican
                ? day.hour[time].temp_f
                : day.hour[time].temp_c}
              º
              {' '}
              {unit.scale}
            </h3>
            <img src={day.hour[time].condition.icon} alt={day.hour[time].condition.text} />
            <h3>{time !== 23 ? toTwelveHour(day.hour[time].time.slice(11)) : '12 AM'}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

Day.propTypes = {
  props: PropTypes.instanceOf(Object),
  day: PropTypes.instanceOf(Object),
  unit: PropTypes.instanceOf(Object),
};

Day.defaultProps = {
  props: {},
  day: {},
  unit: {},
};

export default Day;
