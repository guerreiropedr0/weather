import { useSelector } from 'react-redux';
import Condition from '../Condition';
import Weather from '../Weather';
import style from './style.module.css';

const Info = () => {
  const { current } = useSelector((state) => state.weather.location);
  const { unit } = useSelector((state) => state.weather);

  return (
    <div className={style.card}>
      <Condition props={{ current, unit }} />
      <Weather props={{ current, unit }} />
    </div>
  );
};

export default Info;
