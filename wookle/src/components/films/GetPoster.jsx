import { useState, useEffect } from "react";
import PosterLoading from "../loading/PosterLoading";

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
    return <PosterLoading />;
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
        height={"450px"}
        alt={film.title}
      />
    </>
  );
}
