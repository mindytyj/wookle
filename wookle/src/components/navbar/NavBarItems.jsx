import { NavLink } from "react-router-dom";

export default function NavBarItems() {
  return (
    <ul className="navbar-nav">
      <NavLink to={"/people"} className="nav-link">
        <li className="nav-item">Characters</li>
      </NavLink>
      <NavLink to={"/films"} className="nav-link">
        <li className="nav-item">Films</li>
      </NavLink>
      <NavLink to={"/planets"} className="nav-link">
        <li className="nav-item">Planets</li>
      </NavLink>
      <NavLink to={"/species"} className="nav-link">
        <li className="nav-item">Species</li>
      </NavLink>
      <NavLink to={"/starships"} className="nav-link">
        <li className="nav-item">Starships</li>
      </NavLink>
      <NavLink to={"/vehicles"} className="nav-link">
        <li className="nav-item">Vehicles</li>
      </NavLink>
    </ul>
  );
}
