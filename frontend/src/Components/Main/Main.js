import MovieGrid from "./MovieGrid";
import SearchBox from "./SearchBox";
import CategoriesCloud from "./CategoriesCloud";

export default function Main() {
  return (
    <>
      <CategoriesCloud></CategoriesCloud>
      <SearchBox></SearchBox>
      <MovieGrid></MovieGrid>
    </>
  );
}
