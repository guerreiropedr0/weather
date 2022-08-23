import style from './style.module.css';

const Weather = () => (
  <div className={style.card}>
    <ul className={style.nav}>
      <li>CURRENT</li>
      <li>FORECAST</li>
    </ul>
    <div className={style.info}>
      <div className={style.country}>
        <div className={style.holder}>
          <div className={style['country-info']}>
            <h1>Lagos</h1>
            <small>Portugal</small>
          </div>
          <img className={style.condition} src="https://cdn.weatherapi.com/weather/64x64/day/116.png" alt="Partly Cloudy" />
        </div>
        <h2 className={style.time}>16:44</h2>
        <h3 className={style.day}>Friday, January 26, 2018</h3>
      </div>

      <div className={style.meteorology}>
        <h2 className={style.temp}>22º C</h2>
        <ul className={style['weather-info']}>
          <li>Wind: 15.1 kph</li>
          <li>Direction: SSW</li>
          <li>Precip: 0.1</li>
          <li>Humidity: 65%</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Weather;
