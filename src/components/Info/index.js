import { useState } from 'react';
import Country from '../Country';
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
        ) : <div><h1>TEMPLATE TEXT</h1></div>}
      </div>
    </div>
  );
};

export default Info;
