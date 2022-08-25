import style from './style.module.css';

const Forecast = () => (
  <div className={style.info}>
    <div className={style.country}>
      <h1>LAGOS</h1>
      <small>PORTUGAL</small>
    </div>
    <div className={style.forecast}>
      <div className={style.holder}>
        <h2>DAY 1</h2>
        <div className={style.weather}>
          <div className={style.card}>
            <h3>20ºC</h3>
            <img src="https://cdn.weatherapi.com/weather/64x64/night/353.png" alt="Patchy" />
            <h3>12 AM</h3>
          </div>
          <div className={style.card}>
            <h3>20ºC</h3>
            <img src="https://cdn.weatherapi.com/weather/64x64/night/353.png" alt="Patchy" />
            <h3>6 AM</h3>
          </div>
          <div className={style.card}>
            <h3>20ºC</h3>
            <img src="https://cdn.weatherapi.com/weather/64x64/night/353.png" alt="Patchy" />
            <h3>NOON</h3>
          </div>
          <div className={style.card}>
            <h3>20ºC</h3>
            <img src="https://cdn.weatherapi.com/weather/64x64/night/353.png" alt="Patchy" />
            <h3>6 PM</h3>
          </div>
          <div className={style.card}>
            <h3>20ºC</h3>
            <img src="https://cdn.weatherapi.com/weather/64x64/night/353.png" alt="Patchy" />
            <h3>12 AM</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Forecast;
