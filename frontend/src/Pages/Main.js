import SearchBox from "../Components/Main/SearchBox";
import MovieGrid from "../Components/Main/MovieGrid";
import CategoriesCloud from "../Components/Main/CategoriesCloud";
import { useAuthentication } from "../AuthenticationProvider";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  // Hooks
  const { authData } = useAuthentication();
  const navigate = useNavigate();

  // State
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]); // Initial fetch
  const [filterMovies, setFilterMovies] = useState([]); // Afterwards
  const [input, setInput] = useState("");

  // Fetching movies
  function fetchMovies() {
    setLoading(true);
    fetch("/api/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies);
        setFilterMovies(data.movies);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  // Handlers
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmitSearch = () => {
    const searchedTitle = input.toLowerCase();
    const newMovies = [...movies];
    setFilterMovies(
      newMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchedTitle)
      )
    );
  };

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

  function addToFavoriteMovies(id) {
    if (!authData) {
      navigate("/login", { replace: true });
    }

    fetch("/api/user/favorites", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
    });
  }

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

      {authData?.name}
      {/* authData és un objecte llavors necessito posarli el ? perq si es undefined no peti al accedir a la movies.app */}
      <MovieGrid
        addToFavoriteMovies={addToFavoriteMovies}
        isLoading={isLoading}
        handleSortClick={handleSortClick}
        movies={filterMovies}
      ></MovieGrid>
    </div>
  );
}
