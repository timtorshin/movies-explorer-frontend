import './AboutMe.css';
import avatar from '../../images/aboutme-avatar.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__student">
        <div className="about-me__student-info">
          <h3 className="about-me__student-info-name">Тимофей Торшин</h3>
          <h4 className="about-me__student-info-profession">Фронтенд-разработчик</h4>
          <p className="about-me__student-info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <ul className="about-me__student-info-links">
            <li className="about-me__student-info-link">
              <a className="about-me__student-info-link-sonet" href="https://www.facebook.com/timtorshin" target="_blank" rel="noreferrer">Facebook</a>
            </li>
            <li className="about-me__student-info-link">
              <a className="about-me__student-info-link-sonet" href="https://github.com/timtorshin" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img className="about-me__student-avatar" src={avatar} alt="Portfolio Avatar" />
      </div>
    </section>
  );
}

export default AboutMe;
