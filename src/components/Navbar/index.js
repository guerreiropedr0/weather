import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import style from './style.module.css';
import Search from '../Search';
import { toTwelveHour, formatDate } from '../../helper';
import { changeUnit } from '../../app/weather';

const Navbar = () => {
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.weather.location);

  const { scale } = useSelector((state) => state.weather.unit);

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [width, setWidth] = useState({
    transform: 'translateX(100%)',
  });

  const toggleMenu = () => {
    if (isNavExpanded) {
      setWidth({
        transform: 'translateX(100%)',
      });
      setTimeout(() => {
        setIsNavExpanded(!isNavExpanded);
      }, 400);
    } else {
      setIsNavExpanded(!isNavExpanded);
      setTimeout(() => {
        setWidth({
          transform: 'translateX(0)',
        });
      }, 1);
    }
  };

  const handleScale = () => {
    dispatch(changeUnit());
  };

  return (
    <div className={style.container}>
      <div className={style.unopened}>
        <div className={style.location}>
          <div className={style['city-group']}>
            <i className="bi bi-geo-alt-fill" />
            <h3 className={style.city}>{location && location.name}</h3>
          </div>
          <p className={style.time}>
            {location && formatDate(location.localtime.slice(0, 10))}
            {' '}
            {location && toTwelveHour(location.localtime.slice(-5))}
          </p>
        </div>
        <button
          title="Open Menu"
          type="button"
          style={{ opacity: !isNavExpanded ? 1 : 0 }}
          onClick={toggleMenu}
          className={style.navigator}
        >
          <i className="bi bi-list" />
        </button>
      </div>
      <nav style={width} className={style.navbar}>
        <div className={style.icons}>
          <button
            title="Choose scale"
            type="button"
            className={style.temp}
            onClick={handleScale}
          >
            º
            {scale}
          </button>
          <button
            title="Close Menu"
            type="button"
            onClick={toggleMenu}
            className={style.close}
          >
            <i className="bi bi-x-circle-fill" />
          </button>
        </div>
        <div style={{ marginBottom: 'auto' }}>
          <Search />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
