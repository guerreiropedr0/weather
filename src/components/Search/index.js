import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocation } from '../../app/weather';
import style from './style.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getLocation(search));
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a city or country.."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
