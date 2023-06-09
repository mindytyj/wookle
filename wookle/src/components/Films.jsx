import { useState, useEffect } from "react";

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function displayFilms() {
      const response = await fetch("https://swapi.dev/api/films/");
      const jsonData = await response.json();
      setFilms(jsonData.results);
    }
    displayFilms();
  }, []);

  return (
    <>
      <h1>Films</h1>
      <ul>
        {films.map((film) => (
          <li key={film.episode_id}>{film.title}</li>
        ))}
      </ul>
    </>
  );
}
