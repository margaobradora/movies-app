import SearchBox from "../Components/Main/SearchBox";
import MovieGrid from "../Components/Main/MovieGrid";
import CategoriesCloud from "../Components/Main/CategoriesCloud";
import { useAuthentication } from "../AuthenticationProvider";

export default function Main() {
  // Authentication
  const { authData } = useAuthentication();

  return (
    <div>
      <SearchBox></SearchBox>
      <CategoriesCloud></CategoriesCloud>
      <MovieGrid></MovieGrid>
    </div>
  );
}
