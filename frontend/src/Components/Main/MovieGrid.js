import MovieCard from "./MovieCard";
import "./MovieGrid.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownAZ } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export default function MoviesGrid({
  movies = [],
  addToFavoriteMovies,
  isLoading,
  handleSortClick,
}) {
  // Hooks
  const location = useLocation();

  // Icon
  const sort = <FontAwesomeIcon icon={faArrowDownAZ} />;

  return (
    <div className="grid">
      <div className="grid__header">
        <h2 className="grid__header__title">
          {location.pathname === "/favorites" ? "My Favorites" : "All Movies"}
        </h2>
        <h4
          onClick={handleSortClick}
          className={
            location.pathname === "/favorites"
              ? "hidden"
              : "grid__header__sort "
          }
        >
          Sort
          <span> {sort}</span>
        </h4>
      </div>
      {movies && (
        <ul className={isLoading ? "loader" : "grid__movies"}>
          {isLoading && <i>📼</i>}
          {movies.map((movie) => (
            <MovieCard
              key={movie.title}
              addToFavoriteMovies={addToFavoriteMovies}
              movie={movie}
            ></MovieCard>
          ))}
        </ul>
      )}
    </div>
  );
}
