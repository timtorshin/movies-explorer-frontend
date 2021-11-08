import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const location = useLocation();

  return (
    <footer className={`footer ${(location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies") && 'footer_visible'}`}>
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <p className="footer__info-date">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__info-links">
          <li className="footer__info-link">
            <a className="footer__info-link-sonet" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__info-link">
            <a className="footer__info-link-sonet" href="https://github.com/yandex" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li className="footer__info-link">
            <a className="footer__info-link-sonet" href="https://www.facebook.com/yandex.practicum" target="_blank" rel="noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
