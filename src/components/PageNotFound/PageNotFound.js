import { NavLink } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <section className="page-not-found">
      <h2 className="page-not-found__status">404</h2>
      <p className="page-not-found__text">Страница не найдена</p>
      <NavLink to="/" className="page-not-found__link">
        <button className="page-not-found__link-button">Назад</button>
      </NavLink>
    </section>
  );
}

export default PageNotFound;
