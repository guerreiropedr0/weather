import PropTypes from 'prop-types';
import style from './style.module.css';

const Weather = ({ props }) => {
  const { current, unit } = props;

  console.log(unit);

  return (
    <div className={style.meteorology}>
      <h2 className={style.temp}>
        {current && current.temp_c}
        º
        {' '}
        {unit.scale}
      </h2>
      <ul className={style['weather-info']}>
        <li>
          <i className="bi bi-wind" title="Wind" />
          {' '}
          {current && current.wind_kph}
          {' '}
          {unit.speed}
        </li>
        <li>
          <i className="bi bi-compass" title="Wind direction" />
          {' '}
          {current && current.wind_dir}
        </li>
        <li>
          <i className="bi bi-droplet" title="Precipition" />
          {' '}
          {current && current.precip_mm}
          {' '}
          {unit.measure}
        </li>
        <li>
          <i className="bi bi-moisture" title="Humidity" />
          {' '}
          {current && current.humidity}
          %
        </li>
      </ul>
    </div>
  );
};

Weather.propTypes = {
  current: PropTypes.instanceOf(Object),
};

Weather.defaultProps = {
  current: {},
};

export default Weather;
