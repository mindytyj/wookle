import { useState, useEffect } from "react";
import CharacterPagination from "./CharacterPagination";
import { useNavigate, useSearchParams } from "react-router-dom";
import LoadingScreen from "../loading/LoadingScreen";

export default function Characters() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  let page = parseInt(searchParams.get("page"));

  useEffect(() => {
    async function displayCharacters() {
      setLoading(true);
      const response = await fetch(
        page
          ? `https://swapi.dev/api/people/?page=${page}`
          : `https://swapi.dev/api/people`
      );
      const jsonData = await response.json();
      setCharacters(jsonData.results);
      setLoading(false);
    }
    displayCharacters();
  }, [searchParams]);

  if (loading === true) {
    return <LoadingScreen />;
  }

  return (
    <div className="container">
      <h1>Star Wars Characters</h1>
      <br />
      <div className="row row-cols-1 g-5 grid gap-3 justify-content-center">
        {characters.map((character) => (
          <div
            className="card border-warning mb-2 card text-bg-secondary mb-2 col"
            style={{ maxWidth: "18rem" }}
            key={character.name}
            onClick={() => navigate(`/people/${character.url.split("/")[5]}`)}
          >
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <br />
              <button className="btn btn-outline-warning">Details</button>
            </div>
          </div>
        ))}
      </div>
      <CharacterPagination setSearchParams={setSearchParams} />
    </div>
  );
}
