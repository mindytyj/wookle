import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <li>NavBar</li>
      <Link to={"/people"}>
        <li>Characters</li>
      </Link>
      <Link to={"/films"}>
        <li>Films</li>
      </Link>
      <Link to={"/planets"}>
        <li>Planets</li>
      </Link>
      <Link to={"/species"}>
        <li>Species</li>
      </Link>
      <Link to={"/starships"}>
        <li>Starships</li>
      </Link>
      <Link to={"/vehicles"}>
        <li>Vehicles</li>
      </Link>
    </nav>
  );
}
