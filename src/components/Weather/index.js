import PropTypes from 'prop-types';
import style from './style.module.css';

const Weather = ({ props }) => {
  const { current, unit } = props;

  return (
    <div className={style.meteorology}>
      <h2 className={style.temp}>
        {unit.isAmerican
          ? current && current.temp_f
          : current && current.temp_c}
        º
        {' '}
        {unit.scale}
      </h2>
      <ul className={style['weather-info']}>
        <li>
          <i className="bi bi-wind" title="Wind" />
          {' '}
          {unit.isAmerican
            ? current && current.wind_mph
            : current && current.wind_kph}
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
          {unit.isAmerican
            ? current && current.precip_in
            : current && current.precip_mm}
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
