import movies from "../../movies.json";
import "./Categories.scss";

export default function CategoriesCloud() {
  const categories = movies.map((movie) => movie.category);
  const uniqueCategories = [...new Set(categories)];

  return uniqueCategories.map(function (category) {
    return (
      <>
        <span className="categories__tag">{category}</span>
      </>
    );
  });
}
