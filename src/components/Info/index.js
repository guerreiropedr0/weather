import { useSelector } from 'react-redux';
import Condition from '../Condition';
import Weather from '../Weather';
import Forecast from '../Forecast';
import style from './style.module.css';

const Info = () => {
  const { current, forecast } = useSelector((state) => state.weather.location);
  const { unit, isForecast } = useSelector((state) => state.weather);

  return (
    <div className={style.card}>
      {window.innerWidth < 768
        ? (
          <>
            <Condition props={{ current, unit }} />
            {!isForecast
              ? <Weather props={{ current, unit }} />
              : <Forecast props={{ forecast, unit }} />}
          </>
        )
        : (
          <>
            <Forecast props={{ forecast, unit }} />
            <Weather props={{ current, unit }} />
          </>
        )}
    </div>
  );
};

export default Info;
