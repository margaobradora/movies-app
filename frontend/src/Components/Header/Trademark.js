import "./Trademark.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import "../../App.scss";
import { useAuthentication } from "../../AuthenticationProvider";
import logo from "./images/logo3.png";

export default function Title() {
  // Authentication
  // const { authData } = useAuthentication()
  return (
    <div>
      <NavLink className="brand" activeClassName="active" to="/">
        <img className="brand__logo" src={logo} alt="logo"></img>
        <h1 className="brand__title">The Korean Seat</h1>
        {/*{authData && <h2 className='greetings'>{`Hello, ${authData.data.name}!`}</h2> */}
      </NavLink>
    </div>
  );
}
