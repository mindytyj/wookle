import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PlanetsPagination from "./PlanetsPagination";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  let page = parseInt(searchParams.get("page"));

  useEffect(() => {
    async function displayPlanets() {
      const response = await fetch(
        page
          ? `https://swapi.dev/api/planets/?page=${page}`
          : `https://swapi.dev/api/planets`
      );
      const jsonData = await response.json();
      setPlanets(jsonData.results);
    }
    displayPlanets();
  }, [searchParams]);

  return (
    <div className="container">
      <h1>Star Wars Planets</h1>
      <br />
      <div className="d-flex justify-content-center">
        <ul
          className="list-group card border-warning mb-2 text-bg-secondary p-3"
          style={{ width: "30rem" }}
        >
          {planets.map((planet) => (
            <li className="list-group-item" key={planet.name}>
              {planet.name}
              <Link
                to={`/planets/${planet.url.split("/")[5]}`}
                className="position-absolute end-0"
              >
                <button className="btn btn-warning btn-sm">Details</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <PlanetsPagination setSearchParams={setSearchParams} />
    </div>
  );
}
