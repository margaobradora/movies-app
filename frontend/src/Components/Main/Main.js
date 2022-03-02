import MovieGrid from "./MovieGrid";
//import Recommended from "./Recommended";
import SearchBox from "./SearchBox";
import SignUp from "../Pages/SignUp";
import Login from "../users/Login";
import CategoriesCloud from "./CategoriesCloud";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

export default function Main() {
  return (
    <>
      <CategoriesCloud></CategoriesCloud>
      <SearchBox></SearchBox>
      <MovieGrid></MovieGrid>
    </>
  );
}

// CODI ANA
