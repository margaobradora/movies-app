import movies from "../../movies.json";
import Poster from "./Poster";
import Title from "./Title";
import Rating from "./Rating";
import Categories from "./Categories";
import "./MovieCard.scss";
import { useLocation } from "react-router-dom";

// // MARGA
// // export default function MovieCard() {
// //   const location = useLocation();

// //   return movies.map(function (movie) {
// //     return (
// //       <li className="MovieCard" key={movie.title}>
// //         <Poster url={movie.poster}></Poster>
// //         <Title title={movie.title}></Title>
// //         <Categories category={movie.category}></Categories>
// //         <Rating rating={movie.rating}></Rating>
// //       </li>
//     );
//   });
// }

// // Ana

export default function MovieCard({ movie }) {
  return (
    <li className="MovieCard" key={movie.title}>
      <Poster url={movie.poster} title={movie.title}></Poster>
      <Title title={movie.title}></Title>
      <Categories category={movie.category}></Categories>
      <Rating rating={movie.rating}></Rating>
    </li>
  );
}
