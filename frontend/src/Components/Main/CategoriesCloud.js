//import movies from "../../movies.json";
import "./Categories.scss";

export default function CategoriesCloud({ handleCategoryClick, movies }) {
  // Setting unique genres
  const categories = movies.map((movie) => movie.category);
  const uniqueCategories = [...new Set(categories)];

  return (
    <>
      {uniqueCategories.map(function (category) {
        return (
          <span
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="categories__tag"
          >
            {category}
          </span>
        );
      })}
      <span onClick={() => handleCategoryClick()} className="categories__tag">
        XXXX
      </span>
    </>
  );
}
