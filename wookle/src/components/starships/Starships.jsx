import { useState, useEffect } from "react";

export default function Starships() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function displayStarships() {
      const response = await fetch("https://swapi.dev/api/starships/?page=1");
      const jsonData = await response.json();
      setStarships(jsonData.results);
    }
    displayStarships();
  }, []);

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
    </div>
  );
}
