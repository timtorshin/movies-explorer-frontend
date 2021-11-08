import React from 'react';
import './MoviesCard.css';
import cover from '../../images/moviescard-test-cover.jpg';

function MoviesCard() {
  const [isLikeButtonClicked, setIsLikeButtonClicked] = React.useState(false);

  function handleLikeButtonClick() {
    if (isLikeButtonClicked === false) {
      setIsLikeButtonClicked(true);
    } else {
      setIsLikeButtonClicked(false);
    }
  }

  return (
    <article className="movies-card">
      <img className="movies-card__cover" src={cover} alt="Film Cover" />
      <div className="movies-card__info">
        <div className="movies-card__info-block">
          <h3 className="movies-card__info-block-name">33 слова о дизайне</h3>
          <button className={`movies-card__info-block-button ${isLikeButtonClicked && 'movies-card__info-block-button_active'}`} onClick={handleLikeButtonClick}></button>
        </div>
        <p className="movies-card__info-time">1ч 47м</p>
      </div>
    </article>
  );
}

export default MoviesCard;
