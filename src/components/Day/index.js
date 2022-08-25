import style from './style.module.css';

const Day = () => (
  <div className={style.day}>
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
);

export default Day;
