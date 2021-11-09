import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, Тимофей!</h2>
        <form className="profile__form">
          <div className="profile__form-block">
            <p className="profile__form-block-name">Имя</p>
            <input className="profile__form-block-input" type="text" value="Тимофей" required />
          </div>
          <div className="profile__form-block">
            <p className="profile__form-block-name">E-mail</p>
            <input className="profile__form-block-input" type="email" value="pochta@yandex.ru" required />
          </div>
        </form>
        <ul className="profile__buttons">
          <li className="profile__button">
            <button className="profile__button-text">Редактировать</button>
          </li>
          <li className="profile__button">
            <button className="profile__button-text profile__button-text_exit">Выйти из аккаунта</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Profile;
