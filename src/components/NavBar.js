import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
    <NavLink to="/" className="nav-link">Home</NavLink>
    <NavLink to="/Actors" className="nav-link">   Actors</NavLink>
    <NavLink to="/Directors"className="nav-link">Directors</NavLink>
    </nav>
    );
};

export default NavBar;
