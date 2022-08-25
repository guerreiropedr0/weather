import PropTypes from 'prop-types';
import style from './style.module.css';

const Day = ({ day }) => {
  const times = [0, 6, 12, 18, 23];

  const toTwelveHour = (hour) => {
    // The hour will be a string with this format "hour:minutes"
    const betterHour = Number(hour);

    switch (true) {
      case (betterHour === 0):
      case (betterHour === 24):
        return '12 AM';

      case (betterHour < 12):
        return `${betterHour} AM`;

      case (betterHour === 12):
        return '12 PM';

      case (betterHour >= 12):
        return `${betterHour - 12} PM`;

      default:
        return hour;
    }
  };

  return (
    <div className={style.day}>
      <h2>{day.date}</h2>
      <div className={style.weather}>
        {times.map((time) => (
          <div key={time} className={style.card}>
            <h3>{day.hour[time].temp_c}</h3>
            <img src={day.hour[time].condition.icon} alt={day.hour[time].condition.text} />
            <h3>{time !== 23 ? toTwelveHour(day.hour[time].time.slice(11, 13)) : '12 AM'}</h3>
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
