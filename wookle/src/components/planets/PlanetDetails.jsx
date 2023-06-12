import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function PlanetDetails() {
  const [planet, setPlanet] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function displayPlanetDetails() {
      const response = await fetch(`https://swapi.dev/api/planets/${id}`);
      const jsonData = await response.json();
      setPlanet(jsonData);
    }
    displayPlanetDetails();
  }, []);

  return (
    <div className="container">
      <h1>{planet.name}</h1>
      <br />
      <div className="d-flex justify-content-center">
        <ul
          className="list-group card border-warning mb-2 text-bg-secondary p-3"
          style={{ width: "30rem" }}
        >
          <li className="list-group-item">Population: {planet.population}</li>
          <li className="list-group-item">Climate: {planet.climate}</li>
          <li className="list-group-item">Gravity: {planet.gravity}</li>
          <li className="list-group-item">Terrain: {planet.terrain}</li>
          <li className="list-group-item">
            Surface Water: {planet.surface_water}
          </li>
          <li className="list-group-item">
            Rotation Period: {planet.rotation_period}
          </li>
          <li className="list-group-item">
            Orbital Period: {planet.orbital_period}
          </li>
          <li className="list-group-item">Diameter: {planet.diameter}</li>
          <br />
          <Link to={"/planets"}>
            <button className="btn btn-warning">
              Back to Planets Main Page
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
