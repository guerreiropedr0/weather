import { useState } from 'react';
import { useSelector } from 'react-redux';
import Country from '../Country';
import Forecast from '../Forecast';
import Weather from '../Weather';
import style from './style.module.css';

const Info = () => {
  const { location, current, forecast } = useSelector((state) => state.weather.location);

  const [isForecast, setForecast] = useState(false);

  const handleClick = (e) => {
    if (e.target.innerText === 'CURRENT') {
      setForecast(false);
    } else setForecast(true);
  };

  return (
    <div className={style.card}>
      <ul className={style.nav}>
        <button
          onClick={(e) => handleClick(e)}
          type="button"
        >
          CURRENT
        </button>
        <button
          onClick={(e) => handleClick(e)}
          type="button"
        >
          FORECAST
        </button>
      </ul>
      <div className={style.info}>
        {!isForecast ? (
          <>
            <Country props={{ location, current }} />
            <Weather current={current} />
          </>
        ) : <Forecast props={{ location, forecast }} />}
      </div>
    </div>
  );
};

export default Info;
