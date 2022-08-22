import { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <form>
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
