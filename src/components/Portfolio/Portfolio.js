import './Portfolio.css';
import arrow from '../../images/portfolio-arrow-logo.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <div className="portfolio__links">
        <article className="portfolio__link">
          <a className="portfolio__link-name" href="https://github.com/timtorshin/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт</a>
          <img className="portfolio__link-logo" src={arrow} alt="Arrow Logo" />
        </article>
        <article className="portfolio__link">
          <a className="portfolio__link-name" href="https://github.com/timtorshin/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт</a>
          <img className="portfolio__link-logo" src={arrow} alt="Arrow Logo" />
        </article>
        <article className="portfolio__link">
          <a className="portfolio__link-name" href="https://github.com/timtorshin/react-mesto-api-full" target="_blank" rel="noreferrer">Одностраничное приложение</a>
          <img className="portfolio__link-logo" src={arrow} alt="Arrow Logo" />
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
