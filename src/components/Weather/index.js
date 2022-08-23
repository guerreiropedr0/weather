import { useSelector } from 'react-redux';
import style from './style.module.css';

const Weather = () => {
  const weather = useSelector((state) => state.weather.location);

  const { location, current } = weather;

  console.log(weather);

  return (
    <div className={style.card}>
      <ul className={style.nav}>
        <li>CURRENT</li>
        <li>FORECAST</li>
      </ul>
      <div className={style.info}>
        <div className={style.country}>
          <div className={style.holder}>
            <div className={style['country-info']}>
              <h1>{location && location.name}</h1>
              <small>{location && location.country}</small>
            </div>
            <img
              className={style.condition}
              src={current && current.condition.icon}
              alt={current && current.condition.text}
            />
          </div>
          <h2 className={style.time}>{location && location.localtime.slice(-5)}</h2>
          <h3 className={style.day}>{location && location.localtime.slice(0, 11)}</h3>
        </div>

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
      </div>
    </div>
  );
};

export default Weather;
