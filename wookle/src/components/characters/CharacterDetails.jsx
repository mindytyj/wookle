import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function CharacterDetails() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function displayCharacter() {
      const response = await fetch(`https://swapi.dev/api/people/${id}/`);
      const jsonData = await response.json();
      setCharacter(jsonData);
    }
    displayCharacter();
  }, []);

  return (
    <div className="container">
      <h1>{character.name}</h1>
      <br />
      <div className="d-flex justify-content-center">
        <div
          className="card border-warning mb-2 card text-bg-secondary mb-2"
          style={{ width: "30rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">Character Details: </h5>
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
            <br />
            <Link to={"/people"}>
              <button className="btn btn-outline-warning">
                Back to Characters Main Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
