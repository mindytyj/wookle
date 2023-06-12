import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    </div>
  );
}
