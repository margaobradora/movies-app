import SearchBox from "../Components/Main/SearchBox";
import MovieGrid from "../Components/Main/MovieGrid";
import CategoriesCloud from "../Components/Main/CategoriesCloud";
import { useAuthentication } from "../AuthenticationProvider";
import { useState, useEffect } from "react";

export default function Main() {
  // Authentication
  const { authData } = useAuthentication();

  // State
  const [movies, setMovies] = useState([]); // Initial fetch
  const [filterMovies, setFilterMovies] = useState([]); // Afterwards

  // Fetching movies
  function fetchMovies() {
    fetch("/api/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies);
        setFilterMovies(data.movies);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const [input, setInput] = useState("");

  // Handlers
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  async function handleSubmitSearch(event) {
    if (event.key === "Enter") {
      const title = input;
      const response = await fetch(`/api/movies/search?title=${title}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      const searchedMovie = data.movies;
      const titleSearchedMovie = searchedMovie[0].title;

      if (response.status === 200) {
        const newMovies = [...movies];
        setFilterMovies(
          newMovies.filter((movie) => movie.title === titleSearchedMovie)
        );
      }
    }
  }

  const handleGenreClick = (genre) => {
    const newMovies = [...movies];
    if (!genre) setFilterMovies(newMovies);
    else {
      setFilterMovies(newMovies.filter((movie) => movie.category === genre));
    }
  };
  const handleSortClick = () => {
    const sortedMovies = [...movies];
    setFilterMovies(sortedMovies.sort((a, b) => (a.title > b.title ? 1 : -1)));
  };

  return (
    <div>
      <SearchBox
        handleInputChange={handleInputChange}
        handleSubmitSearch={handleSubmitSearch}
      ></SearchBox>
      <CategoriesCloud
        movies={movies}
        handleGenreClick={handleGenreClick}
      ></CategoriesCloud>

      <MovieGrid
        handleSortClick={handleSortClick}
        movies={filterMovies}
      ></MovieGrid>
    </div>
  );
}
