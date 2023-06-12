import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function displayPlanets() {
      const response = await fetch("https://swapi.dev/api/planets");
      const jsonData = await response.json();
      setPlanets(jsonData.results);
    }
    displayPlanets();
  }, []);

  return (
    <div className="container">
      <h1>Star Wars Planets</h1>
      <br />
      <div className="d-flex justify-content-center">
        <ul
          className="list-group card border-warning mb-2 text-bg-secondary p-3"
          style={{ width: "30rem" }}
        >
          {planets.map((planet, index) => (
            <li className="list-group-item" key={index + 1}>
              {planet.name}
              <Link
                to={`/planets/${index + 1}`}
                className="position-absolute end-0"
              >
                <button className="btn btn-warning btn-sm">Details</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
