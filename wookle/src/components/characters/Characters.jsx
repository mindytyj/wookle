import { useState, useEffect } from "react";
import CharacterPagination from "./CharacterPagination";
import { useNavigate } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function displayCharacters() {
      const response = await fetch(`https://swapi.dev/api/people/?page=1`);
      const jsonData = await response.json();
      setCharacters(jsonData.results);
    }
    displayCharacters();
  }, []);

  return (
    <div className="container">
      <h1>Star Wars Characters</h1>
      <br />
      <div className="row row-cols-1 g-5 grid gap-3 justify-content-center">
        {characters.map((character, index) => (
          <div
            className="card border-warning mb-2 card text-bg-secondary mb-2 col"
            style={{ maxWidth: "18rem" }}
            key={index + 1}
            onClick={() => navigate(`/people/${index + 1}`)}
          >
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <br />
              <button className="btn btn-outline-warning">Details</button>
            </div>
          </div>
        ))}
      </div>
      <CharacterPagination />
    </div>
  );
}
