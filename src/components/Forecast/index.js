import { useSelector } from 'react-redux';
import Day from '../Day';
import style from './style.module.css';

const Forecast = () => {
  const { forecast } = useSelector((state) => state.weather.location);

  return (
    <div className={style.info}>
      <div className={style.country}>
        <h1>LAGOS</h1>
        <small>PORTUGAL</small>
      </div>
      <div className={style.forecast}>
        {forecast.forecastday.map((day) => <Day key={day.date_epoch} day={day} />)}
      </div>
    </div>
  );
};

export default Forecast;
