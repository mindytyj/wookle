import { useState, useEffect } from "react";

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
    <>
      <h1>Species in the Star Wars Universe</h1>
      <ul>
        {species.map((speciesType, index) => (
          <li key={index}>{speciesType.name}</li>
        ))}
      </ul>
    </>
  );
}
