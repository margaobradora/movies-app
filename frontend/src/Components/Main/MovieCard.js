import Poster from "./Poster";
import Title from "./Title";
import Rating from "./Rating";
import Categories from "./Categories";
import "./MovieCard.scss";

export default function MovieCard({ addToFavoriteMovies, movie }) {
  return (
    <li className="MovieCard" key={movie.title}>
      <Poster
        id={movie._id}
        url={movie.poster}
        addToFavoriteMovies={addToFavoriteMovies}
        title={movie.title}
      ></Poster>
      <Title title={movie.title}></Title>
      <Categories category={movie.category}></Categories>
      <Rating rating={movie.rating}></Rating>
    </li>
  );
}
