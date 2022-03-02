import Trademark from "./Trademark";
import NavBar from "./NavBar";
import "./Header.scss";

export default function Header() {
  return (
    <div className="Header">
      <Trademark></Trademark>
      <NavBar></NavBar>
    </div>
  );
}
