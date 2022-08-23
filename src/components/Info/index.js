import Country from '../Country';
import Weather from '../Weather';
import style from './style.module.css';

const Info = () => (
  <div className={style.card}>
    <ul className={style.nav}>
      <li>CURRENT</li>
      <li>FORECAST</li>
    </ul>
    <div className={style.info}>
      <Country />
      <Weather />
    </div>
  </div>
);

export default Info;
