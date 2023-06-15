import { Link } from "react-router-dom";
import DeleteFavourite from "./DeleteFavourite";

export default function FavouritesTable({ favourites, setFavourites }) {
  return (
    <table className="table table-warning table-hover">
      <thead>
        <tr>
          <th>Character Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {favourites.map((favourite) => (
          <tr key={favourite.id}>
            <td>{favourite.fields.name}</td>
            <td>
              <Link to={`/favourites/${favourite.id}/edit`}>
                <button className="btn btn-warning">Edit</button>
              </Link>
              <DeleteFavourite
                favouriteId={favourite.id}
                favourites={favourites}
                setFavourites={setFavourites}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
