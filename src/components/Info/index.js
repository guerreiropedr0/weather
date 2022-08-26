import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeUnit } from '../../app/weather';
import Country from '../Country';
import Forecast from '../Forecast';
import Weather from '../Weather';
import style from './style.module.css';

const Info = () => {
  const dispatch = useDispatch();
  const { location, current, forecast } = useSelector((state) => state.weather.location);
  const { unit } = useSelector((state) => state.weather);

  const [isForecast, setForecast] = useState(false);

  const handleClick = (e) => {
    if (e.target.innerText === 'CURRENT') {
      setForecast(false);
    } else setForecast(true);
  };

  const handleScale = () => {
    dispatch(changeUnit());
  };

  return (
    <div className={style.card}>
      <ul className={style.nav}>
        <button
          className={isForecast ? style['nav-item'] : `${style['nav-item']} ${style.active}`}
          onClick={(e) => handleClick(e)}
          type="button"
        >
          CURRENT
        </button>
        <button
          className={isForecast ? `${style['nav-item']} ${style.active}` : style['nav-item']}
          onClick={(e) => handleClick(e)}
          type="button"
        >
          FORECAST
        </button>
        <button
          className={`${style['nav-item']} ${style.unit}`}
          onClick={handleScale}
          type="button"
        >
          º
          {' '}
          {unit.scale}
        </button>
      </ul>
      <div className={style.info}>
        {!isForecast ? (
          <>
            <Country props={{ location, current }} />
            <Weather props={{ current, unit }} />
          </>
        ) : <Forecast props={{ location, forecast, unit }} />}
      </div>
    </div>
  );
};

export default Info;
