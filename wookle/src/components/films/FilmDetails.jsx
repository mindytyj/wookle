import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingScreen from "../loading/LoadingScreen";

export default function FilmDetails() {
  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function displayFilmDetails() {
      setLoading(true);
      const response = await fetch(`https://swapi.dev/api/films/${id}`);
      const jsonData = await response.json();
      setFilm(jsonData);
      setLoading(false);
    }
    displayFilmDetails();
  }, []);

  if (loading === true) {
    return <LoadingScreen />;
  }

  return (
    <div className="container">
      <h1>{film.title}</h1>
      <br />
      <div className="d-flex justify-content-center">
        <div
          className="card border-warning mb-2 card"
          style={{ width: "30rem" }}
        >
          <div className="card-body">
            <img src={``} />
            <h2 className="card-title">Episode: {film.episode_id}</h2>
            <br />
            <p className="card-text">{film.opening_crawl}</p>
            <br />
            <p className="card-text">Release Date: {film.release_date}</p>
            <p className="card-text">Directed by {film.director}</p>
            <p className="card-text">Produced by {film.producer}</p>
            <br />
            <Link to={"/films"}>
              <button className="btn btn-warning">
                Back to Films Main Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
