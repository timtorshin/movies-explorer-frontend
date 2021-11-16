import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  const [isBurgerMenuClicked, setIsBurgerMenuClicked] = React.useState(false);

  function handleBurgerMenuClick() {
    if (isBurgerMenuClicked === false) {
      setIsBurgerMenuClicked(true);
    } else {
      setIsBurgerMenuClicked(false);
    }
  }

  return (
    <nav className={`navigation ${isBurgerMenuClicked && 'navigation_opened-burger'}`}>
      <div className={`navigation__menu ${isBurgerMenuClicked && 'navigation__menu_opened-burger'}`}>
        <button className={`navigation__button-burger ${isBurgerMenuClicked && 'navigation__button-burger_closed'}`} onClick={handleBurgerMenuClick}></button>
        <ul className={`navigation__buttons ${isBurgerMenuClicked && 'navigation__buttons_opened-burger'}`}>
          <li className={`navigation__button`}><NavLink to="/" className={`navigation__button-main ${location.pathname === "/" && 'navigation__link_active'} ${isBurgerMenuClicked && 'navigation__button-main_opened-burger'}`}>Главная</NavLink></li>
          <li className={`navigation__button`}><NavLink to="/movies" activeClassName="navigation__link_active" className={`navigation__button-films ${isBurgerMenuClicked && 'navigation__button-films_opened-burger'}`}>Фильмы</NavLink></li>
          <li className={`navigation__button`}><NavLink to="/saved-movies" activeClassName="navigation__link_active" className={`navigation__button-saved ${isBurgerMenuClicked && 'navigation__button-saved_opened-burger'}`}>Сохранённые фильмы</NavLink></li>
        </ul>
        <NavLink to="/profile" className={`navigation__button-account ${isBurgerMenuClicked && 'navigation__button-account_opened-burger'}`}></NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
