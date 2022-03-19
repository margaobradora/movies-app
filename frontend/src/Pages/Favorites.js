// import MovieGrid from "../Components/Main/MovieGrid";

// export default function Favorites() {
//   // State
//   const [favoriteMovies, setFavoriteMovies] = useState([]); // Initial fetch
//   const [isLoading, setLoading] = useState(true);

//   // Fetching movies
//   async function getUserFavorites() {
//     setLoading(true);
//     const response = await fetch("/api/user/favorites", {
//       method: "GET",
//       credentials: "include",
//       headers: {
//         Accept: "application/json",
//       },
//     });
//     const data = await response.json();
//     const favorites = data.favorites;
//     setFavoriteMovies(favorites);
//     setLoading(false);
//   }

//   useEffect(() => {
//     getUserFavorites();
//   }, []);

//   return (
//     <div>
//       <MovieGrid isLoading={isLoading} movies={favoriteMovies}></MovieGrid>
//     </div>
//   );
// }

// ANA

import MovieGrid from "../Components/Main/MovieGrid";

import { useState, useEffect } from "react";

export default function Favorites() {
  // State
  const [favoriteMovies, setFavoriteMovies] = useState([]); // Initial fetch
  const [isLoading, setLoading] = useState(true);

  // Fetching movies
  async function getUserFavorites() {
    const response = await fetch("/api/user/favorites", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    const favorites = data.favorites;
    setFavoriteMovies(favorites);
    setLoading(false);
  }

  function deleteFromFavorites(id) {
    console.log(id);
    fetch(`/api/user/favorites/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoading(false);
    getUserFavorites();
  }

  useEffect(() => {
    getUserFavorites();
  }, []);

  return (
    <div>
      <MovieGrid
        isLoading={isLoading}
        movies={favoriteMovies}
        deleteFromFavorites={deleteFromFavorites}
      ></MovieGrid>
    </div>
  );
}
