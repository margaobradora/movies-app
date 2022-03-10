import Poster from "./Poster";
import Title from "./Title";
import Rating from "./Rating";
import Categories from "./Categories";
import "./MovieCard.scss";
import { useLocation } from "react-router-dom";

export default function MovieCard({ addToFavoriteMovies, movie }) {
  // Hooks;
  const location = useLocation();
  return (
    <li
      className="MovieCard"
      key={
        location.pathname === `/favorites`
          ? `favorite-${movie.title}`
          : `${movie.title}`
      }
    >
      <Poster
        id={movie._id}
        url={movie.poster}
        addToFavoriteMovies={addToFavoriteMovies}
        title={movie.title}
      ></Poster>
      <Title title={movie.title}></Title>
      <Categories category={movie.category}></Categories>
      <Rating rating={movie.rating} title={movie.title}></Rating>
    </li>
  );
}
