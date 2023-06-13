import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SpeciesPagination from "./SpeciesPagination";

export default function Species() {
  const [species, setSpecies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  let page = parseInt(searchParams.get("page"));

  useEffect(() => {
    async function displaySpecies() {
      const response = await fetch(
        page
          ? `https://swapi.dev/api/species/?page=${page}`
          : `https://swapi.dev/api/species`
      );
      const jsonData = await response.json();
      setSpecies(jsonData.results);
    }
    displaySpecies();
  }, [searchParams]);

  return (
    <div className="container">
      <h1>Species in the Star Wars Universe</h1>
      <br />
      <div className="d-flex justify-content-center">
        <ul
          className="list-group card border-warning mb-2 text-bg-secondary p-3"
          style={{ width: "30rem" }}
        >
          {species.map((speciesType) => (
            <li className="list-group-item" key={speciesType.name}>
              {speciesType.name}
              <Link
                to={`/species/${speciesType.url.split("/")[5]}`}
                className="position-absolute end-0"
              >
                <button className="btn btn-warning btn-sm">Details</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <SpeciesPagination setSearchParams={setSearchParams} />
    </div>
  );
}
