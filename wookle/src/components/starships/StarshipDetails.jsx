import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function StarshipDetails() {
  const [starship, setStarship] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function displayStarshipDetails() {
      const response = await fetch(`https://swapi.dev/api/starships/${id}/`);
      const jsonData = await response.json();
      setStarship(jsonData);
    }
    displayStarshipDetails();
  }, []);

  return <h1>Starship Details</h1>;
}
