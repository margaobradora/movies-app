import MovieCard from "./MovieCard";
import "./MovieGrid.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownAZ } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export default function MovieGrid({ favorites, movies }) {
  const location = useLocation();
  const sort = <FontAwesomeIcon icon={faArrowDownAZ} />;

  return (
    <div className="grid">
      <div className="grid__header">
        <h2 className="grid__header__title">
          {location.pathname === "/favorites" ? "My Favorites" : "All Movies"}
        </h2>
        <h4
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
      <ul className="grid__movies">
        {movies.map(function (movie) {
          return <MovieCard key={movie.title} movie={movie}></MovieCard>;
        })}
      </ul>

      {/* <ul className="grid__movies">
        <MovieCard></MovieCard>
      </ul> */}
    </div>
  );
}

// ANA

{
  /* <ul className='grid__movies'>
				{movies.map(function (movie) {
					return <MovieCard key={movie.title} movie={movie}></MovieCard>;
				})}
			</ul> */
}
