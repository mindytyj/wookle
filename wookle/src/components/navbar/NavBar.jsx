import { NavLink } from "react-router-dom";
import NavBarItems from "./NavBarItems";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg text-bg-warning p-3"
      style={{ backgroundColor: "lawngreen" }}
    >
      <div className="container-fluid">
        <NavLink
          to={"/"}
          className="navbar-brand"
          style={{ color: "black", fontSize: "24px" }}
        >
          Wookle
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavBarItems />
        </div>
      </div>
    </nav>
  );
}
