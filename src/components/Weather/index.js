import { useSelector } from 'react-redux';
import style from './style.module.css';

const Weather = () => {
  const weather = useSelector((state) => state.weather.location);
  const { current } = weather;
  return (
    <div className={style.meteorology}>
      <h2 className={style.temp}>
        {current && current.temp_c}
        º C
      </h2>
      <ul className={style['weather-info']}>
        <li>
          Wind:
          {' '}
          {current && current.wind_kph}
          {' '}
          kph
        </li>
        <li>
          Direction:
          {' '}
          {current && current.wind_dir}
        </li>
        <li>
          Precip:
          {' '}
          {current && current.precip_mm}
          {' '}
          mm
        </li>
        <li>
          Humidity:
          {' '}
          {current && current.humidity}
          %
        </li>
      </ul>
    </div>
  );
};

export default Weather;
