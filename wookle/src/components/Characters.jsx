import { useState, useEffect } from "react";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function displayAPI() {
      const response = await fetch("https://swapi.dev/api/people/");
      const jsonData = await response.json();
      setCharacters(jsonData.results);
    }
    displayAPI();
  }, []);

  return (
    <ul>
      {characters.map((character, index) => (
        <li key={index}>{character.name}</li>
      ))}
    </ul>
  );
}
