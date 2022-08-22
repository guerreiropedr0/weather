import { useState } from 'react';
import style from './style.module.css';

const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <form className={style.form}>
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
