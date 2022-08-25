import Day from '../Day';
import style from './style.module.css';

const Forecast = () => (
  <div className={style.info}>
    <div className={style.country}>
      <h1>LAGOS</h1>
      <small>PORTUGAL</small>
    </div>
    <div className={style.forecast}>
      <Day />
    </div>
  </div>
);

export default Forecast;
