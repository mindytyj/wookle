import { NavLink } from "react-router-dom";

export default function NavBarItems() {
  return (
    <div className="btn-group" role="group" aria-label="site navigation">
      <NavLink to={"/people"} className="btn-group nav-link">
        <button type="button" className="btn btn-danger">
          Characters
        </button>
      </NavLink>
      <NavLink to={"/films"} className="btn-group nav-link">
        <button type="button" className="btn btn-danger">
          Films
        </button>
      </NavLink>
      <NavLink to={"/planets"} className="btn-group nav-link">
        <button type="button" className="btn btn-danger">
          Planets
        </button>
      </NavLink>
      <NavLink to={"/species"} className="btn-group nav-link">
        <button type="button" className="btn btn-danger">
          Species
        </button>
      </NavLink>
      <NavLink to={"/starships"} className="btn-group nav-link">
        <button type="button" className="btn btn-danger">
          Starships
        </button>
      </NavLink>
      <NavLink to={"/vehicles"} className="btn-group nav-link">
        <button type="button" className="btn btn-danger">
          Vehicles
        </button>
      </NavLink>
    </div>
  );
}
