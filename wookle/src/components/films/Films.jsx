import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "../loading/LoadingScreen";

export default function Films() {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    async function displayFilms() {
      setLoading(true);
      const response = await fetch("https://swapi.dev/api/films/");
      const jsonData = await response.json();
      setFilms(jsonData.results);
      setLoading(false);
    }
    displayFilms();
  }, []);

  useEffect(() => {
    async function getMoviePosters() {
      setLoading(true);
      const response = await fetch(
        "https://api.airtable.com/v0/appYh5QcDHo7pggTQ/films?api_key=keymttnxc2E87Sin8"
      );
      const jsonData = await response.json();
      setPosters(jsonData.records);
      setLoading(false);
    }
    getMoviePosters();
  }, []);

  if (loading === true) {
    return <LoadingScreen />;
  }

  return (
    <div className="container">
      <h1>Star Wars Films</h1>
      <br />
      <div className="row row-cols-2 row-cols-md-4 g-2 justify-content-center">
        {films.map((film) => (
          <div className="col" key={film.title}>
            <div className="card h-100" style={{ maxWidth: "18rem" }}>
              <img
                src={`${posters.map((poster) => poster.fields.url)}`}
                className="card-img-top"
                alt={`${film.title}`}
              />
              <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <p className="card-text">Release Date: {film.release_date}</p>
                <Link to={`/films/${film.url.split("/")[5]}`}>
                  <button className="btn btn-warning">Film Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
