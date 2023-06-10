import { useState, useEffect } from "react";

export default function Starships() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function displayStarships() {
      const response = await fetch("https://swapi.dev/api/starships");
      const jsonData = await response.json();
      setStarships(jsonData.results);
    }
    displayStarships();
  }, []);

  return (
    <>
      <h1>Star Wars Starships</h1>
      <ul>
        {starships.map((starship, index) => (
          <li key={index}>{starship.name}</li>
        ))}
      </ul>
    </>
  );
}
