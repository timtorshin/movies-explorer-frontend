import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
      <More />
    </main>
  );
}

export default Movies;
