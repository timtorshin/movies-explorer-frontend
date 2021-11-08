import React from 'react';
import './SearchForm.css';

function SearchForm() {
  const [isSwitcherClicked, setIsSwitcherClicked] = React.useState(false);

  function handleSwitcherClick() {
    if (isSwitcherClicked === false) {
      setIsSwitcherClicked(true);
    } else {
      setIsSwitcherClicked(false);
    }
  }

  return (
    <section className="search-form">
      <form className="search-form__form">
        <input className="search-form__form-input" type="text" placeholder="Фильм"></input>
        <button className="search-form__form-button">Найти</button>
      </form>
      <div className="search-form__switcher">
        <button className={`search-form__switcher-button ${isSwitcherClicked && 'search-form__switcher-button_off'}`} onClick={handleSwitcherClick}></button>
        <p className="search-form__switcher-text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
