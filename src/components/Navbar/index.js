import Search from '../Search';
import style from './style.module.css';

const Navbar = () => (
  <nav className={style.navbar}>
    <h1 className={style.navitem}>WEATHER(LOGO)</h1>
    <Search />
    <h2 className={style.navitem}>ABOUT</h2>
  </nav>
);

export default Navbar;
