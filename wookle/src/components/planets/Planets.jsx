import { useState, useEffect } from "react";

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
    <>
      <h1>Star Wars Planets</h1>
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>{planet.name}</li>
        ))}
      </ul>
    </>
  );
}
