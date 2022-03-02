// import "./Poster.scss";
// import { useAuthentication } from "../../AuthenticationProvider";
// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { useLocation } from "react-router-dom";

// export default function Poster({ url, title, handleFav }) {
//   // State
//   const [isFavorite, setFavorite] = useState(false);

//   // Icon
//   const heart = (
//     <FontAwesomeIcon className="poster-like" icon={faHeart} size="lg" />
//   );

//   // Hooks
//   const { authData } = useAuthentication();
//   const navigate = useNavigate();

//   // Location
//   const location = useLocation();

//   // Favorite logic
//   const handleHeartClick = () => {
//     if (!authData) {
//       navigate("/login", { replace: true });
//     } else {
//       if (!isFavorite) {
//         setFavorite(true);
//       } else {
//         setFavorite(false);
//       }
//     }
//   };
//   return (
//     <div className="poster">
//       <img className="poster__img" src={url} alt={title}></img>
//       <span
//         onClick={handleHeartClick}
//         className={isFavorite ? "poster__like" : "unfavorited"}
//       >
//         {heart}
//       </span>
//     </div>
//   );
// }

import "./Poster.scss";
import { useAuthentication } from "../../AuthenticationProvider";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router-dom";

export default function Poster({ url, title, handleFav }) {
  // State
  const [isFavorite, setFavorite] = useState(false);

  // Icon
  const heart = (
    <FontAwesomeIcon className="poster-like" icon={faHeart} size="lg" />
  );

  // Hooks
  const { authData } = useAuthentication();
  const navigate = useNavigate();

  // Location
  const location = useLocation();

  // Favorite logic
  const handleHeartClick = () => {
    if (!authData) {
      navigate("/login", { replace: true });
    } else {
      if (!isFavorite) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    }
  };

  return (
    <div className="poster">
      <img className="poster__img" src={url} alt={title}></img>
      {location.pathname !== "/favorites" && (
        <span
          onClick={handleHeartClick}
          className={isFavorite ? "poster__like" : "unfavorited"}
        >
          {heart}
        </span>
      )}
    </div>
  );
}
