import { NavLink } from 'react-router-dom';
import './Login.css';
import icon from '../../images/initial-icon.svg';

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <NavLink to="/" className="login__link">
          <img className="login__link-icon" src={icon} alt="Initial Icon" />
        </NavLink>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <div className="login__form-block">
            <p className="login__form-block-name">E-mail</p>
            <input className="login__form-block-input" type="email" value="pochta@yandex.ru" required />
          </div>
          <div className="login__form-block">
            <p className="login__form-block-name">Пароль</p>
            <input className="login__form-block-input" type="password" required />
          </div>
        </form>
        <ul className="login__buttons">
          <li className="login__button">
            <button className="login__button-reg">Войти</button>
          </li>
          <li className="login__button">
            <p className="login__button-text">Ещё не зарегистрированы?</p>
            <NavLink to="/signup" className="login__button-link">
              <button className="login__button-link-auth">Регистрация</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Login;
