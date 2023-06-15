import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "../loading/LoadingScreen";
import GetPoster from "./GetPoster";

export default function Films() {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

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

  if (loading === true) {
    return <LoadingScreen />;
  }

  return (
    <div className="container">
      <h1>Star Wars Films</h1>
      <br />
      <div className="row row-cols-1 row-cols-md-4 g-3 justify-content-center">
        {films.map((film) => (
          <div className="col" key={film.title}>
            <div className="card" style={{ maxWidth: "21rem" }}>
              <GetPoster film={film} />
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
      <br />
    </div>
  );
}
