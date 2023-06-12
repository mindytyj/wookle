import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Films() {
  const [films, setFilms] = useState([]);
  const [poster, setPoster] = useState({});

  useEffect(() => {
    async function displayFilms() {
      const response = await fetch("https://swapi.dev/api/films/");
      const jsonData = await response.json();
      setFilms(jsonData.results);
    }
    displayFilms();
  }, []);

  useEffect(() => {
    async function getMoviePoster() {
      const response = await fetch(
        "https://imdb-api.com/API/SearchTitle/k_wsbtqgma/a%20new%20hope"
      );
      const jsonData = await response.json();
      setPoster(jsonData.results);
    }
    getMoviePoster();
  }, []);

  return (
    <div className="container">
      <h1>Star Wars Films</h1>
      <br />
      <div className="row row-cols-2 row-cols-md-3 g-2">
        {films.map((film, index) => (
          <div className="col" key={film.title}>
            <div className="card h-100" style={{ maxWidth: "18rem" }}>
              <img
                src={`${poster[0].image}`}
                className="card-img-top"
                alt={`${film.title}`}
              />
              <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <p className="card-text">Release Date: {film.release_date}</p>
                <Link to={`/films/${index + 1}`}>
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
