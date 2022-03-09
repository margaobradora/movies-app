import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import "./Rating.scss";

export default function Rating({ rating }) {
  // Logic Rating

  const setRating = () => {
    if (rating === 10) return ["star", "star", "star", "star", "star"];
    if (rating > 9) return ["star", "star", "star", "star", "halfStar"];
    if (rating > 8) return ["star", "star", "star", "star"];
    if (rating > 7) return ["star", "star", "star", "halfStar"];
    if (rating > 6) return ["star", "star", "star"];
    if (rating > 5) return ["star", "star", "halfStar"];
    if (rating > 4) return ["star", "star"];
    if (rating > 3) return ["star", "halfStar"];
    if (rating > 2) return ["star"];
    if (rating > 1) return ["halfStar"];
  };

  return (
    <span className="rating">
      {setRating().map((value, index) => {
        if (value === "halfStar")
          return (
            <FontAwesomeIcon
              className="star--half"
              icon={faStarHalf}
              key={index}
            />
          );
        return <FontAwesomeIcon className="star" icon={faStar} key={index} />;
      })}
    </span>
  );
}

// MARGA

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
// import "./Rating.scss";

// export default function Rating({ rating }) {
//   const star = <FontAwesomeIcon className="star" icon={faStar} />;
//   const halfStar = <FontAwesomeIcon className="star--half" icon={faStarHalf} />;

//   const setRating = () => {
//     if (rating === 10) return [star, star, star, star, star];
//     if (rating > 9) return [star, star, star, star, halfStar];
//     if (rating > 8) return [star, star, star, star];
//     if (rating > 7) return [star, star, star, halfStar];
//     if (rating > 6) return [star, star, star];
//     if (rating > 5) return [star, star, halfStar];
//     if (rating > 4) return [star, star];
//     if (rating > 3) return [star, halfStar];
//     if (rating > 2) return [star];
//     if (rating > 1) return [halfStar];
//   };

//   return <span className="rating">{setRating()} </span>;
// }
