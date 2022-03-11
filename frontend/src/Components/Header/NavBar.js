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
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const register = <FontAwesomeIcon className="register" icon={faUserPlus} />;
  const signin = <FontAwesomeIcon className="signin" icon={faRightToBracket} />;
  const logoutI = (
    <FontAwesomeIcon className="signin" icon={faArrowRightFromBracket} />
  );
  const heart = <FontAwesomeIcon className="signin" icon={faHeart} />;

  // Hooks
  const { authData, logout } = useAuthentication();
  const navigate = useNavigate();

  // Handlers

  function handleLogoutClick() {
    logout();
    navigate("/", { replace: true });
  }

  return (
    <ul className="navBar">
      {!authData && (
        <li>
          <NavLink className="nav__item" to="/register">
            <span className="nav__item__icon">{register}</span>
            <span>Register</span>
          </NavLink>
        </li>
      )}
      {!authData && (
        <li>
          <NavLink className="nav__item" to="/login">
            <span className="nav__item__icon">{signin}</span>
            <span>Login</span>
          </NavLink>
        </li>
      )}
      {authData && (
        <li>
          <NavLink className="nav__item" to="/favorites">
            <span className="nav__item__icon">{heart}</span>
            <span>Favorites</span>
          </NavLink>
        </li>
      )}
      {authData && (
        <li>
          <span onClick={handleLogoutClick} className="nav__item">
            <span className="nav__item__icon">{logoutI}</span>
            <span>Logout</span>
          </span>
        </li>
      )}
    </ul>
  );
}
