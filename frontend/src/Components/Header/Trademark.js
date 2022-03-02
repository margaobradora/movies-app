import "./Trademark.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import "../../App.scss";

import logo from "./images/logo3.png";

export default function Title() {
  return (
    <div>
      <NavLink className="brand" activeClassName="active" to="/">
        <img className="brand__logo" src={logo} alt="logo"></img>
        <h1 className="brand__title">The Korean Seat</h1>
      </NavLink>
    </div>
  );
}
