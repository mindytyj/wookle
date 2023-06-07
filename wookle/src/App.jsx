import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function displayAPI() {
      const response = await fetch("https://swapi.dev/api/people");
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

export default App;
