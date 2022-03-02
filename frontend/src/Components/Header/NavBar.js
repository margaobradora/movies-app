import "./NavBar.scss";
import { useAuthentication } from "../../AuthenticationProvider";

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const signup = <FontAwesomeIcon className="signup" icon={faUserPlus} />;
  const signin = <FontAwesomeIcon className="signin" icon={faRightToBracket} />;
  const heart = <FontAwesomeIcon className="signin" icon={faHeart} />;

  const { authData } = useAuthentication();

  return (
    <ul className="navBar">
      <li>
        <NavLink className="navBar__item" activeClassName="active" to="/signup">
          <span className="navBar__item__icon">{signup}</span>
          <span>Sign up</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="navBar__item" activeClassName="active" to="/login">
          <span className="navBar__item__icon">{signin}</span>
          <span>Login</span>
        </NavLink>
      </li>
      {/* {authData.username && (
        <li>
          <NavLink
            className="navBar__item"
            activeClassName="active"
            to="/favorites"
          >
            <span className="navBar__item__icon">{heart}</span>
            <span>Favorites</span>
          </NavLink>
        </li>
      )} */}
    </ul>
  );
}
