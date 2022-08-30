import PropTypes from 'prop-types';
import style from './style.module.css';
import wind from '../../assets/weather-icons/wind.png';
import compass from '../../assets/weather-icons/compass.png';
import precipitation from '../../assets/weather-icons/precipitation.png';
import humidity from '../../assets/weather-icons/humidity.png';



const Weather = ({ props }) => {
  const { current, unit } = props;

  return (
    <div className={style.weather}>
    <h4>Weather Today</h4>
    <ul className={style['weather-info']}>
      <li className={style.item}>
        <img
          src={wind}
          alt="Wind icon"
          title="Wind Speed"
        />
        {' '}
        {unit.isAmerican
          ? current && current.wind_mph
          : current && current.wind_kph}
        {' '}
        {unit.speed}
      </li>
      <li className={style.item}>
        <img
          src={compass}
          alt="Compass icon"
          title="Wind direction" />
        {' '}
        {current && current.wind_dir}
      </li>
      <li className={style.item}>
        <img
          src={precipitation}
          alt="Precipitation icon"
          title="Precipitation"
        />
        {' '}
        {unit.isAmerican
          ? current && current.precip_in
          : current && current.precip_mm}
        {' '}
        {unit.measure}
      </li>
      <li className={style.item}>
        <img
          src={humidity}
          alt="Humidity icon"
          title="Humidity"
        />
        {' '}
        {current && current.humidity}
        %
      </li>
    </ul>
  </div>
  );
};

Weather.propTypes = {
  props: PropTypes.instanceOf(Object),
  current: PropTypes.instanceOf(Object),
  unit: PropTypes.instanceOf(Object),
};

Weather.defaultProps = {
  props: {},
  current: {},
  unit: {},
};

export default Weather;
