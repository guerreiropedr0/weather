import PropTypes from 'prop-types';
import style from './style.module.css';
import { toTwelveHour, formatDate } from '../../helper';

const Day = ({ props }) => {
  const { forecastDay, unit } = props;
  const times = [0, 6, 12, 18, 23];

  return (
    <div className={style.day}>
      <h4>{formatDate(forecastDay.date)}</h4>
      <ul className={style.weather}>
        {times.map((time) => (
          <li key={time} className={style.card}>
            <p>
              {unit.isAmerican
                ? forecastDay.hour[time].temp_f
                : forecastDay.hour[time].temp_c}
              º
              {' '}
              {unit.scale}
            </p>
            <img
              src={forecastDay.hour[time].condition.icon}
              alt={forecastDay.hour[time].condition.text}
              title={forecastDay.hour[time].condition.text}
            />
            <p className={style.time}>{time !== 23 ? toTwelveHour(forecastDay.hour[time].time.slice(11)) : '12 AM'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Day.propTypes = {
  props: PropTypes.instanceOf(Object),
  forecastDay: PropTypes.instanceOf(Object),
  unit: PropTypes.instanceOf(Object),
};

Day.defaultProps = {
  props: {},
  forecastDay: {},
  unit: {},
};

export default Day;
