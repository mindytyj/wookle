import { useEffect, useState } from "react";
import LoadingScreen from "../loading/LoadingScreen";
import CreateFavourites from "./CreateFavourites";
import FavouritesTable from "./FavouritesTable";

export default function Favourites() {
  const [loading, setLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    async function fetchFavourites() {
      setLoading(true);
      const response = await fetch(
        "https://api.airtable.com/v0/appQcnrN49tQLpv5Y/favourites?api_key=keymttnxc2E87Sin8"
      );
      const jsonData = await response.json();
      setFavourites(jsonData.records);
      setLoading(false);
    }
    fetchFavourites();
  }, []);

  const addCharacter = (favourite) => setFavourites([...favourites, favourite]);

  if (loading === true) {
    return <LoadingScreen />;
  }

  return (
    <div className="container">
      <h1>Add your Favourite Star Wars Characters</h1>
      <br />
      <CreateFavourites addCharacter={addCharacter} />
      <FavouritesTable favourites={favourites} setFavourites={setFavourites} />
    </div>
  );
}
