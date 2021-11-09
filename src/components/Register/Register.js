import { NavLink } from 'react-router-dom';
import './Register.css';
import icon from '../../images/initial-icon.svg';

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <NavLink to="/" className="register__link">
          <img className="register__link-icon" src={icon} alt="Initial Icon" />
        </NavLink>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <div className="register__form-block">
            <p className="register__form-block-name">Имя</p>
            <input className="register__form-block-input" type="text" value="Тимофей" required />
          </div>
          <div className="register__form-block">
            <p className="register__form-block-name">E-mail</p>
            <input className="register__form-block-input" type="email" value="pochta@yandex.ru" required />
          </div>
          <div className="register__form-block">
            <p className="register__form-block-name">Пароль</p>
            <input className="register__form-block-input" type="password" required />
          </div>
        </form>
        <ul className="register__buttons">
          <li className="register__button">
            <button className="register__button-reg">Зарегистрироваться</button>
          </li>
          <li className="register__button">
            <p className="register__button-text">Уже зарегистрированы?</p>
            <NavLink to="/signin" className="register__button-link">
              <button className="register__button-link-auth">Войти</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Register;
