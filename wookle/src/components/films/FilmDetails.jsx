import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function FilmDetails() {
  const [film, setFilm] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function displayFilmDetails() {
      const response = await fetch(`https://swapi.dev/api/films/${id}`);
      const jsonData = await response.json();
      setFilm(jsonData);
    }
    displayFilmDetails();
  }, []);

  return (
    <div className="container">
      <h1>{film.title}</h1>
      <br />
      <h2>Episode: {film.episode_id}</h2>
      <br />
      <p>{film.opening_crawl}</p>
      <p>Release Date: {film.release_date}</p>
      <p>Directed by {film.director}</p>
      <p>Produced by {film.producer}</p>
    </div>
  );
}
