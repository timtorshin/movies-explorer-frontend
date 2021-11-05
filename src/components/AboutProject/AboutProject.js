import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__descriptions">
        <article className="about-project__description">
          <h3 className="about-project__description-heading">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article className="about-project__description">
          <h3 className="about-project__description-heading">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className="about-project__timelines">
        <article className="about-project__timeline">
          <p className="about-project__timeline-week about-project__timeline-week_color">1 неделя</p>
          <p className="about-project__timeline-softarch">Back-end</p>
        </article>
        <article className="about-project__timeline">
          <p className="about-project__timeline-week">4 недели</p>
          <p className="about-project__timeline-softarch">Front-end</p>
        </article>
      </div>
    </section>
  );
}

export default AboutProject;
