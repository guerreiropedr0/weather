import { useSelector } from 'react-redux';
import Day from '../Day';
import style from './style.module.css';

const Forecast = () => {
  const { location, forecast } = useSelector((state) => state.weather.location);
  console.log(location);

  return (
    <div className={style.info}>
      <div className={style.country}>
        <h1>{location.name}</h1>
        <small>{location.country}</small>
      </div>
      <div className={style.forecast}>
        {forecast.forecastday.map((day) => <Day key={day.date_epoch} day={day} />)}
      </div>
    </div>
  );
};

export default Forecast;
