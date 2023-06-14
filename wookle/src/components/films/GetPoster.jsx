import { useState, useEffect } from "react";
import LoadingScreen from "../loading/LoadingScreen";

export default function GetPoster({ film }) {
  const [loading, setLoading] = useState(true);
  const [posters, setPosters] = useState([]);

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

  let filmId = film.url.split("/")[5];

  let filmPoster = posters.find(
    (image) => parseInt(image.fields.id) === parseInt(filmId)
  );

  return (
    <>
      <img
        src={filmPoster.fields.url}
        className="card-img-top"
        alt={film.title}
      />
    </>
  );
}
