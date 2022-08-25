import PropTypes from 'prop-types';
import Day from '../Day';
import style from './style.module.css';

const Forecast = ({ props }) => {
  const { location, forecast, unit } = props;

  return (
    <div className={style.info}>
      <div className={style.country}>
        <h1>{location.name}</h1>
        <small>{location.country}</small>
      </div>
      <div className={style.forecast}>
        {forecast.forecastday.map((day) => <Day key={day.date_epoch} props={{ day, unit }} />)}
      </div>
    </div>
  );
};

Forecast.propTypes = {
  props: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object),
  forecast: PropTypes.instanceOf(Object),
  unit: PropTypes.instanceOf(Object),
};

Forecast.defaultProps = {
  props: {},
  location: {},
  forecast: {},
  unit: {},
};

export default Forecast;
