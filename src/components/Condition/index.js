import PropTypes from 'prop-types';
import style from './style.module.css';

const Condition = ({ props }) => {
  const { unit, current } = props;

  return (
    <div className={style.card}>
      <div className={style.condition}>
        <img
          src={current && current.condition.icon}
          alt={current && current.condition.text}
        />
        <h3 className={style['condition-text']}>
          {current && current.condition.text}
        </h3>
      </div>
      <h1 className={style.temp}>
        {unit.isAmerican
          ? current && Math.round(current.temp_f)
          : current && Math.round(current.temp_c)}
        º
        {unit.scale}
      </h1>
    </div>
  );
};

Condition.propTypes = {
  props: PropTypes.instanceOf(Object),
  current: PropTypes.instanceOf(Object),
  unit: PropTypes.instanceOf(Object),
};

Condition.defaultProps = {
  props: {},
  current: {},
  unit: {},
};

export default Condition;
