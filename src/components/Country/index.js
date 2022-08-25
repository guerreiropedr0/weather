import { useSelector } from 'react-redux';
import style from './style.module.css';
import { toTwelveHour, formatDate } from '../../helper';

const Country = () => {
  const weather = useSelector((state) => state.weather.location);

  const { location, current } = weather;

  return (
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
          title={current && current.condition.text}
        />
      </div>
      <h2 className={style.time}>{location && toTwelveHour(location.localtime.slice(-5))}</h2>
      <h3 className={style.day}>{location && formatDate(location.localtime.slice(0, 11))}</h3>
    </div>
  );
};

export default Country;
