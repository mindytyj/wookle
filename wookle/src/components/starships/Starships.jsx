import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import StarshipsPagination from "./StarshipsPagination";
import LoadingScreen from "../loading/LoadingScreen";

export default function Starships() {
  const [loading, setLoading] = useState(true);
  const [starships, setStarships] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  let page = parseInt(searchParams.get("page"));

  useEffect(() => {
    async function displayStarships() {
      setLoading(true);
      const response = await fetch(
        page
          ? `https://swapi.dev/api/starships/?page=${page}`
          : `https://swapi.dev/api/starships`
      );
      const jsonData = await response.json();
      setStarships(jsonData.results);
      setLoading(false);
    }
    displayStarships();
  }, [searchParams]);

  if (loading === true) {
    return <LoadingScreen />;
  }

  return (
    <div className="container">
      <h1>Star Wars Starships</h1>
      <br />
      <div className="row row-cols-1 grid gap-2 justify-content-center">
        {starships.map((starship) => (
          <div
            className="card card border-warning mb-2"
            style={{ width: "16rem" }}
          >
            <h5 className="card-title">{starship.name}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Model: {starship.model}</li>
              <li className="list-group-item">
                Starship Class: {starship.starship_class}
              </li>
              <li className="list-group-item">
                Max Atmosphering Speed: {starship.max_atmosphering_speed}
              </li>
              <li className="list-group-item">
                Hyperdrive Rating: {starship.hyperdrive_rating}
              </li>
              <li className="list-group-item">Length: {starship.length}</li>
            </ul>
          </div>
        ))}
      </div>
      <StarshipsPagination setSearchParams={setSearchParams} />
    </div>
  );
}
