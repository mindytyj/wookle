import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingScreen from "../loading/LoadingScreen";

export default function SpeciesDetails() {
  const [loading, setLoading] = useState(true);
  const [species, setSpecies] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function displaySpeciesDetails() {
      setLoading(true);
      const response = await fetch(`https://swapi.dev/api/species/${id}`);
      const jsonData = await response.json();
      setSpecies(jsonData);
      setLoading(false);
    }
    displaySpeciesDetails();
  }, []);

  if (loading === true) {
    return <LoadingScreen />;
  }

  return (
    <div className="container">
      <h1>{species.name}</h1>
      <br />
      <div className="d-flex justify-content-center">
        <ul
          className="list-group card border-warning mb-2 text-bg-secondary p-3"
          style={{ width: "30rem" }}
        >
          <li className="list-group-item">
            Classification: {species.classification}
          </li>
          <li className="list-group-item">
            Designation: {species.designation}
          </li>
          <li className="list-group-item">
            Average Height: {species.average_height} cm
          </li>
          <li className="list-group-item">
            Average Lifespan: {species.average_lifespan} years
          </li>
          <li className="list-group-item">
            Skin Colors: {species.skin_colors}
          </li>
          <li className="list-group-item">
            Hair Colors: {species.hair_colors}
          </li>
          <li className="list-group-item">Eye Colors: {species.eye_colors}</li>
          <li className="list-group-item">Language: {species.language}</li>
          <br />
          <Link to={"/species"}>
            <button className="btn btn-warning">
              Back to Species Main Page
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
