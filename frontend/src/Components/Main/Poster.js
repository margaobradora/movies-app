import "./Poster.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Poster({
  url,
  title,
  id,
  addToFavoriteMovies,
  deleteFromFavorites,
}) {
  // Hooks
  const location = useLocation();

  // State
  const [favoriteHeart, setFavoriteHeart] = useState(true);

  // Icon
  const heart = (
    <FontAwesomeIcon className="poster-like" icon={faHeart} size="lg" />
  );
  const heartBreak = (
    <FontAwesomeIcon className="poster-like" icon={faHeartCrack} size="lg" />
  );

  //Handlers
  const heartClick = (id) => {
    setFavoriteHeart(false);
    addToFavoriteMovies(id);
  };

  return (
    <div className="poster">
      <img className="poster__img" src={url} alt={title}></img>
      {location.pathname !== "/favorites" && (
        <span
          className={favoriteHeart ? "poster__like" : "hidden"}
          onClick={() => heartClick(id)}
        >
          {heart}
        </span>
      )}

      {location.pathname === "/favorites" && (
        <span className="poster__like" onClick={() => deleteFromFavorites(id)}>
          {heartBreak}
        </span>
      )}
    </div>
  );
}
