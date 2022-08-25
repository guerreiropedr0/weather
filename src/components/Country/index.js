import PropTypes from 'prop-types';
import style from './style.module.css';
import { toTwelveHour, formatDate } from '../../helper';

const Country = ({ props }) => {
  const { location, current } = props;

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

Country.propTypes = {
  props: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object),
  current: PropTypes.instanceOf(Object),
};

Country.defaultProps = {
  props: {},
  location: {},
  current: {},
};

export default Country;
