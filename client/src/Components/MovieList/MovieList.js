import React from "react";
// importaré el poster dins el llistat de movies (aquest Component)
//import Poster from '../Poster/Poster'

function MovieList({ movies }) {
  return (
    <div className="Listing">
      {movies.map((movie) => (
        <Poster key={movie.title} poster={movie}></Poster>
      ))}
    </div>
  );
}

export default MovieList;
