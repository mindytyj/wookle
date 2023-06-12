import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Species() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    async function displaySpecies() {
      const response = await fetch("https://swapi.dev/api/species");
      const jsonData = await response.json();
      setSpecies(jsonData.results);
    }
    displaySpecies();
  }, []);

  return (
    <div className="container">
      <h1>Species in the Star Wars Universe</h1>
      <br />
      <div className="d-flex justify-content-center">
        <ul
          className="list-group card border-warning mb-2 text-bg-secondary p-3"
          style={{ width: "30rem" }}
        >
          {species.map((speciesType, index) => (
            <li className="list-group-item" key={index + 1}>
              {speciesType.name}
              <Link
                to={`/species/${index + 1}`}
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
