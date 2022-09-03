import PropTypes from 'prop-types';
import { useState } from 'react';
import Day from '../Day';
import style from './style.module.css';

const Forecast = ({ props }) => {
  const { forecast, unit } = props;

  const [day, setDay] = useState(0);

  const forecastDay = forecast && forecast.forecastday[day];

  const handleClick = (e) => {
    if (e.target.className.includes('bi-arrow-left')) {
      setDay(day - 1);
    } else {
      setDay(day + 1);
    }
  };

  return (
    <div className={style.forecast}>
      {window.innerWidth < 768
        ? (
          <>
            <button
              style={{ display: day < 1 ? 'none' : 'block' }}
              onClick={(e) => handleClick(e)}
              className={style['icon-left']}
              type="button"
            >
              <i className="bi bi-arrow-left" />
            </button>
            <button
              style={{ display: day > 1 ? 'none' : 'block' }}
              onClick={(e) => handleClick(e)}
              className={style['icon-right']}
              type="button"
            >
              <i className="bi  bi-arrow-right" />
            </button>
            <Day props={{ forecastDay, unit }} />
          </>
        )
        : (
          <div className={style.together}>
            {forecast
            && forecast.forecastday.map((forecastDay) => (
              <Day
                key={forecastDay.date_epoch}
                props={{ forecastDay, unit }}
              />
            ))}
          </div>
        )}
    </div>
  );
};

Forecast.propTypes = {
  props: PropTypes.instanceOf(Object),
  forecast: PropTypes.instanceOf(Object),
  unit: PropTypes.instanceOf(Object),
};

Forecast.defaultProps = {
  props: {},
  forecast: {},
  unit: {},
};

export default Forecast;
