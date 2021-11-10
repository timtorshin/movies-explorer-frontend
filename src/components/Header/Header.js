import { useLocation, NavLink } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import icon from '../../images/initial-icon.svg';

function Header() {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname !== "/" && 'header_color'} ${(location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") && 'header_visible'}`}>
      <NavLink to="/" className="header__link">
        <img className="header__link-icon" src={icon} alt="Initial Icon" />
      </NavLink>
      {location.pathname === "/" ?
        <ul className="header__buttons">
          <li className="header__button"><NavLink to="/signup" className="header__button-reg">Регистрация</NavLink></li>
          <li className="header__button"><NavLink to="/signin" className="header__button-log">Войти</NavLink></li>
        </ul> 
      : <Navigation />}
    </header>
  );
}

export default Header;
