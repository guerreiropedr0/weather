import { useState } from 'react';
import Country from '../Country';
import Forecast from '../Forecast';
import Weather from '../Weather';
import style from './style.module.css';

const Info = () => {
  const [forecast, setForecast] = useState(false);

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
        {!forecast ? (
          <>
            <Country />
            <Weather />
          </>
        ) : <Forecast />}
      </div>
    </div>
  );
};

export default Info;
