import { useState, useEffect } from "react";

export default function CharacterDetails() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function displayCharacters() {
      const response = await fetch("https://swapi.dev/api/people");
      const jsonData = await response.json();
      setCharacters(jsonData.results);
    }
    displayCharacters();
  }, []);

  return (
    <div className="row row-cols-2 g-5">
      {characters.map((character) => (
        <div
          className="card border-warning mb-2 card text-bg-secondary mb-2 col"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">
              Birth Year: {character.birth_year}
              <br />
              Gender: {character.gender}
              <br />
              Height: {character.height} cm
              <br />
              Mass: {character.mass} kg
              <br />
              Hair Color: {character.hair_color}
              <br />
              Skin Color: {character.skin_color}
              <br />
              Eye Color: {character.eye_color}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
