import style from './style.module.css';

const Navbar = () => (
  <nav className={style.navbar}>
    <h1>WEATHER(LOGO)</h1>
    <form>
      <input
        type="text"
        placeholder="Search for a city or country.."
      />
      <button type="submit">Search</button>
    </form>
    <h2>ABOUT</h2>
  </nav>
);

export default Navbar;
